import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Result() {

    const [ results, setResults ] = useState([]);
    const { state: searchRequest } = useLocation();

    useEffect(() => {
        (async() => {
            const getResults = await fetch('http://localhost:8081/api/plant/fetch', {
                method: 'POST',
                body: JSON.stringify(searchRequest),
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });

            const response = await getResults.json();
            setResults(response);
        })()
    },[]);

    const displayResult = (result) => {
        return <div className="plant">
            <img className="image" src={ result.image } alt={ result.name }/>
            <div className="description">
                <h2>{ result.name }</h2>
                <p>{ result.description }</p>
                <button className="button purchase-btn">Commander</button>
            </div>
        </div>
    };

    return <div className="result-page-container">
        <div className="result-list">
            <h1>Voici la liste de vos plantes idéales</h1>
            { results.map(result => displayResult(result)) }
        </div>
        <div className="right-image">
            <button className="button">Découvrir le blog</button>
        </div>
    </div>;
}