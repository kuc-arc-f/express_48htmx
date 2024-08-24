import renderLayout from './renderLayout';
//
export default function Page(props: any) {
  const htm = `
  <div class="container_base">
    <h1 class="text-4xl font-bold my-2">Htmx3.tsx</h1>
    <form
    hx-post="/api/test/test"
    hx-trigger="submit"
    hx-target="#h2"
    hx-on="htmx:afterRequest: alert('OK, post send')"
    >
      <input type="text" name="name" class="input_text" />
      <button type="submit" class="btn btn-purple">Add</button>
    </form>
    <hr />
    <h3 id="h2">ここに表示</h3>
  </div>
  `;
  //
  return renderLayout({children: htm, title: "Htmx3"});
}
/*
*/
