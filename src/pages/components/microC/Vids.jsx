function Vids({img1, img2, nome, desc}){
    return(
        <div className="box">
            <div className="top">
                <img src={img1}/>
            </div>
            <div className="content">
                <div className="fist1">
                    <img src={img2}/>
                    <span>{nome}</span>
                </div>
                <div className="ult">
                    <p>{desc}</p>
                </div>
            </div>

        </div>
    )
}
export default Vids;