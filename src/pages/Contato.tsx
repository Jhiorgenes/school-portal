import { ChangeEvent, useState } from 'react'
import DepartmentItem from '../components/DepartmentItem'

const Contato = () => {
  const [isSelected, setIsSelected] = useState('0')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sobre, setSobre] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleCleanInputs = () => {
    setIsSelected('0')
    setName('')
    setEmail('')
    setSobre('')
    setText('')
  }

  return (
    <div>
      <div className="bg-red uppercase text-white text-2xl font-semibold font-mukta text-center flex justify-center items-center py-8 md:py-12">
        <h2>contato</h2>
      </div>
      <div className="px-6 my-10 md:my-36">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-32 container">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            data-aos="fade-right"
          >
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="bg-white-200 text-dark py-4 px-6 rounded outline-none"
              placeholder="Digite o seu nome"
            />
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-white-200 text-dark py-4 px-6 rounded outline-none"
              placeholder="Digite o seu email"
            />
            <input
              type="text"
              value={sobre}
              onChange={e => setSobre(e.target.value)}
              className="bg-white-200 text-dark py-4 px-6 rounded outline-none"
              placeholder="Sobre o que você quer falar?"
            />
            <select
              name=""
              id=""
              onChange={e => setIsSelected(e.target.value)}
              value={isSelected ? isSelected : '0'}
              className="bg-white-200 py-4 px-6 text-dark outline-none rounded"
            >
              <option value="0" disabled>
                Escolha o departamento
              </option>
              <option value="Cursos">Cursos</option>
              <option value="Preco">Preço</option>
              <option value="Problema">Problema</option>
              <option value="Pagamento">Pagamento</option>
            </select>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              rows={7}
              className="bg-white-200 resize-none text-dark py-4 px-6 rounded outline-none"
              placeholder="Digite o seu nome"
            />

            <button className="bg-red hover:opacity-80 transition all ease-in-out delay-100 rounded text-white font-medium text-2xl py-4 w-full px-12">
              Enviar
            </button>
            <button
              onClick={handleCleanInputs}
              className="bg-white-200 hover:opacity-80 transition all ease-in-out delay-100 rounded text-dark font-medium text-2xl py-4 w-full px-12"
            >
              Limpar campos
            </button>
          </form>
          <div className="mt-10 flex flex-col md:mt-0">
            <h2 className="text-dark font-semibold text-3xl text-center">
              Departamento
            </h2>
            <div className="mt-4" data-aos="fade-left">
              <DepartmentItem text="Administrativo" color="bg-white-200" />
              <DepartmentItem text="biblioteca" />
              <DepartmentItem text="Diretoria" color="bg-white-200" />
              <DepartmentItem text="Secretaria" />
              <DepartmentItem text="Biblioteca" color="bg-white-200" />
              <DepartmentItem text="Coordenadoria" />
              <DepartmentItem text="Estágio" color="bg-white-200" />
              <DepartmentItem text="Almoxarifado" />
              <DepartmentItem text="TI" color="bg-white-200" />
            </div>
            <div
              data-aos="fade-up"
              className="mt-12 flex justify-center items-center h-80 w-full bg-red text-white font-mukta text-2xl font-semibold mb-10  rounded"
            >
              GOOGLE MAPS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato
