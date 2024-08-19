
import express from 'express';
const app = express();
//
import Top from './pages/App';
import About from './pages/about';
import Htmx2 from './pages/Htmx2';
import Htmx3 from './pages/Htmx3';
import TestApi from './pages/TestApi';
//
import TestApiIndex from "./pages/TestApi/CrudIndex";;
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env.PROD=", import.meta.env.PROD);
//
const errorObj = {ret: "NG", messase: "Error"};

// route
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);

//MPA
app.get('/testapi', async (req: any, res: any) => {
  try {
    const items = await TestApiIndex.getList();
//console.log(items[0]);
    const htm = TestApi({items: items});
    res.send(htm);
  } catch (error) {
    console.error(error)
     res.sendStatus(500);
  }
});
app.get('/htmx2', (req: any, res: any) => {
  try {res.send(Htmx2({}));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx3', (req: any, res: any) => {
  try {res.send(Htmx3({}));} catch (error) { res.sendStatus(500);}
});
app.get('/about', (req: any, res: any) => {
  try {res.send(About({}));} catch (error) { res.sendStatus(500);}
});
app.get('/', (req: any, res: any) => {
  try {
    const htm = Top({});
    //console.log(htm);
    res.send(htm);
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 3000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
export default app;
