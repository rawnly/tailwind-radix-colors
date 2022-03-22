# TailwindCSS Radix Colors
> A simple tailwind plugin to  add and simplify [radix colors][radix-colors] palettes in [TailwidCSS][tailwind]

## Installation

```sh
	yarn add tailwind-radix-colors
```

## Usage
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
			// plugin options are optional!
			tailwindRadix.plugin({
				prefix: 'rx', // default: rx
				properties: ['bg', 'text', 'border' ] // default: ['bg', 'shadow', 'ring', 'border', 'text' ]
			})
		],
	}
```

## How?
It uses tailwind to apply the `Dark` version of a radix color palette when in darkmode. Code example below:
> Check out the [docs](apps/docs) to see a [real example][preview]

```html
	<button class="text-bronze-11 bg-bronze-3 hover:bg-bronze-4 dark:text-bronze-11 dark:bg-bronze-3 dark:hover:bg-bronze-4">
		Click Me
	</button>

	<!-- becomes -->

	<button class="rx-text-bronze-11 rx-bg-bronze-3 hover:rx-bg-bronze-4">
		Click Me
	</button>
```

[radix-colors]: https://radix-ui.com/colors
[tailwind]: https://tailwindcss.com
[preview]: https://tailwind-radix.fedevitale.dev
