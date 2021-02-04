import React from "react";
import theme from "./theme";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import routes from "./routes";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "cross-fetch";

const App = () => {
  const routing = useRoutes(routes);
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "https://graphql-pokeapi.vercel.app/api/graphql",
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyles />
        {routing}
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
