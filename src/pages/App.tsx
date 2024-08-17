//import Layout from './Layout';
import renderLayout from './renderLayout';

//console.log("env=", process.env.NODE_ENV)
//
export default function Page(props: any) { 
  //
  const htm = `
  <div id="root"></div>
  <h1 className="text-4xl font-bold">hello</h1>
  `;
  return renderLayout(htm);
}
