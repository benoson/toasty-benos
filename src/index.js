const getXIcon = () => {
  const xIcon = document.createElement("div");
  xIcon.innerHTML = `
  <svg width="100%" height="100%" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>close [#1511]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"> </polygon> </g> </g> </g> </g></svg>
  `;

  return xIcon;
};

const getSuccessIcon = () => {
  const successIcon = document.createElement("div");
  successIcon.innerHTML = `
  <svg width="100%" height="100%" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>checkmark2</title> <path d="M28.998 8.531l-2.134-2.134c-0.394-0.393-1.030-0.393-1.423 0l-12.795 12.795-6.086-6.13c-0.393-0.393-1.029-0.393-1.423 0l-2.134 2.134c-0.393 0.394-0.393 1.030 0 1.423l8.924 8.984c0.393 0.393 1.030 0.393 1.423 0l15.648-15.649c0.393-0.392 0.393-1.030 0-1.423z"></path> </g></svg>
  `;

  return successIcon;
};

const getInfoIcon = () => {
  const infoIcon = document.createElement("div");
  infoIcon.innerHTML = `
  <svg width="100%" height="100%" fill="#ffffff" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="Icons" x="-704" y="-192" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <path id="exclamation" d="M34.476,42.174l-5.464,0l-0.425,-34.192l6.348,0l-0.459,34.192Zm-6.118,10.405c0,-0.981 0.3,-1.805 0.9,-2.47c0.599,-0.665 1.488,-0.998 2.666,-0.998c1.178,0 2.073,0.333 2.683,0.998c0.611,0.665 0.916,1.489 0.916,2.47c0,0.982 -0.305,1.794 -0.916,2.438c-0.61,0.643 -1.505,0.965 -2.683,0.965c-1.178,0 -2.067,-0.322 -2.666,-0.965c-0.6,-0.644 -0.9,-1.456 -0.9,-2.438Z" style="fill-rule:nonzero;"></path> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> <g id="coffee-bean-filled"> </g> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> <g id="clipboard"> </g> <g id="clipboard-paste"> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g></svg>
  `;

  return infoIcon;
};

const TOAST_VARIANTS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  INFO: "INFO",
};

const TOAST_POSITIONS = {
  "bottom-left": "bottom-left",
  "bottom-right": "bottom-right",
  "bottom-center": "bottom-center",
  "top-left": "top-left",
  "top-right": "top-right",
  "top-center": "top-center",
};

const ANIMATION_DIRECTIONS = {
  left: "left",
  right: "right",
  top: "top",
  bottom: "bottom",
};

const VARIANT_TO_PROPS = {
  [TOAST_VARIANTS.ERROR]: {
    background: "#c91f1f",
    iconElement: getXIcon(),
    timeBarBackground: "#071a52",
  },
  [TOAST_VARIANTS.INFO]: {
    background: "#071a52",
    iconElement: getInfoIcon(),
    timeBarBackground: "#19c6e3",
  },
  [TOAST_VARIANTS.SUCCESS]: {
    background: "#10b151",
    iconElement: getSuccessIcon(),
    timeBarBackground: "#071a52",
  },
};

