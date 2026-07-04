import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import favicon from '../assets/lo.webp'; // ✅ fix path (usually same level)

const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;

if (link) {
  link.type = "image/webp";
  link.href = favicon;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);