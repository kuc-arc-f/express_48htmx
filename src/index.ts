
import express from 'express';
const app = express();
//
import Top from './pages/App';
import About from './pages/about';
import Htmx2 from './pages/Htmx2';
import Htmx3 from './pages/Htmx3';
import Htmx4 from './pages/Htmx4';
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", import.meta.env.production);
//
const errorObj = {ret: "NG", messase: "Error"};

// route
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);

//MPA
/*
app.get('/htmx2', (req: any, res: any) => {
  try {res.send(renderToString(Htmx2()));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx3', (req: any, res: any) => {
  try {res.send(renderToString(Htmx3()));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx4', (req: any, res: any) => {
  try {res.send(renderToString(Htmx4()));} catch (error) { res.sendStatus(500);}
});
app.get('/about', (req: any, res: any) => {
  try {
    res.send(renderToString(About()));
  } catch (error) {
    res.sendStatus(500);
  }
});
*/
app.get('/', (req: any, res: any) => {
  try {
    const htm = Top({});
console.log(htm);
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
