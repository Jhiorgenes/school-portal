import { Link } from 'react-router-dom'

type Props = {
  text: string
  image?: string
  href: string
}

const Card = ({ text, image, href }: Props) => {
  return (
    <Link
      to={href}
      className="flex cursor-pointer hover:scale-110 transition all ease-in-out delay-75 justify-center items-center flex-col bg-white-200 py-12 px-10 rounded"
    >
      <div className="w-20 h-w-20 md:w-32 md:h-32">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <h4 className="text-2xl md:text-xl font-inter font-semibold uppercase text-center pt-8 md:pt-6">
        {text}
      </h4>
    </Link>
  )
}

export default Card
