import BoxHeader from "./BoxHeader";
function Games(){
    return(
        <div className="grup">
            <div className="grid">
                <BoxHeader nome="FIFA"/>
                <BoxHeader nome="Free fire"/>
                <BoxHeader nome="Valorant"/>
                <BoxHeader nome="CS GO"/>
            </div>
            <span className="vermais">
                <a href="#"><input type="button" value='Ver Mais' /></a>
            </span>
        </div>
    )
}
export default Games;