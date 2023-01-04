# Project 1: FSJD Image Processing API

## About Project

- This project is an API to process images for two purposes:
a. Placeholder API    b. Image scaling library

- Initialise npm project: npm init (use -y to accept defaults)
- Add configuration file for eslint: npm init @eslint/config
- Add configuration file for typescript: npx tsc --init

## Dependencies

Jasmine: npm i jasmine
Jasmine spec reporter: npm i jasmine-spec-reporter
Express: npm i express
Sharp: npm i sharp
Supertest: npm i supertest

## devDependencies

- Prettier: npm i --save-dev prettier
- ESlint: npm i --save-dev eslint
- ESlint config prettier: npm i --save-dev eslint-config-prettier
- ESlint plugin prettier: npm i --save-dev eslint-plugin-prettier
- Typescript: npm i --save-dev typescript
- TS Node: npm i --save-dev ts-node
- Node types: npm i --save-dev @types/node
- Jasmine types: npm i --save-dev @types/jasmine
- Supertest types: npm i --save-dev @types/supertest
- Express types: npm i --save-dev @types/express
- Nodemon: npm i --save-dev nodemon
- Sharp types: npm i --save-dev @types/sharp

## Scripts inside package.json

- "prettier": "prettier --config .prettierrc /path/to/file --write"
- "lint": "eslint path/to/file"
- "jasmine": "jasmine"
- "build": "npx tsc"
- "test": "npm run build && npm run jasmine"
- "start": "nodemon src/index.ts"

## Testing

- `npm run test`
- Server started at localhost:3000 should return 200

## Start

- `npm run start`

## TSConfig file

```
{
    "compileOptions" : {
        "target": "es5",
        "module": "commonjs",
        "lib" : ["ES2018", "DOM"],
        "outDir": "./build",
        "strict": true,
        "noImplicitAny": true
    }
    "exclude": ["node-modules", "tests", "./build", "spec"]
}
```

## Processing image

- Sample url: `localhost:3000/images?filename=fjord&width=200&height=200`

- Query parameters: filename=name of image, width=width to resize and height=height to resize. 

### Images present on this server
- encenadaport.jpg
- fjord.jpg
- icelandwaterfall.jpg
- palmtunnel.jpg
- santamonica.jpg

