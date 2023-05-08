// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    initialColorMode: "light",
    useSystemColorMode: false,
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
        mOrange: '#FF6347',
        mCarbon: '#2b2b2b',
        bgColor: '#2b2b2b',
        bgColorLight: '#ECECEC',
        projectCardColor: '#4D4D4D',
        badgeColor: '#4D4D4D',
        footerColor: '#232323',
        floatBtnClr: '',

    },
})