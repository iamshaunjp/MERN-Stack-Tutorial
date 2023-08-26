import { Link } from "react-router-dom"

const Navbar = () =>{
  return (
    <header class="container">
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </header>
  )
}

export default Navbar
