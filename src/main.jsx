import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom';
import { EmailProvider, useEmail } from './contexts/email-context';

export { useEmail }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <EmailProvider>
        <App />
      </EmailProvider>
    </Router>
  </React.StrictMode>,
)