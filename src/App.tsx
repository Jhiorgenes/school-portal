import { Routes } from './routes'

import menuHamburguer from './assets/images/List.svg'
import logoHeader from './assets/images/logo1.png'
import logoFooter from './assets/images/logo2.png'
import closeIcon from './assets/images/x.svg'

import worldIcon from './assets/images/worldIcon.svg'
import phoneIcon from './assets/images/Phone.svg'
import emailIcon from './assets/images/EnvelopeSimple.svg'

import instagramIcon from './assets/images/InstagramLogo.svg'
import faceBookIcon from './assets/images/FacebookLogo.svg'
import linkedinIcon from './assets/images/LinkedinLogo.svg'
import { useState } from 'react'
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'

export const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-6 py-4 md:container md:mx-auto bg-blue">
          <div className="max-h-11 max-w-[150px]">
            <img src={logoHeader} alt="" />
          </div>

          <div className="hidden md:flex items-center gap-20">
            <ul className="flex gap-14">
              <li>
                <a className="font-inter active:text-red cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                  Inicio
                </a>
              </li>
              <li>
                <a className="font-inter cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                  Curso
                </a>
              </li>
              <li>
                <a className="font-inter cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                  Vagas
                </a>
              </li>
              <li>
                <a className="font-inter cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                  Noticías
                </a>
              </li>
              <li>
                <a className="font-inter cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                  Contato
                </a>
              </li>
            </ul>
            <div className="hidden lg:flex">
              <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
                <img className="h-full w-full" src={instagramIcon} alt="" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
                <img className="h-full w-full" src={faceBookIcon} alt="" />
              </div>
              <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
                <img className="h-full w-full" src={linkedinIcon} alt="" />
              </div>
            </div>
          </div>

          <div className="md:hidden" onClick={handleOpenMenu}>
            <Menu open={isMenuOpened}>
              <MenuHandler className="cursor-pointer">
                <div className="w-6 h-6">
                  <img
                    src={isMenuOpened ? closeIcon : menuHamburguer}
                    className="w-6 h-6"
                    alt=""
                  />
                </div>
              </MenuHandler>
              <MenuList className="w-[250px] shadow-lg justify-center items-center border-0 outline-none flex flex-col gap-4">
                <MenuItem className="w-full">
                  <a className="font-inter active:text-red cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                    Inicio
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="font-inter active:text-red cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                    Cursos
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="font-inter active:text-red cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                    Vagas
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="font-inter active:text-red cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                    Noticías
                  </a>
                </MenuItem>
                <MenuItem>
                  <a className="font-inter active:text-red cursor-pointer transition all ease duration-200 font-medium hover:text-red">
                    Contato
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </nav>
      </header>
      <Routes />

      <footer className="flex flex-col bg-red px-6 pt-10 pb-6">
        <div className="max-w-[270px] max-h-[77px] mx-auto">
          <img className="w-full h-full" src={logoFooter} alt="" />
        </div>

        <div className="mt-10 mb-12 flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
              <img className="h-full w-full" src={worldIcon} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-inter font-normal text-xs text-white-200">
                Rua Codelândia, 1367
              </span>
              <span className="font-mukta font-medium text-base text-white">
                Cafelândia, SP
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
              <img className="h-full w-full" src={phoneIcon} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mukta font-medium text-base text-white">
                +55 14 9999-9999
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
              <img className="h-full w-full" src={emailIcon} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mukta font-medium text-base text-white">
                centropaulasouza@etec.sp.gov.br
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-center font-semibold text-2xl text-white">
            Sobre a Etec Cafelândia
          </h3>
          <p className="text-center mt-4 text-white text-sm">
            Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
            Moreira Martins Aguiar se destaca no ensino médio e técnico,
            recebendo constantemente menções e congratulações em todo o estado
            de São Paulo.{' '}
          </p>

          <div className="flex mt-10 justify-center columns-3 gap-6">
            <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
              <img className="h-full w-full" src={instagramIcon} alt="" />
            </div>
            <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
              <img className="h-full w-full" src={faceBookIcon} alt="" />
            </div>
            <div className="h-12 w-12 flex justify-center items-center bg-white rounded-full p-3">
              <img className="h-full w-full" src={linkedinIcon} alt="" />
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-red p-6 text-center text-white font-inter">
        Etec Professora Helcy Moreira Martins Aguiar - 2021 © Todos os direitos
        reservados.
      </div>
    </>
  )
}
