import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css';
import './styles/variables-blue.css';
import './styles/variables-green.css';
import './styles/variables-red.css';
import './styles/variables-orange.css';
import './styles/variables-purple.css';
import './styles/variables-pink.css'; 
import './styles/variables.css'; 
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
