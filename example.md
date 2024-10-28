---
theme: ./
info: |
  ## maintaining your company’s open-source ecosystem

  or how to make great npm packages for the mere mortal

  <br />

  Everything from<br>this talk & more -^<br>[lucie.red/nuxtnation](https://lucie.red/nuxtnation)
---

# maintaining your company’s open-source ecosystem

or how to make great npm packages for the mere mortal

---
layout: title
---

# maintaining your company’s open-source ecosystem

or how to make great npm packages for the mere mortal

---
layout: interaction
---

# a better way to think about making packages as an organization or an individual.

---
layout: interaction
---

# a better way to think about making packages as an organization or an individual.

---
layout: interaction
---

# let's make it interactive!

a little~

---
layout: interaction
---

if the package works fine enough for you and others, it’s already great!

---
layout: interaction
---

# [lucie.red/nuxtnation](https://lucie.red/nuxtnation)

^- get everything from this talk, and more

---
layout: interaction
---

# thanks!

-> [lucie.red/nuxtnation](https://lucie.red/nuxtnation)

---
centered: true
---

![lille](https://images.prismic.io/lihbr/ZtybwhoQrfVKl0AD_240907-lille-0007.jpg?auto=format,compress)

---

## what's a package ecosystem?

![lille](https://images.prismic.io/lihbr/ZtybwhoQrfVKl0AD_240907-lille-0007.jpg?auto=format,compress)

---
centered: true
---

![lille](https://images.prismic.io/lihbr/ZtybwhoQrfVKl0AD_240907-lille-0007.jpg?auto=format,compress)

lille europe

---

## about me

- I’m from France
- started development with MediaWiki
- I worked at a bank™
- Developer Experience Engineer at Prismic
- Proud Nuxt contributor & team member

---

## about me

<v-clicks>

- 🥖 I’m from France
- 📚 started development with MediaWiki
- 🏦 I worked at a bank™
- 📑 Developer Experience Engineer at Prismic
- ⛰️ Proud Nuxt contributor & team member

</v-clicks>

---
layout: poll
id: pkg
left:
  id: "yes"
  href: "https://lucie.red/pkg"
  label: "yes"
right:
  id: "no"
  href: "https://lucie.red/nopkg"
  label: "no"
---

## have you ever opened an issue or a feature request on an open-source project?

---

## package.json

```json{all|16|9-19|4-8|all}
{
	"name": "elk.zone",
	"version": "0.5.0",
	"scripts": {
		"build": "nuxi build",
		"dev": "nuxi dev --port 5314",
		"generate": "nuxi generate"
	},
	"dependencies": {
		"@vueuse/core": "^9.10.0",
		"blurhash": "^2.0.4",
		"masto": "^5.5.0"
	},
	"devDependencies": {
		"eslint": "^8.31.0",
		"nuxt": "^3.0.0",
		"prettier": "^2.8.2",
		"typescript": "^4.9.4"
	}
}
```

---

## package.json

Not straightforward to answer, but "basically":

<v-clicks>

- `exports` only if you want to be future-facing, and only future-facing
- `main`, `module`, and `exports` if you want (or need to) be compatible with most setup

</v-clicks>

---

## What are Nuxt Modules?

Nuxt Modules are registered inside your Nuxt config file:

```typescript {all|5|6|1,7|8-11|5,14}
import thirdModule from "third-module"

export default defineNuxtConfig({
	modules: [
		"@vite-pwa/nuxt",
		"~/modules/my-module",
		thirdModule,
		[
			"@nuxtjs/prismic",
			{ endpoint: "example" }
		],
	],

	pwa: { writePlugin: false }
})
```
