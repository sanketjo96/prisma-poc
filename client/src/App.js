import React from 'react';
import './App.css';
import ButtonAppBar from './features/appbar/appbar';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Dashboard from './features/dashboard';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <Dashboard></Dashboard>
      </div>
    </ApolloProvider>
  );
}

export default App;
