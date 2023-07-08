import { extendTheme } from "@chakra-ui/react"
import '@fontsource/monofett';
import '@fontsource/gothic-a1';

// Custom Chakra themes used in this app


// Setting the background to black, using custom font
export const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "black",
        },
      }),
    },
    fonts: {
        heading: `'Monofett'`,
        body: `'Gothic A1'`
    }
});