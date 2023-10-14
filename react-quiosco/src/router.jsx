import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/inicio'
import Login from './views/login'
import Registro from './views/Registro'
import Ordenes from './views/Ordenes'
import Productos from './views/Productos'
import AdminLayout from './layouts/AdminLayout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio /> /* ESTO ES LO QUE SE PASA EN EL OUTLET */
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login /> /* ESTO ES LO QUE SE PASA EN EL OUTLET */
            },
            {
                path: '/auth/registro',
                element: <Registro /> /* ESTO ES LO QUE SE PASA EN EL OUTLET */
            }
        ]

    },

    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index:true,
                element: <Ordenes/>
            },
            {
                path: '/admin/productos',
                element: <Productos/>
            }
        ]
    }

])

export default router