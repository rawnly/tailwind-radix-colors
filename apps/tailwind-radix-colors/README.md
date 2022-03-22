# TailwindCSS Radix Colors
> A simple tailwind plugin to  add and simplify [radix colors][radix-colors] palettes in TailwidCSS

## Installation
In your `tailwind.config.js`

```js
	const colors = require('tailwindcss/colors')
	const tailwindRadix = require('tailwind-radix-colors')

	module.exports = {
		content: [],
		theme: {
			colors: {
				...tailwindRadix.colors,
				black: colors.black,
				white: colors.white,
				transparent: colors.transparent
			},
		},
		plugins: [
			tailwindRadix.plugin
		],
	}
```

## How?
It uses tailwind to apply the `Dark` version of a radix color palette when in darkmode. Code example below:


```html
	<button class="text-bronze-11 bg-bronze-3 hover:bg-bronze-4 dark:text-bronze-11 dark:bg-bronze-3 dark:hover:bg-bronze-4">
		Click Me
	</button>

	<!-- Will becoem -->

	<button class="rx-text-bronze-11 rx-bg-bronze-3 hover:rx-bg-bronze-4">
		Click Me
	</button>
```

[radix-colors]: https://radix-ui.com/colors
