import { css } from "@emotion/react";

export const globalStyles = css`
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

@charset "UTF-8";

/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'); */


@font-face {
  font-family: Montserrat;
  font-weight: 500;
  src: url("../assets/fonts/Montserrat-VariableFont_wght.ttf") format("truetype");
}

@font-face {
  font-family: Montserrat;
  font-weight: 800;
  src: url("../assets/fonts/Montserrat-ExtraBold.ttf") format("truetype");
}
@font-face {
  font-family: Inter;
  font-weight: 400;
  src: url("../assets/fonts/Inter-Regular.ttf") format("truetype");
}
@font-face {
  font-family: Inter;
  font-weight: 500;
  src: url("../assets/fonts/Inter-Medium.ttf") format("truetype");
}
@font-face {
  font-family: Inter;
  font-weight: 600;
  src: url("../assets/fonts/Inter-SemiBold.ttf") format("truetype");
}
[class*=__container] {
  max-width: 1440px;
  padding-inline: clamp(0.625rem, -0.625rem + 6.25vw, 5rem);
  margin: 0 auto;
}

:root {
  --text-color: #fff;
  --green-text-color: #35C7AD;
  --dark-text-color: #1E1F21;
}

.green-blue-grarient {
  border-radius: 25px;
}

html {
  box-sizing: border-box;
}

*, *:after, *:before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  min-width: 320px;
  min-height: 100vh;
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  font-size: 20px;
  line-height: 1.4;
  color: #fff;
  background-color: #1E1F21;
}

img, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  max-height: 100%;
}

button {
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1, h2, h3, p, figure {
  margin: 0;
}
`;
