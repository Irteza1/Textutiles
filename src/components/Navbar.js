
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  
    return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-5 `}>
  {/*<Link className="navbar-brand " to="/"  >{props.title}</Link>*/}
  <a className="navbar-brand " href=""  >{props.title}</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
  {/*      <Link className="nav-link" to="/">Home<span className="sr-only"></span></Link>*/}
        <a className="nav-link" href="">Home<span className="sr-only"></span></a>

      </li>
      <li className="nav-item">
  {/*      <Link className="nav-link" to="/About" >{props.about}</Link>*/}
        <a className="nav-link" href="" >{props.about}</a>

      </li>
    </ul>
  </div>
  <div className={`form-check form-switch text-${props.mode==='dark'?"light":"dark"}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" Htmlfor="flexSwitchCheckDefault" >{props.mode==='dark'?"Enable lightMode":"Enable DarkMode"}</label>
</div>
<div className={`form-check form-switch text-${props.mode==='dark'?"light":"dark"}`}>
  <input className="form-check-input mx-1" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " Htmlfor="flexSwitchCheckDefault">Enable RedMode</label>
</div>
</nav>
    
    )
}
Navbar.propTypes={
title: PropTypes.string.isRequired,
about: PropTypes.string.isRequired

}
Navbar.defaultProps={
  title: "enter name here",
  about: "about us"
}