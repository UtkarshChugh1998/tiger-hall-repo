import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { ChakraProvider } from '@chakra-ui/react'
import { ErrorBoundary } from './components/common/ErrorBoundary';


function App() {
  return (
      <ErrorBoundary>
        <ChakraProvider>
          <div className="App">
            <Home/>
            </div>
        </ChakraProvider>
      </ErrorBoundary>
  );
}

export default App;
