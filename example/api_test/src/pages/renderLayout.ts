
let PATH__FAVICON = "/favicon.ico";
let PATH__ENTRY_CLIENT = "/static/entry-client.js";
//
export default function Compo(props: any) {
console.log("renderLayout.env.PROD=", import.meta.env.PROD);
  if(import.meta.env.PROD) {
    PATH__FAVICON = "/public/favicon.ico";
    PATH__ENTRY_CLIENT = "/public/static/entry-client.js";
  }
  //
  const html = `<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${props.title}</title>
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
      <a href="/htmx2">[ htmx2 ]</a>
      <a href="/htmx3">[ htmx3 ]</a>
      <a href="/testapi">[ TestApi ]</a>
    </div>
    <hr />        
    ${props.children}
    <script type="module" src="${PATH__ENTRY_CLIENT}"></script>
  </body></html>
  `
  return html;
}