import React, { useContext, useEffect } from 'react'
import { ImageBackground, Modal, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles, colores } from '../../theme/appTheme';
import { Dimensions } from 'react-native';
import { Loading } from '../../components/Loading';
import { Spacer } from '../../components/Spacer';
import { Search } from '../../components/search/Search';
import CustomIcon from '../../theme/CustomIcon';
import { Resumen } from '../../components/resumen/Resumen';
import { ResumenOportunidades } from '../../components/resumen/ResumenOportunidades';
import { FlatList } from 'react-native-gesture-handler';

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


        interface LastUpdates{
            id:string,
            dia:string;
            hora:string;
            descripcion:string;
            color:string;
            icon:string;
        }

        const LastUpdates = [
            {
                id:'1',
                dia:'HOY',
                hora: '13:01:45',
                descripcion:'Se ha habierto la posicion 345.',
                color: 'red',
                icon:'bx_bxs-message-alt-error'
            },
            {
                id:'2',
                dia:'HOY',
                hora: '13:11:25',
                descripcion:'Se ha habierto la posicion 345.',
                color: 'red',
                icon:'bx_bxs-message-alt-error'
            },
            {
                id:'3',
                dia:'HOY',
                hora: '13:23:45',
                descripcion:'Se ha habierto la posicion 345.',
                color: 'red',
                icon:'bx_bxs-message-alt-error'
            }
        ]


        
        const renderUpdateItem = (updateItem:LastUpdates) =>{
            return (
                <View style={{height:190, flexDirection:'row', width:'73%',  justifyContent:'flex-end', 
                        alignItems:'flex-start', borderWidth: 0,backgroundColor:'#B85050', borderRadius:7,padding:5,elevation:6,
                        shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                        height: 1, width: 1
                    }}}>

                    <View style={{ flexDirection:'column', width:'75%',height:50, justifyContent:'flex-start',  alignItems:'flex-start'}}>
                       <Text style={{fontFamily:'Roboto-Bold', fontSize:17, color:'#F8BBBB'}}>{updateItem.hora}</Text>
                       <Text style={{fontFamily:'Roboto-Bold', fontSize:17, color:'#FFFFFF'}}>{updateItem.descripcion}</Text>
                    </View>

                    <View style={{ flexDirection:'column', flex:1}}>
                    
                    <Text style={{right:5,top:28}}> 
                            <CustomIcon style={{left:16}} name='bx_bxs-message-alt-error' size={36} color='white' ></CustomIcon>
                        </Text>
                    <View style={{ backgroundColor:'#F8BBBB',opacity:0.3, borderWidth:0,top:-26,right:22, borderRadius:50,margin:3, height:64, width:64, 
                         }}>
                            
                    </View>
                        
                    
                    </View>

                </View>
            )
        }

        const renderListHeader = () =>{
            return (
                <View>
                    <Text style={{ fontFamily:'Roboto-Bold', fontSize:20}}>Ultimas actualizaciones</Text>
                    <Spacer height={20}></Spacer>
                </View>
                
            )
        }

        const renderSeparator = () =>{
            return (
                <View>
                    <Spacer height={20}></Spacer>
                </View>
            )

        }


        return (
            
                <View style={ {  flex:1,}}>
                      <ImageBackground style={styles.background}  resizeMode='cover' source={require('../../assets/Background.png')}>
                       <View style={{flex:1, alignItems:'center',marginTop: top}}>
                            {/* <Text>Colaborador</Text> */}
                           
                            <Spacer height={15}></Spacer>
                            <Search  label='Cod oportunidade' iconClose='ic_round-close' iconSearch='gg_search'></Search>
                            <Spacer height={8}></Spacer>
                           

                            <View style={{ flexDirection:'column',backgroundColor:'#BCC1CB', position:'absolute', bottom:0, 
                            width:'100%', height:Platform.OS=='ios' ? '74%': '79%', justifyContent:'flex-end',alignItems:'center',}}>
                               {/* <Text style={{top:95+30, left:15, fontFamily:'Roboto-Bold', fontSize:19}}>Ultimas actualizaciones</Text> */}


                                {/* lista de ultimops updates */}
                                <View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'flex-end',alignContent:'flex-end', top:95+30, width:'85%'}}>
                                    <FlatList data={LastUpdates} 
                                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                                    keyExtractor={(item) => item.id} 
                                    ListHeaderComponent={ () => renderListHeader()}
                                    ItemSeparatorComponent={ () => renderSeparator()} />
                                </View>

                            </View>





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