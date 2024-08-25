
import express from 'express';
const app = express();
//
import Top from './pages/App';
import About from './pages/about';
import Zod from './pages/Zod';
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
import csrRouter from './routes/csr';
import zodRouter from './routes/zod';
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
app.use('/api/csr', csrRouter);
app.use('/api/zod', zodRouter);

//MPA
app.get('/zod', (req: any, res: any) => {
  try {res.send(Zod({}));} catch (error) { res.sendStatus(500);}
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
