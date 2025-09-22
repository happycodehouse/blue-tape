import { useLenis } from "lenis/react";
import { useEffect } from "react";
import UIkit from 'uikit';

declare const UIkit: any;

let lightboxState = false;
let debounceTimer: any = null;

export const useLightboxLenis = () => {
  const lenis = useLenis();

  useEffect(() => {
    (UIkit as any).update();

    const handleBeforeShow = () => {
      if (debounceTimer) clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        if (!lightboxState) {
          lightboxState = true;
          lenis?.stop();
          // console.log("Lightbox opened - Lenis stopped");
        }
      }, 100);
    };

    const handleHide = () => {
      if (debounceTimer) clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        if (lightboxState) {
          lightboxState = false;
          lenis?.start();
          // console.log("Lightbox closed - Lenis started");
        }
      }, 100);
    };

    (UIkit as any).util.on(document, "beforeshow", ".uk-lightbox", handleBeforeShow);
    (UIkit as any).util.on(document, "hide", ".uk-lightbox", handleHide);

    return () => {
      (UIkit as any).util.off(document, "beforeshow", ".uk-lightbox", handleBeforeShow);
      (UIkit as any).util.off(document, "hide", ".uk-lightbox", handleHide);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [lenis]);
};