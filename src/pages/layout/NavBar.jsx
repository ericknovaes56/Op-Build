import logo from '../../assets/img/logo1.png'
function NavBar(){
    return (
        <nav className="menu">
            <div className='fistShow'>
                <div className="logo">
                    <a href="#">
                        <img src={logo}/>
                    </a>
                </div>
                <div className="navigator">
                    <ul>
                        <li><a href="#">inicio</a></li>
                        <li><a href="#">eventos</a></li>
                        <li><a href="#">comunidade</a></li>
                    </ul>
                </div>
            </div>
            <div className="areaLogin">
                <a href="#">
                    <input type="button" value='Fazer Login' />
                </a>
            </div>
            <div className='dontshow'>
                <i class='bx bx-menu'></i>
            </div>
        </nav>
    )
}
export default NavBar;