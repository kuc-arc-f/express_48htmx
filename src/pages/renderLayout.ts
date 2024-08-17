
export default function Compo(children) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>welcome</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
    <script
    src="https://unpkg.com/htmx.org@1.9.10"
    integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
    crossOrigin="anonymous"
    ></script>
  </head>
  <body>
    ${children}
    <script type="module" src="/static/entry-client.js"></script>
  </body>
  </html>
  `
  return html;
}