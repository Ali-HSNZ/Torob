import { type MantineThemeOverride } from '@mantine/core'

const mantineThemeConfig: MantineThemeOverride = {
    breakpoints: {
        xs: '576px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1440px',
    },
    fontFamily: 'unset',
    primaryColor: 'red',
    primaryShade: { light: 8, dark: 5 },
}
export default mantineThemeConfig
