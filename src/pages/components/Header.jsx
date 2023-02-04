import logo from '../../assets/img/logo1.png'
import NavBar from "../layout/NavBar";
import Games from './microC/Games';
import jete from '../../assets/img/jeet.png'
function Header(){
    return (
        <header>
            <NavBar/>
            <Games/>
            <div className="intro">
                <div className="text">
                    <div className='black'>
                        <span>#Boas vindas</span>
                        <h1>Bem-Vindo</h1>
                        <p>Bem-Vindo Nos Conheça muito mais no butão a baixo</p>
                        <a href="#">
                            <input type="button" value="Ver Mais" />
                        </a>
                    </div>
                    <img src={jete}/>
                </div>
                <div className="topsg">
                    <span>#tops Da Plataforma</span>
                    <div className='boxs'>
                        <div className="box">
                            <span className='id'>01</span>
                            <div className='img'></div>
                            <span>João</span>
                        </div>
                        <div className="box">
                            <span className='id'>02</span>
                            <div className='img'></div>
                            <span>Pedro</span>
                        </div>
                        <div className="box">
                            <span className='id'>03</span>
                            <div className='img'></div>
                            <span>Guilherme</span>
                        </div>
                        <div className="box">
                            <span className='id'>04</span>
                            <div className='img'></div>
                            <span>Caramelo</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;