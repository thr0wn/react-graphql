[![](https://img.shields.io/badge/react.js-black?logo=reactstyle=for-the-badge&style=for-the-badge)](https://react.dev/)
[![](https://img.shields.io/badge/babel-black?logo=babel&style=for-the-badge)](https://babeljs.io/)
[![](https://img.shields.io/badge/webpack-black?logo=webpack&style=for-the-badge)](https://webpack.js.org/)
[![](https://img.shields.io/badge/node.js-black?logo=node.js&style=for-the-badge)](https://webpack.js.org/)
[![](https://img.shields.io/badge/graphql-black?logo=graphql&style=for-the-badge)](https://webpack.js.org/)


# React + graphQL + express + babel + webpack

This Project uses react, graphql, express, babel and webpack. It was built following the udemy course: https://www.udemy.com/course/graphql-with-react-course. It is divided in sections, so follow search section setup do some study.

## Section 1
Node.js (express) server with graphql configured. Test running some graphql queries at `/graphql`. QUeries are listed after the setup.

### Setup
    
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

### Queries

User by id
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

User and company
```graphql
{
  user(id: "40") {
    id,
    firstName,
    age,
    company {
      id,
      name
    }
  }
}
```

Company by id
```graphql
{
  company(id: "1") {
    id,
    name,
    description
  }
}
```

Company and users
```graphql
{
  company(id: "1") {
    id,
    name,
    description,
    users {
      id,
      firstName
    }
  }
}
```

Named companies and query fragments
```graphql
{
  apple: company(id: "1") {
    ...companyDetails
  }
  google: company(id: "2") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```

Mutation: addUser
```graphql
mutation {
  addUser(firstName: "Stephen" age: 26) {
    id,
    firstName
    age
  }
}
```

Mutation: deleteUser
```graphql
mutation {
  deleteUser(id: "23") {
    id,
    firstName
    age
  }
}
```

Mutation: editUser
```graphql
mutation {
  editUser(id: "40", firstName: "Bob") {
    id,
    firstName
    age
  }
}
```

## Section 2
Client, server and a mongo database.

### Setup
#### Setup mongodb with docker
Run a docker container:
```bash
docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=nraboy -e MONGO_INITDB_ROOT_PASSWORD=password1234 --name mongodb mongodb/mongodb-community-server:latest
```
Install Mongodb compass and set the connection using the credentials.
user: nrabooy
password: password1234

#### Create a song and a lyric
Populate the database with a song and a lyric:
```graphql
mutation {
  addSong(title: "Cold night") {
    id
  } 
}

mutation {
  addLyricToSong(songId: "id_from_previous_mutation", content: "Oh my oh my its a cold night") {
    id
  } 
}
```
Check the result:
```graphql
{
  songs {
    id
    title
    lyrics {
      content
    }
  }
}
```
