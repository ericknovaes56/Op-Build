import Vids from "./microC/Vids";
import capa1 from '../../assets/img/capa1.jpg'
import capa2 from '../../assets/img/capa2.jpg'
import capa3 from '../../assets/img/capa3.jpg'

import user1 from '../../assets/img/user1.jpg'
import user2 from '../../assets/img/user2.jpg'
import user3 from '../../assets/img/user3.jpg'
function Videos(){
    return(
        <section className="videos">
            <span className="name1">
                Tranding
            </span>
            <h1 className="name2">Veja O Melhor Aqui !</h1>
            <div className="escolha">
                <input type="button" value="Tops Views" />
                <input type="button" value="Verificados" />
                <input type="button" value="Explorar" />
            </div>
            <div className="videosSection">
                <div className="boxs">
                    <Vids img1={capa1} img2={user1} nome='Elon Musk' desc='lorem ipus ewwhqeuwqa  hsaashua'/>
                    <Vids img1={capa2} img2={user2} nome='Alanzoka' desc='lorem ipus ewwhqeuwqa  hsaashua'/>
                    <Vids img1={capa3} img2={user3} nome='Bill Gates' desc='lorem ipus ewwhqeuwqa  hsaashua'/>
                </div>
            </div>
        </section>
    )
}
export default Videos;