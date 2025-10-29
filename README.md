[![](https://img.shields.io/badge/react.js-black?logo=react)](https://react.dev/)
[![](https://img.shields.io/badge/babel-black?logo=babel)](https://babeljs.io/)
[![](https://img.shields.io/badge/webpack-black?logo=webpack)](https://webpack.js.org/)
[![](https://img.shields.io/badge/node.js-black?logo=node.js)](https://webpack.js.org/)
[![](https://img.shields.io/badge/graphql-black?logo=graphql)](https://webpack.js.org/)


# React + graphQL + babel + webpack + node.js
> Udemy: https://www.udemy.com/course/graphql-with-react-course

This Project uses react, graphql, babel, webpack and node.js.

## Node.js commands
	> Requires node.js v20

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
