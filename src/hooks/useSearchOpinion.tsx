import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../state/GeneralProvider';
// import { tipoUsuario } from '../models/enums';
import movieDB from '../api/movieDB';
import { MoviesDBPlaying } from '../models/MoviesDBPlaying';


export const useSearchOpinion =  () => {
        
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

        const onChangeSearch = async (idOpinion:string) =>{
            //TODO ad logic to consume search api
            const payload= ids;
            payload.idOpinionBusqueda= idOpinion;
            setIds(payload);

        }

  
        //exposed objets 
        return {
            onChangeSearch,peliculasEnCine,getResultadoBusqueda
        }
}
