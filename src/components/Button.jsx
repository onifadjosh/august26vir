

const Button = ({oruko, color, func, stylee}) => {
  // console.log(stylee);
  
  // console.log(props);

  let food = "rice"
  let myName = "Pampam"

  const clickMe=(person)=>{
    alert(`I was clicked by ${person}`)
  }
  return (
    <button style={stylee?{backgroundColor:stylee.bg, color:stylee.text}:{}}  className={`btn ${color}`} onClick={func}>{oruko}</button>
  )
}

export default Button