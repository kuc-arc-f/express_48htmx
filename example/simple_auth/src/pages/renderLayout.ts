
let PATH__FAVICON = "/favicon.ico";
let PATH__ENTRY_CLIENT = "/static/entry-client.js";
let PATH__CSS_GLOBAL = "/static/style.css";
//
export default function Compo(props: any) {
//console.log("renderLayout.env.PROD=", import.meta.env.PROD);
//console.log("renderLayout.name=", import.meta.env.VITE_APP_NAME);
  if(import.meta.env.PROD) {
    PATH__FAVICON = "/public/favicon.ico";
    PATH__ENTRY_CLIENT = "/public/static/entry-client.js";
    PATH__CSS_GLOBAL = "/public/static/style.css";
  }
  //
  const html = `<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${props.title}</title>
    <link href="${PATH__CSS_GLOBAL}" rel="stylesheet" /> 
    <link rel="icon" href="${PATH__FAVICON}" type="image/x-icon"></link>
    <script
    src="https://unpkg.com/htmx.org@1.9.10"
    integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
    crossOrigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- head_wrap -->
    <div>
      <a href="/">[ home ]</a>
      <a href="/about">[ about ]</a>
      <a href="/login">[ Login ]</a>
    </div>
    <hr />        
    <!-- layout.value -->
    <input type="hidden" id="layout_app_name" value="${import.meta.env.VITE_APP_NAME}" />
    <!-- children -->
    ${props.children}
    <!-- script -->
    <script src="${PATH__ENTRY_CLIENT}"></script>
  </body></html>
  `
  return html;
}