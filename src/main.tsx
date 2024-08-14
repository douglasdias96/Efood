
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.tsx'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './Pages/Home.tsx'
import Cardapio from './Pages/Cardapio.tsx'

import { Provider } from 'react-redux';
import { store } from './store/index.ts';


const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/Efood',
                element: <Home />
            },
            {
                path: `/Efood/restaurantes/:id`,
                element: <Cardapio />
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>

)
