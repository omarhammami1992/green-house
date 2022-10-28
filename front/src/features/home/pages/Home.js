import homeImg from '../../../assets/home-img.png';
import { Link } from 'react-router-dom';


export default function Home() {
    return <div className="home">
        <div className="home-left-block">
            <h1 className="home-title">
                DECOUVREZ EN 7 QUESTIONS LES PLANTES
                QUI SONT FAITES POUR VOUS !
            </h1>

            <Link to="/questionnaire">
                <button className="home-btn">
                    JE COMMENCE LE QUESTIONNAIRE
                </button>
            </Link>
        </div>
        <img src={ homeImg } alt="home_icon" className="home-img"/>
    </div>;
}