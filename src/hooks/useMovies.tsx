

import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MoviesDBPlaying } from '../models/MoviesDBPlaying';


export const useMovies =  () => {

        const [ isLoading, setIsLoading ] = useState(true);
        const [ peliculasEnCine, setPeliculasEncine ] = useState<Movie[]>([])

        const getMovies = async () =>{

            const resp = await movieDB.get<MoviesDBPlaying>('/now_playing');
            const peliculas = resp.data.results;

            setPeliculasEncine(peliculas);
            setIsLoading(false);
        }
        
        //trigger op
        useEffect(() => {
        getMovies();
        }, []);
        
        //exposed objets 
        return {
            peliculasEnCine,
            isLoading
        }
}
