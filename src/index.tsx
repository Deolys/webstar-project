/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
  
import App from './app';
import AuthProvider from './contexts/auth-context';
  
export default () => <AuthProvider><App/></AuthProvider>;
  
let rootElement: ReactDOM.Root
  
export const mount = (Сomponent, element = document.getElementById('app')) => {
  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(<Сomponent/>);

  if(module.hot) {
      module.hot.accept('./app', ()=> {
        rootElement.render(<Сomponent/>);
      })
  }
};

export const unmount = () => {
  rootElement.unmount();
};
