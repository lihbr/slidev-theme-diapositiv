import { computed, type ComputedRef, type Ref, ref, unref } from "vue"

const runningPolls: Record<string, number> = {}
const pollResults: Record<string, Ref<Record<string, number>>> = {}

function isPolling(id: string) {
	return runningPolls[id] > 0
}

async function poll(id: string): Promise<void> {
	if (
		document.location.host === "localhost:3030" ||
		(window.document.hasFocus() && window.localStorage.poll === "true")
	) {
		try {
			// eslint-disable-next-line no-console
			console.info(`Fetching results for poll \`${id}\``)
			const res = await fetch(`https://lihbr.com/api/poll?id=${id}`)
			const json = (await res.json()) as {
				id: string
				results: Record<string, number>
			}

			pollResults[id].value = json.results
		} catch (error) {
			console.error(error)
		}
	}

	if (isPolling(id)) {
		setTimeout(() => {
			if (isPolling(id)) {
				poll(id)
			}
		}, 750)
	}
}

function startPolling(id: string) {
	if (!runningPolls[id]) {
		runningPolls[id] = 0
	}

	runningPolls[id]++

	if (runningPolls[id] === 1) {
		poll(id)
	}
}

function stopPolling(id: string) {
	runningPolls[id] = Math.max(runningPolls[id] - 1, 0)
}

export function usePoll(id: string | Ref<string>): {
	start: () => void
	stop: () => void
	results: ComputedRef<Record<string, number>>
} {
	if (!pollResults[unref(id)]) {
		pollResults[unref(id)] = ref({})
	}

	const start = () => {
		startPolling(unref(id))
	}

	const stop = () => {
		stopPolling(unref(id))
	}

	const results = computed(() => {
		return pollResults[unref(id)].value
	})

	return {
		start,
		stop,
		results,
	}
}
