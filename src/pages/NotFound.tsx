import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center flex-1 flex-col gap-4">
      <span className=" text-red text-4xl font-inter font-bold">
        PÁGINA NÃO ENCONTRADA
      </span>
      <button
        onClick={() => navigate('/')}
        className="bg-dark text-white p-5 rounded"
      >
        Pagina principal
      </button>
    </div>
  )
}

export default NotFound
