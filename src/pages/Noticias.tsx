import { useState } from 'react'

const Noticias = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <main className="mt-10">
      <div className="hidden md:grid md:grid-flow-col">
        <div className="bg-[#3B5999] flex py-14 px-6 justify-center items-center">
          <h4
            className="uppercase text-white text-base  lg:text-2xl font-mukta font-semibold "
            data-aos="fade-right"
          >
            Compartilhar no facebook
          </h4>
        </div>
        <div className="bg-[#EE3A5D] flex py-14 px-6  justify-center items-center">
          <h4
            className="uppercase text-white text-base  lg:text-2xl font-mukta font-semibold "
            data-aos="fade-right"
          >
            Compartilhar no instagram
          </h4>
        </div>
        <div className="bg-[#00A0D0] flex py-14 px-6  justify-center items-center">
          <h4
            className="uppercase text-white  text-base lg:text-2xl font-mukta font-semibold "
            data-aos="fade-right"
          >
            Compartilhar no linkedin
          </h4>
        </div>
      </div>

      <div className="px-6  md:mt-28">
        <div className="lg:grid container lg:grid-flow-col gap-24 md:items-start">
          <div onClick={() => setIsShow(!isShow)}>
            <div
              className="bg-red h-80 max-w-[800px] rounded flex justify-center items-center"
              data-aos="fade-right"
            >
              <h4 className="uppercase text-white text-2xl font-mukta font-semibold">
                banner
              </h4>
            </div>
            <div className="mt-6" data-aos="fade-up">
              <h2 className="text-lg font-mukta font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                expedita nihil commodi odit at.
              </h2>
              <p className="font-inter font-normal text-base">
                Postado em Julho 2, 2000
              </p>
            </div>
            <div
              className="mt-9 text-base leading-7 font-normal max-w-[800px] font-inter text-dark-200 "
              data-aos="fade-up"
            >
              Hey!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              excepturi nulla dicta quo, provident quaerat quidem modi error
              nostrum a vitae reprehenderit voluptate blanditiis deserunt
              recusandae alias omnis vero. Et!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Porro expedita nihil commodi odit at.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              excepturi nulla dicta quo, provident quaerat quidem modi error
              nostrum a vitae reprehenderit voluptate blanditiis deserunt
              recusandae alias omnis vero. Et!
              <br />
              Thanks!
            </div>
          </div>
          <div className="hidden xl:flex xl:flex-col " data-aos="fade-up">
            <h2 className="font-mukta text-4xl font-medium">Outras noticias</h2>
            <div className="flex flex-col gap-6 mt-6 max-w-[312px]">
              <p className="font-inter font-normal text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="font-inter font-normal text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="font-inter font-normal text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="font-inter font-normal text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="font-inter font-normal text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  items-center px-6 mt-10 md:mt-24">
          <h2 className="text-3xl text-center font-mukta font-semibold md:text-5xl">
            Notícias
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:container md:mx-auto gap-8 mt-8 md:mt-12">
            <div
              className="hover:scale-110 transition all ease-in-out delay-75 cursor-pointer"
              data-aos="fade-up"
            >
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
            <div
              className="hover:scale-110 transition all ease-in-out delay-75 cursor-pointer"
              data-aos="fade-up"
            >
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
            <div
              className="hover:scale-110 transition all ease-in-out delay-75 cursor-pointer"
              data-aos="fade-up"
            >
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

          <button className="bg-red hover:opacity-80 transition all ease-in-out delay-100 rounded text-white font-medium text-2xl py-4 px-12 mt-16 lg:mt-20 max-w-xs mb-12 lg:mb-24">
            Ver mais notícias
          </button>
        </div>
      </div>
    </main>
  )
}

export default Noticias
