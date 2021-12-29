import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Button, Modal, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import { Dimensions } from 'react-native';
import { Navigatorsearch } from '../../navigation/NavigatorSearch';
import { Loading } from '../../components/Loading';
import CustomIcon from '../../theme/CustomIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderResultados } from '../../components/search/HeaderResultados';
import { ModalSearchResultados } from '../../components/search/ModalSearchResultados';
import { InputSearch } from '../../components/search/InputSearch';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const windowHeight = Dimensions.get('window').height;
    //call global state
    const { tipoUsuario,setResultadosBusquedaVisible, codigoBusqueda} = useContext(GeneralContext);
    //call service to get data
    const { peliculasEnCine, isLoading } = useMovies();
//https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/243#issuecomment-644091552
//https://github.com/osdnk/react-native-reanimated-bottom-sheet
  

    if(isLoading){
        return <Loading color='green'></Loading>
    }
    //render view after getting data
    if(tipoUsuario === 1){//terciario
       return ( 
            <View style={ { ...gstyles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
             
                <Text>Terciario</Text>
            </View>
            )
     }else if(tipoUsuario === 2) {//colaborador
        return (
                <View style={ { marginTop: top+20, flex:1, alignItems:'center'}}>
                    
                    <Text>Colaborador</Text>
                    
                    <InputSearch label='Cod oportunidade' iconRight='gg_search'></InputSearch>

                   <ModalSearchResultados iconClose='ic_round-close' color='black' label={`Oportunidade ${ codigoBusqueda }`}></ModalSearchResultados>
                   

                </View>
             )
     }else{
         return (
             <View>
                 <Text>Sin permisos</Text>
             </View>
         )
     }
   
}
