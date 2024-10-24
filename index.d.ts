// index.d.ts

declare module "toasty-benos" {
  // Define the types for the options your toast can accept
  export interface ToastOptions {
    variant?: "INFO" | "SUCCESS" | "ERROR";
    title?: string;
    subtitle?: string;
    duration?: number;
    isDismissable?: boolean;
    isShowTimeBar?: boolean;
    position?:
      | "bottom-left"
      | "bottom-right"
      | "bottom-center"
      | "top-left"
      | "top-right"
      | "top-center";
    dismissAnimationDirection?: "left" | "right" | "top" | "bottom";
    appearAnimationDirection?: "left" | "right" | "top" | "bottom";
    isShowAppearAndDismissAnimation?: boolean;
    isShowIconAnimations?: boolean;
  }

  // The main function to show the toast
  export function showToast(options: ToastOptions): void;

  // Export any other functions or variables if necessary
  // export const someConstant: string;
}
