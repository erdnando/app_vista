import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import movieDB from '../api/movieDB';
import { MoviesDBPlaying } from '../models/MoviesDBPlaying';


export const useSearch =  () => {
        //const [ isLoading, setIsLoading ] = useState(false);
        const { ids ,setIds, flags,setFlags} = useContext( GeneralContext );
        const [ peliculasEnCine, setPeliculasEncine ] = useState<Movie[]>([])

    
        const getResultadoBusqueda = async () =>{
           
            const resp = await movieDB.get<MoviesDBPlaying>('/now_playing');
           

              const peliculas = resp.data.results;
              setPeliculasEncine(peliculas);
    
              const payload= flags;
              payload.isLoading=false;
              setFlags(payload);
           
            
        }

        const onChangeSearch = async (codigoBusqueda:string) =>{
            //TODO ad logic to consume search api
            
            const payload= ids;
            payload.codigoBusqueda= codigoBusqueda;
            setIds(payload);
        }

  
        //exposed objets 
        return {
            onChangeSearch,peliculasEnCine,getResultadoBusqueda
        }
}
