import {
  DarkFoundation,
  createGlobalStyle,
  css,
} from "@channel.io/bezier-react";

const fontStyle = css`
  font-family:
    "Inter",
    "NotoSansJP",
    "NotoSansKR",
    -apple-system,
    BlinkMacSystemFont,
    "Helvetica Neue",
    "Segoe UI",
    "Roboto",
    system-ui,
    sans-serif;
`;

const resetStyle = css`
  * {
    font-variant-ligatures: none;
  }

  *,
  &::after,
  &::before {
    box-sizing: border-box;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font: inherit;
    color: inherit;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }

  p {
    margin: 0 0 10px;
  }

  a,
  a:hover,
  a:link {
    text-decoration: none;
  }

  &::-webkit-contacts-auto-fill-button {
    opacity: 0;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ foundation }) => foundation?.theme?.["txt-black-dark"]};
    opacity: 1;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${fontStyle}
  ${resetStyle}

  html,
  body {
    height: 100%;
    margin: 0;
    overflow: hidden;
    background-color: ${({ foundation }) =>
      foundation?.theme?.["bg-white-normal"]};
    color-scheme: ${({ foundation }) =>
      foundation === DarkFoundation ? "dark" : "light"};
  }

  body {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857;
    color: ${({ foundation }) => foundation?.theme?.["txt-black-darkest"]};
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
