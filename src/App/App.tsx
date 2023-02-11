import React from "react"
import { Provider } from "react-redux"
import store from "store/store"
import { ApolloProvider } from "@apollo/client"
import { client } from "shared/client"
import Home from "Home"

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ApolloProvider>
  )
}

export default App
