import homeImg from '../../../assets/home-img.png';


export default function Home() {
    return <div className="home">
        <div className="home-left-block">
            <h1 className="home-title">
                DECOUVREZ EN 8 QUESTIONS LES PLANTES 
                QUI SONT FAITES POUR VOUS !
            </h1>
            <button className="home-btn">
                JE COMMENCE LE QUESTIONNAIRE
            </button>

        </div>
        <img src={homeImg} className="home-img"/>


    </div>;
}