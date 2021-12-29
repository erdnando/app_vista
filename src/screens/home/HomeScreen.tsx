import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Button, Modal, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import BottomSheet from 'reanimated-bottom-sheet';
import { Dimensions } from 'react-native';
import { Navigatorsearch } from '../../navigation/NavigatorSearch';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const windowHeight = Dimensions.get('window').height;
    //call global state
    const { email ,tipoUsuario,setResultadosBusquedaVisible, resultadosBusquedaVisible} = useContext(GeneralContext);
    //call service to get data
    const { peliculasEnCine, isLoading } = useMovies();
//https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/243#issuecomment-644091552
//https://github.com/osdnk/react-native-reanimated-bottom-sheet
    // const sheetRef = React.useRef(null);

    //generate action without and event
    // useEffect(() => {
    // setUserName(route.params.nombre);
    //  }, []);

    // const renderContent = () => (
    //     <View
    //       style={{
    //         backgroundColor: 'black',
    //         padding: 16,
    //         height: windowHeight,
        
    //       }}
    //     >
    //       <Text>Swipe down to close</Text>
    //     </View>
    //   );

    //   const renderHeader = () => (
    //     <View
    //       style={{
    //         backgroundColor: 'red',
    //         padding: 16,
    //         height: 50,
    //         borderRadius:8,
            
    //       }}
    //     >
    //       <Text>Swipe down to close</Text>
    //     </View>
    //   );
  


    if(isLoading){
        return ( 
            <View style={{ flex:1, justifyContent:'center',alignContent:'center' }}>
                <ActivityIndicator color='red' size={80}></ActivityIndicator>
            </View>                
            )
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

                    {/* <Button
                    title="Open Bottom Sheet"
                    onPress={() => sheetRef.current.snapTo(2)}
                    />


                    <BottomSheet
                            ref={sheetRef}
                            enabledInnerScrolling={true}
                            snapPoints={[0, 300, windowHeight-top-72]}
                            borderRadius={0}
                            renderContent={renderContent}
                            // renderHeader={renderHeader}
                            
                        /> */}
                    <Button title='Open modal' onPress={() =>{
                         setResultadosBusquedaVisible(true);
                    }}></Button>

                    <Modal animationType='slide' transparent={true}  visible={resultadosBusquedaVisible}>
                        <View style={{
                            flex:1,
                            backgroundColor:'white',
                            paddingTop:50
                        }}>

                            <Text>Resultados de la busqueda</Text>

                            <Button title='Cerrar' onPress={() =>{
                                  setResultadosBusquedaVisible(false);
                            }}></Button>

                            <View style={{width:800,height:500, backgroundColor:'white'}}>
                                <Navigatorsearch></Navigatorsearch>
                            </View>

                        </View>
                    </Modal>
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
