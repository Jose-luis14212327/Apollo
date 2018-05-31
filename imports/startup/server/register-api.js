import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from 'lodash/merge';

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
//load schemas
//sd

const testSchema = `
type Query {
    hi: String
    resolutions: [Resolution]
}
`

const typeDefs =[
  testSchema,
  ResolutionsSchema
];

const testresolvers = {
    Query:{
        hi(){
            return "Hello World from Meteor via Apollo";
        }
    //     resolutions(){
    //         return[{
    //         _id: "algoalgo",
    //         name: "Just do it!!"
    //     }];
    // }
    }
};

const resolvers = merge(testresolvers, ResolutionsResolvers)

//console.log(resolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });
