import React, {useState} from 'react';
import Button from '@mui/material/Button';
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
            <Button
            color='primary' 
            variant='contained'
            onClick={generateJoke}>
            Generate Joke
            </Button>

            {/* Joke Generated */}
            {
                joke !== null &&
                (
                    <>
                        <p> {joke} </p>
                        <div>
                            <Button
                            color='success' 
                            variant='contained'
                            onClick={totalLike}
                            > 
                                Like {like} 
                            </Button>
                            <Button
                            color='error' 
                            variant='contained'
                            onClick={ totalDontLike }
                            > 
                                I don´t like {dontLike} </Button>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default GeneradorChistes;
