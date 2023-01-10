import { Link } from 'react-router-dom'
import Card from '../components/Card'
import MainInfoText from '../components/MainInfoText'
import { Cards } from '../helpers/Cards'

const Home = () => {
  return (
    <main className="flex-1">
      <div className="bg-dark px-6 py-[87px] flex justify-center items-center flex-col md:py-40">
        <h2 className="text-white text-3xl text-center font-mukta font-semibold md:text-5xl">
          Helcy Moreira <br className="md:hidden" /> Martins Aguiar
        </h2>
        <p className="text-center text-base pt-4 font-inter font-normal text-white-200 max-w-[1000px] md:text-2xl md:font-medium md:pt-6">
          Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
          Moreira Martins Aguiar se destaca no ensino médio e técnico, recebendo
          constantemente menções e congratulações em todo o estado de São Paulo.
        </p>
      </div>
      <div className="hidden xl:grid md:grid-cols-3">
        <MainInfoText
          color="bg-dark-200"
          text="Mantida pelo governo do Estado de São Paulo, os 
cursos oferecidos – além de qualidade ímpar – são 
totalmente gratuitos, levando para toda a população 
um ensino de qualidade e a oportunidade de 
aprender uma profissão."
        ></MainInfoText>
        <MainInfoText
          color="bg-red"
          text="Contando com um corpo docente extremamente 
qualificado e estrutura física moderna, os cursos 
oferecidos nesta unidade se destacam pela 
qualidade de ensino, onde o aluno realmente 
aprende conteúdos relevantes, de maneira fácil e 
didática. "
        ></MainInfoText>
        <MainInfoText
          color="bg-[#481A8F]"
          text="Baseado em uma didática prática, os alunos são 
envolvidos em conteúdos que abordam as diversas
 realidades do mercado, formando assim mão de 
obra qualificada e proporcionando uma experiência 
diferenciada para o aluno."
        ></MainInfoText>
      </div>

      <div className="px-6">
        <h2 className="text-center text-3xl font-mukta font-semibold mt-10 md:mt-28 md:text-[40px]">
          Cursos técnicos
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12 md:container mx-auto">
          {Cards.map((card, index) => (
            <Card key={index} image={card.image} text={card.text} />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 mt-10 md:mt-24">
        <div className="flex justify-center items-center text-center bg-red p-12 md:p-6">
          <h4 className="uppercase text-3xl font-mukta font-semibold text-white md:text-5xl">
            estágios e empregos
          </h4>
        </div>
        <div className="flex flex-col gap-6 md:gap-14 bg-white-200 px-6 py-10 md:pl-14 md:py-14">
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold font-mukta text-xl md:text-2xl">
              Lorem ipsum dolor sit amet
            </h5>
            <p className="font-normal text-base font-inter md:text-lg">
              Publicado em 00/00/00
            </p>
            <a className="font-inter text-sm md:text-lg text-red underline cursor-pointer hover:opacity-80">
              Mais mais sobre a vaga
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold font-mukta text-xl md:text-2xl">
              Lorem ipsum dolor sit amet
            </h5>
            <p className="font-normal text-base font-inter md:text-lg">
              Publicado em 00/00/00
            </p>
            <a className="font-inter text-sm md:text-lg text-red underline cursor-pointer hover:opacity-80">
              Mais mais sobre a vaga
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold font-mukta text-xl md:text-2xl">
              Lorem ipsum dolor sit amet
            </h5>
            <p className="font-normal text-base font-inter md:text-lg">
              Publicado em 00/00/00
            </p>
            <a className="font-inter text-sm md:text-lg text-red underline cursor-pointer hover:opacity-80">
              Mais mais sobre a vaga
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col  items-center px-6 mt-10 md:mt-24">
        <h2 className="text-3xl text-center font-mukta font-semibold md:text-5xl">
          Notícias
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:container md:mx-auto gap-8 mt-8 md:mt-12">
          <div className="hover:scale-110 transition all ease-in-out delay-75 cursor-pointer">
            <div className="h-52 bg-red rounded-tl rounded-tr"></div>
            <div className="bg-white-200 pl-6 pr-11 py-6 rounded-bl-md rounded-br-md">
              <h5 className="font-semibold text-2xl font-mukta">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h5>
              <p className="font-medium pt-4 text-base font-inter">
                Postado em 00/00/00
              </p>
            </div>
          </div>
          <div className="hover:scale-110 transition all ease-in-out delay-75 cursor-pointer">
            <div className="h-52 bg-red rounded-tl rounded-tr"></div>
            <div className="bg-white-200 pl-6 pr-11 py-6 rounded-bl-md rounded-br-md">
              <h5 className="font-semibold text-2xl font-mukta">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h5>
              <p className="font-medium pt-4 text-base font-inter">
                Postado em 00/00/00
              </p>
            </div>
          </div>
          <div className="hover:scale-110 transition all ease-in-out delay-75 cursor-pointer">
            <div className="h-52 bg-red rounded-tl rounded-tr"></div>
            <div className="bg-white-200 pl-6 pr-11 py-6 rounded-bl-md rounded-br-md">
              <h5 className="font-semibold text-2xl font-mukta">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h5>
              <p className="font-medium pt-4 text-base font-inter">
                Postado em 00/00/00
              </p>
            </div>
          </div>
        </div>

        <Link to="/noticias">
          <button className="bg-red hover:opacity-80 transition all ease-in-out delay-100 rounded text-white font-medium text-2xl py-4 px-12 mt-16 lg:mt-20 max-w-xs mb-12 lg:mb-24">
            Ver mais notícias
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Home
