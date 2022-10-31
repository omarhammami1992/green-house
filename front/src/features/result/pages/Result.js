import {useLocation, Link} from 'react-router-dom'
import {useState, useEffect} from 'react';

export default function Result() {

    const [results, setResults] = useState([]);
    const {state: searchRequest} = useLocation();

    useEffect(() => {
        (async () => {
            const getResults = await fetch('http://localhost:8081/api/plant/fetch', {
                method: 'POST',
                body: JSON.stringify(searchRequest),
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });
            const response = await getResults.json();
            setResults(response || []);
        })()
    }, [searchRequest]);

    const displayResult = (result) => {
        return <div className="plant">
            <img className="image" src={result.image} alt={result.name}/>
            <div className="description">
                <h2>{result.name}</h2>
                <p>{result.description}</p>
                <button className="button purchase-btn"
                        onClick={() => window.open('https://www.truffaut.com/hydrangea-winter-surprise-hauteur-90-120-cm-conteneur-3l-echelle-423174.html')}
                        i>Commander
                </button>
            </div>
        </div>
    };

    const displayEmpty = () => {
        return <div className="empty-alert">
            <h1>
                Oups... Nous n'avons pas trouvé ta plante idéale, merci de remplir le formulaire une nouvelle fois !
            </h1>

            <Link to="/questionnaire">
                <button className="button">Aller vers le questionnaire</button>
            </Link>
        </div>
    }

    return <div className="result-page-container">
        {results.length ? <div className="result-list">
            <h1>Voici la liste de vos plantes idéales</h1>
            {results.map(result => displayResult(result))}
        </div> : displayEmpty()}
        <div className="right-image">
            <button className="button">Découvrir le blog</button>
        </div>
    </div>;
}