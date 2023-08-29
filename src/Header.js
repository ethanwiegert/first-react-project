function Header (){
    return (
        <div>
        <div className="row">
        <div className="d-flex justify-content-center"><h1>First React Project</h1></div>
        </div>
        <div className="row">
        <nav className="nav ">
  <a className="nav-link active" aria-current="page" href="#">Home</a>
  <a className="nav-link" href="#story">Solve The Story</a>
  <a className="nav-link disabled" href="#">Disabled</a>
  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
        </div>
        </div>
    )
}

export default Header