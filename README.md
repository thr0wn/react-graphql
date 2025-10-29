[![](https://img.shields.io/badge/react.js-black?logo=reactstyle=for-the-badge&style=for-the-badge)](https://react.dev/)
[![](https://img.shields.io/badge/babel-black?logo=babel&style=for-the-badge)](https://babeljs.io/)
[![](https://img.shields.io/badge/webpack-black?logo=webpack&style=for-the-badge)](https://webpack.js.org/)
[![](https://img.shields.io/badge/node.js-black?logo=node.js&style=for-the-badge)](https://webpack.js.org/)
[![](https://img.shields.io/badge/graphql-black?logo=graphql&style=for-the-badge)](https://webpack.js.org/)


# React + graphQL + babel + webpack and node.js
Project using react, graphql, babel, webpack and node.js.

## Node.js commands
	> Requires node.js v18

Install dependencies

```bash
npm install
```

Run json server at [localhost:3000](http://localhost:3000).

```bash
npm run json:server
```

Run graphql server
```bash
npm run dev
```

GraphQL editor is at [localhost:4000/graphql](http://localhost:4000/graphql?query=).
Query example:

```graphql
{
  user(id: "40") {
    id,
    firstName,
    age,
    companyId
  }
}
```
