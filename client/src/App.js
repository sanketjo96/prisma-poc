import React from 'react';
import './App.css';
import ButtonAppBar from './features/appbar/appbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Dashboard from './features/dashboard';
import ComplaintCard from './features/details';


const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
          <Router>
          <Switch>
            <Route exact path="/" render={(args) => <Dashboard args={args}></Dashboard>} />
            <Route exact path="/details/:code/:section/:key" render={(args) => {
              return <ComplaintCard params={args.match.params}></ComplaintCard> 
            }}/>
          </Switch>
          </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
