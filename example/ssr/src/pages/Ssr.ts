import renderLayout from './renderLayout';

function LoadList(items: any[]){
  let htm = ""; 
  items.forEach((item: any, index: number) => {
    htm += `<div key="${index}">
      <h3 class="text-3xl font-bold">${item.title}</h3>
      <span>ID: ${item.id}, ${item.createdAt}</span>
      <a href="/ssrshow/${item.id}">
        <button
        class="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        >Show</button>
      </a>
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
    <h1>Ssr.ts</h1>
    <hr class="my-2" />
    <form class="my-0"
    hx-post="/api/common/send_post"
    hx-trigger="submit"
    hx-target="#resulte_form1"
    hx-on--before-request="TestApi.beforePostForm1()"
    hx-on--after-request="TestApi.afterPostForm1()"
    >
      <label>title:
        <input type="text" name="title" 
        class="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </label>
      <div class="error_message" id="error_message_title"></div>
      <hr class="my-1" />
      <label>Content:
        <input type="text" name="content"
        class="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </label>
      <br />
      <div class="error_message" id="error_message_content"></div>
      <!-- -->
      <input type="text" name="api_url" value="/test/create"
      class="d-none" />
      <hr class="my-1" />
      <button type="submit"
      class="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
      >Add</button>
    </form>
    <h3 id="resulte_form1" class="d-none"></h3>
    <hr />    
    ${htmList}
  </div>
  `;
  //
  return renderLayout({children: htm, title: "TestApi"});
} 
/*
*/
