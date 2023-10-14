import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Alerta from '../components/Alerta';

import { useAuth } from '../hooks/useAuth';


export default function Login() {


  const emailRef = createRef();
  const passwordRef = createRef();


  const [errores, setErrores] = useState([]);
  const { login } = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    login(datos, setErrores)

  }

  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesion</h1>
      <p>Para crear un pedido debes iniciar sesion</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-5">
        <form
          onSubmit={handleSubmit}
          noValidate
        >

          {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

          <div className="mb-4">

            <label
              className="text-slate-800"
              htmlFor="email"
            >Email:</label>

            <input
              type="email"
              id="email"
              className="mt-2 w-full p-3 bg-gray-50"
              name="email" //!POR CONVENCION DE LARAVEL EL NAME (TABLA DE USUARIOS)
              placeholder="Tu Email"
              ref={emailRef}
            />

          </div>
          <div className="mb-4">

            <label
              className="text-slate-800"
              htmlFor="password"
            >Password:</label>

            <input
              type="password"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password" //!POR CONVENCION DE LARAVEL EL NAME (TABLA DE USUARIOS)
              placeholder="Tu Password"
              ref={passwordRef}
            />

          </div>


          <input type="submit"
            value="Iniciar Sesion"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase cursor-pointer font-bold"
          />

        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/registro">No tienes cuenta? Crea una</Link>
      </nav>

    </>
  )
}
