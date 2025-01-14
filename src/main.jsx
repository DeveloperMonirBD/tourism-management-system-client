import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './provider/AuthProvider';
import routes from './routes/Routes';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={routes} />
            </QueryClientProvider>
        </AuthProvider>
    </StrictMode>
);
