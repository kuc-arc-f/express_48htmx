import renderLayout from './renderLayout';
//
export default function Page(props: any) { 
  const htm = `<h1 class="text-4xl font-bold my-2">about</h1>
  `;
  return renderLayout({children: htm, title: "about"});
}
/*
*/
