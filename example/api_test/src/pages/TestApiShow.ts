import renderLayout from './renderLayout';
//
let pageItem = {};
//
export default function Page(props: any) {
console.log("#TestApi");
  pageItem = props.item;
//console.log(pegeItems);
  const htm = `
  <div class="container mx-auto my-2 px-2">
    <h1 class="text-4xl font-bold">TestApiShow.tsx</h1>
    <hr />
    <h1>${pageItem.title}</h1>
    <span>ID: ${pageItem.id} , ${pageItem.createdAt}</span>
    <hr />
    <div>${pageItem.content}</div>
    <hr class="my-1" />
    <form
    hx-post="/api/common/send_post"
    hx-trigger="submit"
    hx-target="#h2"
    hx-on--after-request="location.href='/testapi' "
    class= "my-0"
    >
      <input type="text" name="api_url" value="/test/delete" class="d-none" />
      <input type="text" name="id" value="${pageItem.id}" />
      <button 
      class="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
      type="submit"
      >Delete</button>
    </form>
    <hr class="my-1" />
    <h3 id="h2"></h3>
  </div>
  `;
  return renderLayout({children: htm, title: "TestApiShow"});
}
/*
*/
