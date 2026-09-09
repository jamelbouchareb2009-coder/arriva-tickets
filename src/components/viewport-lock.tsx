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
  const vv = window.visualViewport;
  const height = vv ? vv.height : window.innerHeight;
  const gap = vv
    ? Math.max(0, window.innerHeight - vv.offsetTop - vv.height)
    : 0;

  document.documentElement.style.setProperty("--app-h", `${height}px`);
  document.documentElement.style.height = `${height}px`;
  document.body.style.height = `${height}px`;
  document.body.style.minHeight = `${height}px`;
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.background = "#1e7443";

  if (shell) {
    shell.style.position = "fixed";
    shell.style.top = "0";
    shell.style.left = "0";
    shell.style.right = "0";
    shell.style.bottom = `${gap}px`;
    shell.style.height = `${height}px`;
    shell.style.width = "100%";
  }

  if (footer) {
    footer.style.position = "fixed";
    footer.style.left = "0";
    footer.style.right = "0";
    footer.style.bottom = `${gap}px`;
    footer.style.zIndex = "40";
    footer.style.background = "#ffffff";
    footer.style.width = "100%";
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
