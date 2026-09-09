import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Arriva Tickets";

const CRITICAL_CSS = `
html,body{margin:0!important;padding:0!important;width:100%!important;height:100%!important;min-height:100%!important;min-height:100dvh!important;overflow:hidden!important;background:#1e7443!important}
.app-shell{position:fixed!important;inset:0!important;width:100%!important;height:100%!important;height:var(--app-h,100dvh)!important;background:#1e7443!important}
.ticket-footer{position:fixed!important;left:0!important;right:0!important;bottom:0!important;z-index:40!important;width:auto!important;max-width:none!important;margin:0!important;transform:none!important;background:#fff!important;display:block!important;padding:16px 0 8px!important;min-height:0!important;height:auto!important;box-sizing:border-box!important}
.ticket-cta{box-sizing:border-box!important;position:relative!important;left:50%!important;transform:translateX(-50%)!important;width:calc(100vw - 20px)!important;max-width:calc(100vw - 20px)!important;margin:0!important}
.ticket-scroll{padding-bottom:80px!important}
`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1, user-scalable=no",
      },
      { title: APP_NAME },
      { name: "theme-color", content: "#1E7443" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      {
        name: "description",
        content:
          "Digital Arriva extraurban student pass — Vestone to Idro.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
    styles: [{ children: CRITICAL_CSS }],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
