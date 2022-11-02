import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Login from './containers/Login';
import Register from './containers/Register';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './containers/News';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
           <ProtectedRoute>
             <App />
           </ProtectedRoute>
          } 
        />
        <Route path="Login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="news" element={<News/>} />
      </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
