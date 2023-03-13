import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.style.css'

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
