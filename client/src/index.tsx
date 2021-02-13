import React from "react";
import { render } from "react-dom";
// import { ApolloProvider } from "@apollo/react-hooks";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(ApolloApp(App), document.getElementById("root"));
serviceWorker.unregister();
