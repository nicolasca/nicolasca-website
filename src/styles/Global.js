import { createGlobalStyle } from "styled-components"
import { defaultTheme } from "./Theme"

const GlobalStyle = createGlobalStyle`
    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
    box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
    margin: 0;
    }
    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
    height: 100%;
    }
    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }
    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }
    /*
    7. Remove built-in form typography styles
    */
    input, button, textarea, select {
    font: inherit;
    }
    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }
    /*
    9. Create a root stacking context
    */
    #root, #__next {
    isolation: isolate;
    }


    @font-face {
      font-family: "Recursive";
      src: url("../../static/fonts/Recursive_variable.woff2")
        format("woff2-variations");
      font-weight: 300 1000;
      font-display: swap;
}

    html {
        --backgroundColor: ${defaultTheme.backgroundColor};
        --textColor: ${defaultTheme.textColor};
        --header-height: 4rem;
        --red: hsl(0deg, 100%, 39%);
       --blue: #0b48f0;
       --black: ${defaultTheme.textColor};
    }
    body {
        color: var(--textColor);
        background-color: var(--backgroundColor);
    }

    span, a, p {
        font-family: "Recursive", "monospace", "Open Sans Regular";
        color: var(--textColor);
    }

    
`

export default GlobalStyle
