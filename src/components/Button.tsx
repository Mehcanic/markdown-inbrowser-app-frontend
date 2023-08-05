
interface ButtonProps { 
  buttonText: string
}

const Button = (props: ButtonProps) => {


  return (
    <button className="rounded-[4px] w-[202px] h-10 bg-accent">{props.buttonText}</button>
  )
}

export default Button