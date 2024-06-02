import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
