import React, { Suspense } from "react";
import theme from "./theme";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import routes from "./routes";
import ApolloClient from "apollo-boost";
import { ApolloProvider, InMemoryCache } from "@apollo/react-hooks";
import Loading from "./components/Loading";

const App = () => {
  const routing = useRoutes(routes);
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <ApolloProvider client={client}>
          <GlobalStyles />
          {routing}
        </ApolloProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
