import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento con id 'root'");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
