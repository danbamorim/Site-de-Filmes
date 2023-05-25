import './header.css';
import { Link } from 'react-router-dom'

<style>
@import url('https://fonts.googleapis.com/css2? family= Glock & family= Inconsolata:wght@300 & family= Old+Standard+TT & display=swap');
</style>

function Header(){
  return(
    <header>
      <Link className="logo" to="/">DANILOFLIX</Link>
      <Link className="favoritos" to="/favoritos">Meus filmes</Link>
    </header>
  )
}

export default Header;