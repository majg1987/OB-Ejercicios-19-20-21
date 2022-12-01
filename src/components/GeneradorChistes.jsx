import React, {useState} from 'react';
import {getJokeRandom} from '../services/apiRequestService'

const GeneradorChistes = () => {

    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState(0);
    const [dontLike, setDontLike] = useState(0);

    const generateJoke = () => {
        getJokeRandom()
        .then((response) => {
            console.log(response.data.value);
            setJoke(response.data.value);
        })
        .catch((error) => console.log('Error Generating Joke'))
    }

    const totalLike = () => {
        setLike(like + 1);
        generateJoke();
    }

    const totalDontLike = () => {
        setDontLike(dontLike + 1);
        generateJoke();
    }
    
    return (
        <div>
            <h1>Joke Generator</h1>

            {/* Generate joke button */}
            <button onClick={generateJoke}>
            Generate Joke
            </button>

            {/* Joke Generated */}
            {
                joke !== null &&
                (
                    <>
                        <p> {joke} </p>
                        <div>
                            <button 
                            onClick={totalLike}
                            > 
                                Like {like} 
                            </button>
                            <button
                            onClick={ totalDontLike }
                            > 
                                I don´t like {dontLike} </button>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default GeneradorChistes;
