import renderLayout from './renderLayout';

function LoadList(items: any[]){
  let htm = ""; 
  items.forEach((item: any, index: number) => {
    htm += `<div key="${index}">
      <h3 className="text-3xl font-bold">${item.title}</h3>
      <span>ID: ${item.id}, ${item.createdAt}</span>
      <hr />
    </div>
    `;
  });
  return htm;
}
//
export default function Page(props: any) {
//console.log(props.items);
  const htmList = LoadList(props.items);
  //console.log(htmList);
  //
  const htm = `
  <div>
    <h1>TestApi</h1>
    <form
    hx-post="/api/test/test"
    hx-trigger="submit"
    hx-target="#h2"
    hx-on="htmx:afterRequest: alert('OK, post send')"
    >
      <input type="text" name="name" />
      <button type="submit">Add</button>
    </form>
    <hr />
    <h3 id="h2">ここに表示</h3>
    <hr />
    ${htmList}
  </div>
  `;
  //
  return renderLayout({children: htm, title: "TestApi"});
} 
/*
*/
