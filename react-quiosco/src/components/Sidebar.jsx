import useQuisco from "../hooks/useQuiosco"
import Categoria from "./Categoria" //!PROP
import { useAuth } from "../hooks/useAuth"


export default function Sidebar() {

    const {categorias} = useQuisco()
    const {logout,user} = useAuth({middleware: 'auth'})

    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img
                    className="w-40"
                    src="img/logo.svg" />
            </div>

            <p className="my-10 text-xl text-center uppercase">Hola: <span className="font-bold text-yellow-900">{user?.name} </span> </p>

            <div className="mt-10">
                {categorias.map(categoria => (

          /*EMPIEZA EL PROP */<Categoria
                        key={categoria.id} //?ESTE ES UN PROP, SIEMPRE TIENES QUE PONERLE UN KEY 
                        categoria={categoria} //*ESTE ES UN PROP MOSTRAR SIDEBAR
                    />
                    
                ))}
            </div>

            <div className="mx-5 py-5">

                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={logout}
                >Cancelar Orden
                </button>

            </div>

        </aside>
    )
}
