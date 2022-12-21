import { css } from "@lit/reactive-element"

export const tabStyles = css`
   #container {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 18px;
      color: #4b4c4e;
      padding: 0 16px;
   }

   :host(:hover) {
      cursor: pointer;
   }
`