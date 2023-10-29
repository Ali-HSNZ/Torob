import localFont from 'next/font/local'

const quickSandFonts = localFont({
    src: [
        {
            path: '../../../../../public/fonts/quicksand/Quicksand-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/quicksand/Quicksand-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/quicksand/Quicksand-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/quicksand/Quicksand-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/quicksand/Quicksand-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'block',
    variable: '--font-quickSand',
})

export default quickSandFonts
