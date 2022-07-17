import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
//#region RESETTER
* {
  margin: 0;
  padding: 0;
  line-height: calc(0.25rem + 1em + 0.25rem);
}


*,
::before,
::after {
  box-sizing: border-box;
}


*:where(:not(fieldset, progress, meter)) {
  border-width: 0;
  border-style: solid;
  background-origin: border-box;
  background-repeat: no-repeat;
}

html {
 
  block-size: 100%;

  -webkit-text-size-adjust: none;
}


@media (prefers-reduced-motion: no-preference) {
  html:focus-within {
    scroll-behavior: smooth;
  }
}

body {
  
  -webkit-font-smoothing: antialiased;

  text-rendering: optimizeSpeed;

  min-block-size: 100%;

}


:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block;
}
:where(img, svg, video) {
  block-size: auto;
  max-inline-size: 100%;
}


:where(svg) {
  stroke: none;
  fill: currentColor;
}


:where(svg):where(:not([fill])) {

  stroke: currentColor;
  fill: none;

  stroke-linecap: round;
  stroke-linejoin: round;
}


:where(svg):where(:not([width])) {
  inline-size: 5rem;
}


:where(input, button, textarea, select),
:where(input[type="file"])::-webkit-file-upload-button {
  color: inherit;
  font: inherit;
  font-size: inherit;
  letter-spacing: inherit;
}


:where(textarea) {
  resize: vertical;
}
@supports (resize: block) {
  :where(textarea) {
    resize: block;
  }
}


:where(p, h1, h2, h3, h4, h5, h6) {
  overflow-wrap: break-word;
}


h1 {
  font-size: 2em;
}


:where(ul, ol)[role="list"] {
  list-style: none;
}


a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make it clear that interactive elements are interactive */
:where(a[href], area, button, input, label[for], select, summary, textarea, [tabindex]:not([tabindex*="-"])) {
  cursor: pointer;
  touch-action: manipulation;
}
:where(input[type="file"]) {
  cursor: auto;
}
:where(input[type="file"])::-webkit-file-upload-button,
:where(input[type="file"])::file-selector-button {
  cursor: pointer;
}


@media (prefers-reduced-motion: no-preference) {
  :focus-visible {
    transition: outline-offset 145ms cubic-bezier(0.25, 0, 0.4, 1);
  }
  :where(:not(:active)):focus-visible {
    transition-duration: 0.25s;
  }
}
:where(:not(:active)):focus-visible {
  outline-offset: 5px;
}


:where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"]),
:where(input[type="file"])::-webkit-file-upload-button,
:where(input[type="file"])::file-selector-button {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  text-align: center;
}


:where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"])[disabled] {
  cursor: not-allowed;
}

//#endregion


:root{
  // layout variables
    --navbar-height:56px;
    --sidebar-width:240px;
    --sidebar-mini-width:72px;
    // colors
    --light-theme-background-color: #fff;
    --light-theme-base-color: #000;
    --light-theme-text-color: #030303;
    --light-theme-secondary-color: #606060;

    --light-theme-disabled-color: #9b9b9b;
    --light-theme-divider-color: #dbdbdb;
    --light-theme-hover-color:#000000d;
    --light-theme-border-color:#0000001a;
    --light-theme-main-content-background-color:#f9f9f9;
    

    --dark-theme-background-color: #212121;
    --dark-theme-base-color: #fff;
    --dark-theme-text-color: #fff;
    --dark-theme-main-content-background-color:#181818;
    --dark-theme-secondary-color:#aaa;
    --dark-theme-disabled-color: #646464;
    --dark-theme-divider-color: #3c3c3c;
    --dark-theme-hover-color:#ffffff1a;
    --dark-theme-border-color:#303030;
    
    --background-color:var(--dark-theme-background-color);
    --main-content-bg-color:var(--dark-theme-main-content-background-color);
    --base-color:var(--dark-theme-base-color);
    --text-color:var(--dark-theme-text-color);
    --secondary-color:var(--dark-theme-secondary-color);
    --disabled-color:var(--dark-theme-disabled-color);
    --divider-color:var(--dark-theme-divider-color);
    --hover-color:var(--dark-theme-hover-color);
    --border-color:var(--dark-theme-border-color);
   
    
    --sign-in-button-color:#3ea6ff;
    --subscribe-button-bg:#c00;
    --subscribe-button-color:#fff;
    --comment-button-bg:#065fd4;
    --comment-button-inactive-bg:var(--divider-color);
    --transition-duration: 250ms;
    --navbar-zindex:700;
    --sidebar-zindex:700;
}
html.light{
  --background-color:var(--light-theme-background-color);
  --main-content-bg-color:var(--light-theme-main-content-background-color);
    --base-color:var(--light-theme-base-color);
    --text-color:var(--light-theme-text-color);
    --secondary-color:var(--light-theme-secondary-color);
    --disabled-color:var(--light-theme-disabled-color);
    --divider-color:var(--light-theme-divider-color);
    --hover-color:var(--light-theme-hover-color);
    --border-color:var(--light-theme-border-color);
    


}
a{
  color:inherit;
  text-decoration: none;
}

body{
    margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:var(--background-color);
  color:var(--text-color);
}

`;
