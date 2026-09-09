import { useEffect } from "react";

const FOOTER_PAD_BOTTOM = "calc(16px + env(safe-area-inset-bottom, 0px))";

function pinFooter() {
  const footer = document.querySelector(".ticket-footer") as HTMLElement | null;
  const shell = document.querySelector(".app-shell") as HTMLElement | null;
  const html = document.documentElement;
  const { body } = document;

  html.style.height = "100%";
  html.style.minHeight = "-webkit-fill-available";
  html.style.background = "#ffffff";
  html.style.overflow = "hidden";

  body.style.height = "100%";
  body.style.minHeight = "-webkit-fill-available";
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.background = "#1e7443";

  if (shell) {
    shell.style.position = "fixed";
    shell.style.top = "0";
    shell.style.left = "0";
    shell.style.right = "0";
    shell.style.bottom = "0";
    shell.style.width = "auto";
    shell.style.height = "auto";
    shell.style.minHeight = "0";
    shell.style.background = "#1e7443";
  }

  if (footer) {
    footer.style.position = "fixed";
    footer.style.left = "0";
    footer.style.right = "0";
    footer.style.bottom = "0";
    footer.style.zIndex = "40";
    footer.style.background = "#ffffff";
    footer.style.width = "auto";
    footer.style.maxWidth = "none";
    footer.style.margin = "0";
    footer.style.transform = "none";
    footer.style.minHeight = "0";
    footer.style.height = "auto";
    footer.style.overflow = "visible";
    footer.style.paddingTop = "32px";
    footer.style.paddingRight = "0";
    footer.style.paddingBottom = FOOTER_PAD_BOTTOM;
    footer.style.paddingLeft = "0";
    footer.style.boxShadow = "0 80px 0 40px #ffffff";
    const cta = footer.querySelector(".ticket-cta") as HTMLElement | null;
    if (cta) {
      cta.style.position = "relative";
      cta.style.left = "50%";
      cta.style.transform = "translateX(-50%)";
      cta.style.width = "calc(100vw - 20px)";
      cta.style.maxWidth = "calc(100vw - 20px)";
      cta.style.margin = "0";
      cta.style.height = "46px";
      cta.style.flexShrink = "0";
      cta.style.overflow = "visible";
    }
  }
}

export function ViewportLock() {
  useEffect(() => {
    pinFooter();
    const onPin = () => pinFooter();
    window.addEventListener("resize", onPin);
    window.addEventListener("orientationchange", onPin);
    window.visualViewport?.addEventListener("resize", onPin);
    window.visualViewport?.addEventListener("scroll", onPin);
    return () => {
      window.removeEventListener("resize", onPin);
      window.removeEventListener("orientationchange", onPin);
      window.visualViewport?.removeEventListener("resize", onPin);
      window.visualViewport?.removeEventListener("scroll", onPin);
    };
  }, []);

  return null;
}
