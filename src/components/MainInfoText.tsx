type Props = {
  text: string
  color: string
}

const MainInfoText = ({ text, color }: Props) => {
  return (
    <div className={`${color} flex justify-center items-center p-[70px]`}>
      <p className="font-medium text-xl text-white" data-aos="fade-right">
        {text}
      </p>
    </div>
  )
}

export default MainInfoText
