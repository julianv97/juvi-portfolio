import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
