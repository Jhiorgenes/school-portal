type Props = {
  color?: string
  text: string
}

const DepartmentItem = ({ color, text }: Props) => {
  return (
    <div className={`${color} py-4 px-4 flex justify-between items-center`}>
      <span className="text-red font-inter font-semibold text-xs uppercase">
        {text}
      </span>
      <span className="font-inter text-dark text-xs">loremipsum@gmail.com</span>
    </div>
  )
}

export default DepartmentItem
