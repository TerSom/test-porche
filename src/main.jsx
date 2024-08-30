import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import App from './App';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test-porche/" element={<LoginPage/>} />
        <Route path="/test-porche/register" element={<RegisterPage />} />
        <Route path="/test-porche/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
