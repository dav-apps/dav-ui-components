import { css } from "@lit/reactive-element"

export const filterGroupStyles = css`
   .filter-group-container {
      display: flex;
   }

   .active-indicator {
      position: absolute;
      background-color: var(--dav-color-primary);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      transition: 200ms;
   }
`
