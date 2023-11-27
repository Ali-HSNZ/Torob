import type { Config } from 'tailwindcss'

const config: Config = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-quickSand)'],
            },
            colors: {
                beetColor: '#9331B2',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
}

export default config
