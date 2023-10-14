import useSWR from 'swr'
import Producto from '../components/Producto' //!PROP
import useQuisco from '../hooks/useQuiosco'
import clienteAxios from '../config/axios'

export default function Inicio() {
  const { categoriaActual } = useQuisco()

  const token = localStorage.getItem('AUTH_TOKEN')

  // * Consulta SWR
  const fetcher = () => clienteAxios('/api/productos',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data) //SWR  
  const { data, error, isLoading } = useSWR('/api/productos', fetcher, {        //SWR
    refreshInterval: 1000
  })

  if (isLoading) return 'Cargando...';

  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>

      <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
      <p className='text-2xl my-10'>
        Elige y personaliza tu pedido a continuacion
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map(producto => (
          <Producto
            key={producto.imagen}
            producto={producto} //PROP
            botonAgregar={true}
          />
        ))}

      </div>

    </>
  )
}
