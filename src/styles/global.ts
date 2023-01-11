import { createGlobalStyle } from "styled-components";
import { baseTheme } from "./theme";
import { normalize } from "styled-normalize";
const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
  }

  *::before,
  *::after {
  }

  body {
    background-color: ${baseTheme.colors.darkBackground};
    color: ${baseTheme.colors.darkColor};
  }
  button {
    border: 0;
    cursor:pointer;
  }
  /* ================ CHECKBOX ======== */
  /* ================================== */
   .sound {
      height: 40px;
      border-radius: 20px;
      width: 4em;
      &.on {
        border: 2px solid ${baseTheme.colors.green};
      }
      &.off {
        border: 2px solid ${baseTheme.colors.pomodoro};
      }
    }
   .check-thumb {
     cursor: pointer;
     width: 40px;
     height: 40px;
     border-radius: 50%;
       opacity: .8;
      .on > & {
        background-color: ${baseTheme.colors.green};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' 
                              stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
  <path stroke-linecap='round' stroke-linejoin='round' d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
</svg>");
      }
      .off > & {
        background-color: ${baseTheme.colors.pomodoro};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' 
                              stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
  <path stroke-linecap='round' stroke-linejoin='round' d='M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53' />
</svg>");
      }
     &:hover {
       opacity: 1;
     }
     &:active, &:hover {
       border: none;
     }
     &:focus, &:focus-visible {
       border: none;
       outline: none;
       opacity: .9;
     }
    }
  /* ================ SLIDER ========== */
  /* ================================== */
   .slider {
      height: 40px;
      border-radius: 20px;
      &.green {
        border: 2px solid ${baseTheme.colors.green};
      }
      &.red {
        border: 2px solid ${baseTheme.colors.pomodoro};
      }
    }
   .thumb {
     cursor: pointer;
     width: 40px;
     height: 40px;
     border-radius: 50%;
       opacity: .8;
      .green > & {
        background-color: ${baseTheme.colors.green};
      }
      .red > & {
        background-color: ${baseTheme.colors.pomodoro};
      }
     &:hover {
       opacity: 1;
     }
     &:active, &:hover {
       border: none;
     }
     &:focus, &:focus-visible {
       border: none;
       outline: 2px solid ${baseTheme.colors.primary} ;
       opacity: .9;
     }
    }

  /* ================ ICONS =========== */
  /* ================================== */
    .stop-icon {
      padding: .5em;
    }
  `;
export default GlobalStyles;
