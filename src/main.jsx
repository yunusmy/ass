import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";


import router from './routes/Routes'
import { Helmet, HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
        
     <HelmetProvider>
      <Helmet>
        
      </Helmet>
     <RouterProvider router={router} />
     </HelmetProvider>
  </StrictMode>,
)
