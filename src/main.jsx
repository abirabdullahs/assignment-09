import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../src/context/AuthContext.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />
  <ToastContainer position="top-right" autoClose={2000} />
  <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
    </AuthProvider>
  </StrictMode>,
)
