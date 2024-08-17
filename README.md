# express_48htmx

 Version: 0.9.1

 Author  : @kuc_arc_f

 date   : 2024/08/17
 
 update :

***

htmx + Vite Vanilla.js

***
### stackblitz

https://stackblitz.com/~/github.com/kuc-arc-f/express_48htmx

***
### Related

https://htmx.org

***
### example


***
### build

```
yarn build
#dev
yarn dev
```

***
* vercel.json
```
{
    "version": 2,
    "public": true,
    "builds": [
      {
        "src": "public/**/*",
        "use": "@vercel/static"
      },        
      {
        "src": "dist/index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      { "handle": "filesystem" },
      {
        "src": "/.*",
        "dest": "/dist/index.js"
      }
    ]
}
```
***
### blog



***

