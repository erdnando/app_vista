import React, { useContext } from 'react'
import { ImageBackground, Modal, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles, colores } from '../../theme/appTheme';
import { Loading } from '../../components/Loading';
import { Spacer } from '../../components/Spacer';
import { Search } from '../../components/search/Search';
import { ResumenOportunidades } from '../../components/resumen/ResumenOportunidades';
import { HeaderActualizaciones } from '../../components/ultimasActualizaciones/HeaderActualizaciones';
import { ListActualizaciones } from '../../components/ultimasActualizaciones/ListActualizaciones';
import { BarChart } from "react-native-gifted-charts";

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    //const windowHeight = Dimensions.get('window').height;
    //call global state
    const { tipoUsuario} = useContext(GeneralContext);
    //call service to get data
    const { isLoading } = useMovies();
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

        const labelTopGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>455</Text> ) }
        const labelTopNoGo = () =>{  return( <Text style={{width:70, textAlign:'right'}}>210</Text> ) }
        const labelEnAnalisis = () =>{  return( <Text style={{width:70, textAlign:'right'}}>6</Text> ) }
        

        const barData = [
            {value: 455,label: 'GO',frontColor: '#83AE69',topLabelComponent:labelTopGo },
            {value: 210,label: 'NO GO',frontColor: '#B85050',topLabelComponent:labelTopNoGo },
            {value: 6,label: 'EM ANALISE',frontColor: '#F9A61A',topLabelComponent:labelEnAnalisis },
           
            ];


        return (
            
                <View style={ {  flex:1,}}>
                      <ImageBackground style={styles.background}  resizeMode='cover' source={require('../../assets/Background.png')}>
                       <View style={{flex:1, alignItems:'center',marginTop: top}}>
                           
                            <Spacer height={15}></Spacer>
                            {/* buscador */}
                            <Search   label='Cod oportunidade' iconClose='ic_round-close' iconSearch='gg_search'></Search>
                            <Spacer height={8}></Spacer>
                           
                            {/* ultimas actualizaciones */}
                            {/* <View style={{flex:1, flexDirection:'column',backgroundColor:'#BCC1CB', position:'absolute', bottom:0, 
                                           width:'100%', height:Platform.OS=='ios' ? '73%': '78%',  alignItems:'center',}}>
                                <HeaderActualizaciones label='Ultimas actualizaciones'></HeaderActualizaciones>
                                <View style={{height:Platform.OS=='ios' ? '63%': '72%' }}>
                                    <ListActualizaciones></ListActualizaciones>
                                </View>
                                </View>
                            </View> */}


                            {/* Charts */}
                            <View style={{flex:1, flexDirection:'column',backgroundColor:'#BCC1CB', position:'absolute', bottom:0, 
                                           width:'100%', height:Platform.OS=='ios' ? '73%': '78%',  alignItems:'center',}}>
                                <HeaderActualizaciones label='Resultado do parecer'></HeaderActualizaciones>

                                <View style={{height:Platform.OS=='ios' ? '58%': '72%',bottom: -115, flexDirection:'column', width:'90%', left:-1, justifyContent:'center', 
                                            alignItems:'flex-start', borderWidth: 0,backgroundColor:'white', borderRadius:7,padding:5,elevation:6,
                                            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                                            height: 1,
                                            width: 1}}}>         
                                 <BarChart
                                 barWidth={70}
                                 barBorderRadius={4}
                                 verticalLinesThickness={1}
                                 cappedBars={true}
                                 capThickness={3}
                                 capColor={'black'}
                                 
                                    showFractionalValues={true}
                                    showLine={true}
                                    showXAxisIndices={true}
                                    showReferenceLine1={true}
                                    showVerticalLines={true}
                                    showYAxisIndices={true}
                                    noOfSections={5}
                                    maxValue={500}
                                    data={barData}
                                    isAnimated
                                    
                                    />
                                
                                </View>
                                <HeaderActualizaciones label='Total de Pareceres: 710'></HeaderActualizaciones>
                                {/* <View style={{height:Platform.OS=='ios' ? '63%': '72%', bottom:-150,backgroundColor:'white' }}>
                                    <BarChart 
                                    showFractionalValues={true}
                                    showYAxisIndices
                                    noOfSections={4}
                                    maxValue={400}
                                    data={barData}
                                    isAnimated
                                    />
                                </View> */}
                            </View>



                            {/* Resumen de oportunidades */}
                            <ResumenOportunidades></ResumenOportunidades>
             
                       </View>
                   </ImageBackground>
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


const styles = StyleSheet.create({
    background:{
        flex:1, justifyContent:'center',
    },
});