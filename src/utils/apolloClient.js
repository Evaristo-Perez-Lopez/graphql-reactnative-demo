import {
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";


const createApolloClient = new ApolloClient({
	// uri: "https://graphql-pokemon.now.sh",
	uri: "https://flyby-router-demo.herokuapp.com/",
	cache: new InMemoryCache(),
});

export default createApolloClient;