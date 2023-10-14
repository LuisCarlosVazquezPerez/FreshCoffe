import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (

    <main className='max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center'>

      <img className='max-w-xs' src="../img/logo.svg" alt="Imagen LogoTipo" />

      <div className='p-10 w-full'>
        <Outlet /> {/* ES EL INICIO SE DEFINIO EN router.jsx */}
      </div>

    </main>
  )
}
