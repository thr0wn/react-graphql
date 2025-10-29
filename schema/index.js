const graphql = require("graphql");
const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    companyId: { type: GraphQLString }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
	return axios.get(`http://localhost:3000/users/${args.id}`)
	  .then(response => response.data);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery
});

module.exports = schema;
