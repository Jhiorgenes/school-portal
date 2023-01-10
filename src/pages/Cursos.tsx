import Card from '../components/Card'
import { Cards } from '../helpers/Cards'

const Cursos = () => {
  return (
    <div className="px-6 my-10 md:my-28">
      <h2 className="text-center text-3xl font-mukta font-semibold  md:text-[40px]">
        Cursos técnicos
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12 md:container mx-auto">
        {Cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            text={card.text}
            href={card.href}
          />
        ))}
      </div>
    </div>
  )
}

export default Cursos