class ToastyBenos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  hideToast = () => {
    this.remove();
  };

  // the wrapper id for the wrapper element
  wrapperId;

  // called when the element is appended to the DOM
  connectedCallback() {
    let variant = this.getAttribute("variant");
    const title = this.getAttribute("title");
    const subtitle = this.getAttribute("subtitle");
    const duration = parseInt(this.getAttribute("duration"));
    const isDismissable = this.getAttribute("is-dismissable") === "true";
    const isShowTimeBar = this.getAttribute("is-show-time-bar") === "true" && duration;
    const dismissAnimationDirection = this.getAttribute("dismiss-animation-direction");
    const appearAnimationDirection = this.getAttribute("appear-animation-direction");
    const isShowAppearAndDismissAnimation =
      this.getAttribute("is-show-appear-and-dismiss-animationation") === "true";
    const isShowIconAnimations = this.getAttribute("is-show-icon-animations") === "true";

    if (!TOAST_VARIANTS[variant]) variant = TOAST_VARIANTS.INFO;

    const variantProps = VARIANT_TO_PROPS[variant];

    const paddingDown = isShowTimeBar ? "16px" : "8px";
    const padding = isDismissable ? `8px 64px ${paddingDown} 16px` : `8px 16px ${paddingDown} 16px`;

    this.wrapperId = `toasty-benos-${(Math.random() * 1).toFixed(3)}`.replace(".", "");

    this.shadowRoot.innerHTML = `
        <style>
            @keyframes dismiss-animation-left {
                from { left: 0px; opacity: 1; }
                to { left: -100px; opacity: 0; }
            }

            @keyframes dismiss-animation-right {
                from { right: 0px; opacity: 1; }
                to { right: -100px; opacity: 0; }
            }

            @keyframes dismiss-animation-top {
                from { top: 0px; opacity: 1; }
                to { top: -100px; opacity: 0; }
            }

            @keyframes dismiss-animation-bottom {
                from { bottom: 0px; opacity: 1; }
                to { bottom: -100px; opacity: 0; }
            }
                
            @keyframes appear-animation-left {
                from { left: -100px; opacity: 0; }
                to { left: 0px; opacity: 1; }
            }

            @keyframes appear-animation-right {
                from { right: -100px; opacity: 0; }
                to { right: 0px; opacity: 1; }
            }

            @keyframes appear-animation-top {
                from { top: -100px; opacity: 0; }
                to { top: 0px; opacity: 1; }
            }

            @keyframes appear-animation-bottom {
                from { bottom: -100px; opacity: 0; }
                to { bottom: 0px; opacity: 1; }
            }

            @keyframes main-icon-animation {
                50% { transform: scale(1.2) rotate(15deg) }
                100% { transform: scale(1) rotate(0deg) }
            }

            @keyframes time-bar-animation {
                from { width: 100%; }
                to { width: 0%; }
            }

            .toasty-benos {
                display: flex;
                justify-content: space-between;
                column-gap: 16px;
                align-items: center;
                border-radius: 2px;
                color: white;
                background-color: ${variantProps.background};
                padding: ${padding};
                font-family: system-ui;
                position: relative;
            }

            .toasty-benos-main-icon {
                width: 32px;
                height: 32px;
                transition: 1s all;
            }

            .toasty-benos-content {
                display: flex;
                flex-direction: column;
                row-gap: 4px;
                width: content-width;
            }

            .toasty-benos-subtitle {
                font-size: 14px;
            }

            .toasty-benos-dismiss-wrapper {
                position: absolute;
                top: 8px;
                right: 12px;
            }

            .toasty-benos-x-icon {
                cursor: pointer;
                width: 12px;
                height: 12px;
            }

            .toasty-benos-time-bar {
                height: 4px;
                position: absolute;
                bottom: 0px;
                left: 0px;
            }
        </style>

        <div id=${this.wrapperId} class="toasty-benos">
            <div id="icon-container" class="toasty-benos-main-icon"></div>

            <div class="toasty-benos-content">
                <span>${title}</span>

                ${
                  subtitle !== "undefined"
                    ? `<span class="toasty-benos-subtitle">${subtitle}</span>`
                    : ""
                }
            </div>

            ${
              isDismissable
                ? `<div class="toasty-benos-dismiss-wrapper">
                    <div id="toasty-benos-dismiss-icon" class="toasty-benos-x-icon"></div>
                </div>`
                : ""
            }

            ${
              isShowTimeBar
                ? `<div id="toasty-benos-time-bar" class="toasty-benos-time-bar" style="width: 100%"></div>`
                : ""
            }
        </div>
    `;

    // appending the svg element to the icon container, instead of importing an SVG
    this.shadowRoot.querySelector("#icon-container").appendChild(variantProps.iconElement);

    // if dismissable, add "click" event listener for the "x" icon
    if (isDismissable) {
      const dismissEl = this.shadowRoot.querySelector(".toasty-benos-dismiss-wrapper");
      dismissEl.addEventListener("click", this.hideToast);

      const dismissIconEl = this.shadowRoot.querySelector("#toasty-benos-dismiss-icon");
      dismissIconEl.appendChild(getXIcon());
    }

    // adding animation for the time bar
    if (isShowTimeBar) {
      const timeBarEl = this.shadowRoot.querySelector("#toasty-benos-time-bar");
      timeBarEl.style.background = variantProps.timeBarBackground;
      timeBarEl.style.animation = `time-bar-animation ${duration}ms cubic-bezier(0.9, 0.44, 0.27, 0.89) 0s 1 normal none running`;
    }

    // adding appearance/dismiss animation
    if (isShowAppearAndDismissAnimation) {
      const wrapperEl = this.shadowRoot.querySelector(`#${this.wrapperId}`);
      wrapperEl.style.animation = `appear-animation-${appearAnimationDirection} 0.5s cubic-bezier(0.53, 0.52, 0.21, 1.08) 0s 1 normal none running`;

      // if duration exists, add dismiss animation
      if (duration) {
        setTimeout(() => {
          wrapperEl.style.animation = `dismiss-animation-${dismissAnimationDirection} 0.5s cubic-bezier(0.53, 0.52, 0.21, 1.08) 0s 1 normal none running`;
        }, duration - 500);
      }
    }

    if (isShowIconAnimations) {
      const mainIconEl = this.shadowRoot.querySelector(".toasty-benos-main-icon");
      mainIconEl.style.animation = "main-icon-animation 1.5s";
    }

    // removing node after duration
    if (duration) {
      setTimeout(() => {
        this.remove();
      }, duration);
    }
  }

  // called when the element is removed from the DOM
  disconnectedCallback() {
    const isDismissable = this.getAttribute("is-dismissable") === "true";

    if (isDismissable) {
      const dismissEl = this.shadowRoot.querySelector(".toasty-benos-dismiss-wrapper");
      dismissEl.removeEventListener("click", this.hideToast);
    }
  }
}

// all of the toasts wrappers - one for each possible position
const initToastPositionalWrappers = () => {
  Object.keys(TOAST_POSITIONS).forEach((position) => {
    const specificToastPositionWrapper = document.createElement("div");
    specificToastPositionWrapper.setAttribute("id", `toasty-benos-wrapper-${position}`);

    let right = "16px";
    let left = "";
    let bottom = "16px";
    let top = "";
    let transform = "";
    let alignItems = "flex-end";

    switch (position) {
      case TOAST_POSITIONS["bottom-left"]:
        left = "16px";
        right = "";
        bottom = "16px";
        top = "";
        alignItems = "flex-start";
        break;

      case TOAST_POSITIONS["bottom-center"]:
        left = "50%";
        right = "";
        bottom = "16px";
        top = "";
        transform = "translate(-50%)";
        alignItems = "flex-start";
        break;

      case TOAST_POSITIONS["top-left"]:
        left = "16px";
        right = "";
        bottom = "";
        top = "16px";
        alignItems = "flex-start";
        break;

      case TOAST_POSITIONS["top-center"]:
        left = "50%";
        right = "";
        bottom = "";
        top = "16px";
        transform = "translate(-50%)";
        alignItems = "flex-start";
        break;

      case TOAST_POSITIONS["top-right"]:
        left = "";
        right = "16px";
        bottom = "";
        top = "16px";
        alignItems = "flex-end";
        break;

      default:
        break;
    }

    specificToastPositionWrapper.style.left = left;
    specificToastPositionWrapper.style.right = right;
    specificToastPositionWrapper.style.top = top;
    specificToastPositionWrapper.style.bottom = bottom;
    specificToastPositionWrapper.style.transform = transform;
    specificToastPositionWrapper.style.alignItems = alignItems;

    specificToastPositionWrapper.style.position = "absolute";
    specificToastPositionWrapper.style.display = "flex";
    specificToastPositionWrapper.style.flexDirection = "column";
    specificToastPositionWrapper.style.rowGap = "16px";

    document.body.appendChild(specificToastPositionWrapper);
  });
};
initToastPositionalWrappers();

export const showToast = ({
  variant = TOAST_VARIANTS.INFO,
  title,
  subtitle,
  duration,
  isDismissable = true,
  isShowTimeBar = false,
  position = TOAST_POSITIONS["bottom-right"],
  dismissAnimationDirection = ANIMATION_DIRECTIONS.bottom,
  appearAnimationDirection = ANIMATION_DIRECTIONS.bottom,
  isShowAppearAndDismissAnimation = false,
  isShowIconAnimations = false,
}) => {
  const toast = document.createElement("toasty-benos");

  toast.setAttribute("variant", variant);
  toast.setAttribute("title", title || "Placeholder");
  toast.setAttribute("subtitle", subtitle);
  toast.setAttribute("duration", duration || 0);
  toast.setAttribute("is-dismissable", isDismissable);
  toast.setAttribute("is-show-time-bar", isShowTimeBar);
  toast.setAttribute("position", position);
  toast.setAttribute("dismiss-animation-direction", dismissAnimationDirection);
  toast.setAttribute("appear-animation-direction", appearAnimationDirection);
  toast.setAttribute("is-show-appear-and-dismiss-animationation", isShowAppearAndDismissAnimation);
  toast.setAttribute("is-show-icon-animations", isShowIconAnimations);

  // we have several wrappers - one for each possible position
  const toastsWrapper = document.getElementById(`toasty-benos-wrapper-${position}`);
  const windowHeight = window.innerHeight;

  //   if the height of the wrapper is half of the window, remove the first one to make room for the next one
  if (toastsWrapper.clientHeight >= windowHeight / 2) {
    toastsWrapper.removeChild(toastsWrapper.childNodes[0]);
  }

  toastsWrapper.appendChild(toast);
};

// defining the element in the DOM
window.customElements.define("toasty-benos", ToastyBenos);
