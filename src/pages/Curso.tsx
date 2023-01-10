import { useParams } from 'react-router-dom'
import userIcon from '../assets/images/User.svg'
import sunIcon from '../assets/images/Sun.svg'
import hourIcon from '../assets/images/Hour.svg'

const Curso = () => {
  const { slug } = useParams()
  return (
    <div className="flex-1">
      <div className="bg-red uppercase text-white text-2xl font-semibold font-mukta text-center flex justify-center items-center py-8 md:py-12">
        <h2>{slug}</h2>
      </div>
      <div className="px-6 mt-10 md:mt-24">
        <div className="flex flex-col md:grid md:grid-cols-2 md:container md:gap-14">
          <div className="bg-red h-80  rounded flex justify-center items-center">
            <h4 className="uppercase text-white text-2xl font-mukta font-semibold">
              foto do curso
            </h4>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="font-inter text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vitae vestibulum iaculis lacus aliquam convallis dolor risus.
              Velit vitae in lectus facilisis arcu tempor. Tempus dolor
              convallis accumsan nulla mi amet. Vulputate risus neque tellus
              faucibus molestie sem mauris. Semper quis orci scelerisque lectus.
              Leo sollicitudin cursus diam maecenas posuere at malesuada
              maecenas. Facilisis nunc nunc pellentesque libero arcu et leo
              dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio
              molestie nec, vulputate tellus tellus.
            </p>
            <div className="mt-10 flex flex-col gap-8">
              <div className="flex gap-5 items-center">
                <img src={sunIcon} alt="" />
                <div className="flex flex-col">
                  <span className="text-red font-mukta font-semibold text-lg">
                    Período:
                  </span>
                  <span className="font-inter font-medium text-lg">
                    Noturno
                  </span>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <img src={userIcon} alt="" />
                <div className="flex flex-col">
                  <span className="text-red font-mukta font-semibold text-lg">
                    Coordenação:
                  </span>
                  <span className="font-inter font-medium text-lg">
                    Tio patinhas
                  </span>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <img src={hourIcon} alt="" />
                <div className="flex flex-col">
                  <span className="text-red font-mukta font-semibold text-lg">
                    Duração:
                  </span>
                  <span className="font-inter font-medium text-lg">2 anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-24">
        <div className="md:bg-white-200 px-6 py-8 md:px-6 md:py-12">
          <div className="md:container">
            <h3 className="font-mukta font-medium text-2xl md:text-3xl">
              Objetivos gerais
            </h3>
            <p className="pt-4 font-inter font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vitae vestibulum iaculis lacus aliquam convallis dolor risus.
              Velit vitae in lectus facilisis arcu tempor. Tempus dolor
              convallis accumsan nulla mi amet. Vulputate risus neque tellus
              faucibus molestie sem mauris. Semper quis orci scelerisque lectus.
              Leo sollicitudin cursus diam maecenas posuere at malesuada
              maecenas. Facilisis nunc nunc pellentesque libero arcu et leo
              dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio
              molestie nec, vulputate tellus tellus.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <div className="px-6 py-8 md:pb-20">
          <div className="md:container">
            <h3 className="font-mukta font-medium text-2xl md:text-3xl">
              Objetivos específicos
            </h3>
            <p className="pt-4 font-inter font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vitae vestibulum iaculis lacus aliquam convallis dolor risus.
              Velit vitae in lectus facilisis arcu tempor. Tempus dolor
              convallis accumsan nulla mi amet. Vulputate risus neque tellus
              faucibus molestie sem mauris. Semper quis orci scelerisque lectus.
              Leo sollicitudin cursus diam maecenas posuere at malesuada
              maecenas. Facilisis nunc nunc pellentesque libero arcu et leo
              dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio
              molestie nec, vulputate tellus tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curso
