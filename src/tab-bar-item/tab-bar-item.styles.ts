import { css } from "@lit/reactive-element"

export const tabStyles = css`
   :host(:hover) {
      cursor: pointer;
   }

   #container {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      font-size: 18px;
      color: #4b4c4e;
      padding: 0 16px;
      transition: all 500ms;
   }

   #container.active {
      color: var(--secondary);
   }

   #border {
      border-bottom: 3px solid;
      border-radius: 3px;
      margin-top: -6px;
      transition: all 150ms;
   }

   #container.active > #border {
      width: 35%;
   }

   #container.active:hover > #border {
      width: 28%;
   }

   #container:not(.active) > #border {
      width: 0;
   }
`