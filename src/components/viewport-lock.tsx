import { useEffect } from "react";

function hideNetlifyChrome() {
  const kill = (el: Element | null) => {
    if (!el || !(el instanceof HTMLElement)) return;
    el.style.setProperty("display", "none", "important");
    el.style.setProperty("visibility", "hidden", "important");
    el.style.setProperty("pointer-events", "none", "important");
    el.style.setProperty("opacity", "0", "important");
    el.style.setProperty("height", "0", "important");
    try {
      el.remove();
    } catch {
      /* ignore */
    }
  };

  const scan = (root: ParentNode) => {
    root.querySelectorAll("iframe, script, div, aside, button, a, span").forEach((node) => {
      const el = node as HTMLElement;
      const src = el.getAttribute("src") || el.getAttribute("href") || "";
      const tag = el.tagName.toLowerCase();
      const blob = `${tag} ${el.id} ${el.className} ${src} ${el.textContent ?? ""}`;
      if (
        /netlify-cdp|netlify-drawer|netlify-preview|nf-drawer/i.test(blob) ||
        (tag === "iframe" && /netlify/i.test(src)) ||
        (/netlify\.app/i.test(el.textContent ?? "") &&
          (getComputedStyle(el).position === "fixed" ||
            getComputedStyle(el.parentElement ?? el).position === "fixed"))
      ) {
        kill(el);
        if (el.parentElement && /netlify/i.test(el.parentElement.textContent ?? "")) {
          kill(el.parentElement);
        }
      }
    });
    root.querySelectorAll("*").forEach((node) => {
      const host = node as HTMLElement & { shadowRoot?: ShadowRoot | null };
      if (host.tagName?.toLowerCase().startsWith("netlify")) kill(host);
      if (host.shadowRoot) scan(host.shadowRoot);
    });
  };

  scan(document);
}

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

  hideNetlifyChrome();
}

export function ViewportLock() {
  useEffect(() => {
    pinFooter();
    const onPin = () => pinFooter();
    window.addEventListener("resize", onPin);
    window.addEventListener("orientationchange", onPin);
    window.visualViewport?.addEventListener("resize", onPin);
    window.visualViewport?.addEventListener("scroll", onPin);
    const interval = window.setInterval(hideNetlifyChrome, 750);
    return () => {
      window.removeEventListener("resize", onPin);
      window.removeEventListener("orientationchange", onPin);
      window.visualViewport?.removeEventListener("resize", onPin);
      window.visualViewport?.removeEventListener("scroll", onPin);
      window.clearInterval(interval);
    };
  }, []);

  return null;
}
