import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button";

ReactDOM.render(
  <React.StrictMode>
      <h1>This is a test App</h1>
      <Button color="primary" $backgroundColor_hover="#333">
          Test Button
      </Button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
