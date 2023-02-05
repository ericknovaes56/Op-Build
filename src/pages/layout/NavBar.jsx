import logo from '../../assets/img/logo1.png'
function NavBar(){
    return (
        <div className="agrup">
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
                            <li><a href="#">Inteligência emocional</a></li>
                            <li><a href="#" className='dise'>Gestão Financeira</a></li>
                        </ul>
                    </div>
                </div>
                <div className="areaLogin">
                    <a href="#">
                        <input type="button" value='Fazer Login' />
                    </a>
                </div>
            </nav>
            <div className='lists'>
                <div className="navigator">
                    <ul>
                        <li><a href="#">eventos</a></li>
                        <li><a href="#">comunidade</a></li>
                        <li><a href="#">Inteligência emocional</a></li>
                        <li><a href="#" className='dise'>Gestão Financeira</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar;