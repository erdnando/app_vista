import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../../components/Loading';
import { ListNotificaciones } from '../../components/notificaciones/ListNotificaciones';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { Spacer } from '../../components/Spacer';
import { Search } from '../../components/opiniones/Search';
import { ListOpiniones } from '../../components/opiniones/ListOpiniones';
import { DetalleOpinion } from '../../components/opiniones/DetalleOpinion';
import { ModalSearchResultados } from '../../components/opiniones/ModalSearchResultados';
import { useParecer } from '../../hooks/useParecer';
import { TipoUsuario } from '../../models/Usuario';


export const ParecerScreen = () => {
    const { top } = useSafeAreaInsets();
    //call global state
    const { flags, ids, usuario} = useContext(GeneralContext);
    
    const { getListParecerColaborador,getListParecerTerciario } = useParecer();

    useEffect(() => {
             usuario.tipo==TipoUsuario.COLABORADOR?
            getListParecerColaborador():getListParecerTerciario()
          }, [])

  
    
    if(flags.isNotificaciones){
        return  <ListNotificaciones></ListNotificaciones>
    }

    if(flags.isLoading){
        return <Loading color='green'></Loading>
    }

    //vista detalle d euna opinion
    if(ids.idOpinionSeleccionado!=''){
        return (
            <View style={{flex:1,}}>
                <DetalleOpinion tipoUsuario={usuario.tipo.toString()}></DetalleOpinion>
                <ModalSearchResultados iconClose='ic_round-close' color='black' label={`Oportunidade ${ ids.codigoBusqueda }`}></ModalSearchResultados>
            </View>
        )
    }

    // vista inicial -listado de opiniones y buscador
    return (
        <View style={ {  marginTop: top+10, flex:1,paddingBottom:20, alignItems:'center',backgroundColor:'#E2E5EA'}}>
                            
                {/* buscador */}
                <Search label='Id de opinion' iconClose='ic_round-close' iconSearch='gg_search'></Search>
                <Spacer height={0}></Spacer>
                <ListOpiniones></ListOpiniones>
                
        </View>
    )
}
