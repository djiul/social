import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './companents/Data/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>
  );
}

export default rerenderTree;

reportWebVitals();