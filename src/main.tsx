import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from '@routes/Router';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import { SurgicalProvider } from './contexts/SurgicalRequestContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <SurgicalProvider>
         <RouterProvider router={Router} />
      </SurgicalProvider>
   </React.StrictMode>
);
