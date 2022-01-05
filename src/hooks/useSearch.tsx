import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
import { tipoUsuario } from '../models/enums';
import movieDB from '../api/movieDB';
import { MoviesDBPlaying } from '../models/MoviesDBPlaying';


export const useSearch =  () => {
        //const [ isLoading, setIsLoading ] = useState(false);
        const { codigoBusqueda, setCodigoBusqueda , flags,setFlags} = useContext( GeneralContext );
        const [ peliculasEnCine, setPeliculasEncine ] = useState<Movie[]>([])

    
        const getResultadoBusqueda = async () =>{
           
            const resp = await movieDB.get<MoviesDBPlaying>('/now_playing');
           
            //   setTimeout(
            //     () => { 
            //         const peliculas = resp.data.results;
            //         setPeliculasEncine(peliculas);
            //         setIsLoadingSearch(false);
            //     },
            //     5000
            //   )   

              const peliculas = resp.data.results;
              setPeliculasEncine(peliculas);
    
              const payload= flags;
              payload.isLoadingSearch=false;
              setFlags(payload);
           
            
        }

        const onChangeSearch = async (codigoBusqueda:string) =>{
            //TODO ad logic to consume search api
            setCodigoBusqueda(codigoBusqueda);
        }

  
        //exposed objets 
        return {
            onChangeSearch,peliculasEnCine,getResultadoBusqueda
        }
}
