import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { ApolloProvider } from '@apollo/client';
import client from './services/graphql/client'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#00E88F'
      }
    }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

