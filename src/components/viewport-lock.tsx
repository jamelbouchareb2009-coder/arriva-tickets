import { useEffect } from "react";

function pinFooter() {
  const footer = document.querySelector(".ticket-footer") as HTMLElement | null;
  const shell = document.querySelector(".app-shell") as HTMLElement | null;

  document.documentElement.style.height = "100%";
  document.body.style.height = "100%";
  document.body.style.minHeight = "100%";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.background = "#1e7443";

  if (shell) {
    shell.style.position = "fixed";
    shell.style.top = "0";
    shell.style.left = "0";
    shell.style.right = "0";
    shell.style.bottom = "0";
    shell.style.height = "100%";
    shell.style.width = "100%";
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
    footer.style.paddingTop = "16px";
    footer.style.paddingRight = "0";
    footer.style.paddingBottom = "8px";
    footer.style.paddingLeft = "0";
    const cta = footer.querySelector(".ticket-cta") as HTMLElement | null;
    if (cta) {
      cta.style.position = "relative";
      cta.style.left = "50%";
      cta.style.transform = "translateX(-50%)";
      cta.style.width = "calc(100vw - 20px)";
      cta.style.maxWidth = "calc(100vw - 20px)";
      cta.style.margin = "0";
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
