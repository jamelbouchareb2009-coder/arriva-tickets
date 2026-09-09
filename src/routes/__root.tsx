import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Arriva Tickets";

const CRITICAL_CSS = `
html,body{margin:0!important;padding:0!important;width:100%!important;height:100%!important;min-height:100%!important;min-height:100dvh!important;overflow:hidden!important;background:#fff!important}
.app-shell{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-height:100%!important;min-height:100dvh!important;margin:0!important;padding:0!important;background:#1e7443!important;box-sizing:border-box!important}
.ticket-main{flex:1 1 auto!important;min-height:0!important;width:100%!important;margin-left:auto!important;margin-right:auto!important}
.ticket-footer{position:fixed!important;left:0!important;right:0!important;bottom:0!important;z-index:40!important;width:100%!important;margin:0!important;padding:32px 0 8px!important;background:#fff!important;border-radius:0!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;box-sizing:border-box!important;transform:none!important;box-shadow:0 100vh 0 0 #fff!important}
.ticket-cta{box-sizing:border-box!important;position:relative!important;left:50%!important;transform:translateX(-50%)!important;width:calc(100vw - 20px)!important;max-width:calc(100vw - 20px)!important;margin:0!important;height:46px!important;flex-shrink:0!important}
.ticket-scroll{flex:1 1 auto!important;min-height:0!important;padding-bottom:96px!important}
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
      { name: "theme-color", content: "#ffffff" },
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
