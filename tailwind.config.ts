import type { Config } from 'tailwindcss'

const config: Config = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-quickSand)'],
            },
        },
    },
    plugins: [],
    corePlugins: {},
}

export default config
