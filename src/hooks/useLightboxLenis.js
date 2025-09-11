import { useEffect } from "react";
import { useLenis } from "lenis/react";
import UIkit from "uikit";

let lightboxState = false;
let debounceTimer = null;

export const useLightboxLenis = () => {
  const lenis = useLenis();
  
  useEffect(() => {
    UIkit.update();
    
    const handleBeforeShow = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      
      debounceTimer = setTimeout(() => {
        if (!lightboxState) {
          lightboxState = true;
          lenis?.stop();
          console.log("Lightbox opened - Lenis stopped");
        }
      }, 100);
    };
    
    const handleHide = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      
      debounceTimer = setTimeout(() => {
        if (lightboxState) {
          lightboxState = false;
          lenis?.start();
          console.log("Lightbox closed - Lenis started");
        }
      }, 100);
    };
    
    UIkit.util.on(document, "beforeshow", ".uk-lightbox", handleBeforeShow);
    UIkit.util.on(document, "hide", ".uk-lightbox", handleHide);
    
    return () => {
      UIkit.util.off(document, "beforeshow", ".uk-lightbox", handleBeforeShow);
      UIkit.util.off(document, "hide", ".uk-lightbox", handleHide);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [lenis]);
};