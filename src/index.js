import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './component/NoteApp';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
