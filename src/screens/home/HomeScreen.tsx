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
            diaVisible:boolean;
        }

        const LastUpdates = [
            {
                id:'1',
                dia:'Hoy',
                hora: '13:01:45',
                descripcion:'Se ha habierto la posicion 345.',
                color: 'red',
                icon:'bx_bxs-message-alt-error',
                diaVisible:true

            },
            {
                id:'2',
                dia:'Hoy',
                hora: '13:11:25',
                descripcion:'Se ha habierto la posicion 345.',
                color: 'red',
                icon:'bx_bxs-message-alt-error',
                diaVisible:false
            },
            {
                id:'3',
                dia:'Ayer',
                hora: '13:23:45',
                descripcion:'Se ha habierto la posicion 345.',
                color: 'red',
                icon:'bx_bxs-message-alt-error',
                diaVisible:true
            },
            {
                id:'4',
                dia:'Ayer',
                hora: '13:23:45',
                descripcion:'Se ha habierto la posicion 345.',
                color: 'red',
                icon:'bx_bxs-message-alt-error',
                diaVisible:false
            }
        ]


        
        const renderUpdateItem = (updateItem:LastUpdates) =>{
            return (
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <View style={{width:'11%',}}>
                        {/* label hoy/ayer */}
                        <View  style={{left:-8,elevation:2, backgroundColor:'#BCC1CB',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                           <Text>{updateItem.diaVisible ? updateItem.dia : ''}</Text>
                        </View>
                       {/* linea */}
                        <View style={{backgroundColor:'#838892',left:6, width:3,opacity:0.2,top:2, height:103,position:'absolute',}}></View>
                    </View>


                    <View style={{height:88, flexDirection:'row', width:'88%',   
                            borderWidth: 0,backgroundColor:'#B85050', borderRadius:7,padding:5,elevation:6,
                            shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                            height: 1, width: 1
                        }}}>

                        <View style={{ flexDirection:'column', width:'82%',height:50,left:8,top:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>
                        <Text style={{fontFamily:'Roboto-Bold', fontSize:15, color:'#F8BBBB'}}>{updateItem.hora}</Text>
                        <Text style={{fontFamily:'Roboto-Regular', fontSize:15, color:'#FFFFFF',marginTop:8,width:'89%'}}>{updateItem.descripcion}</Text>
                        </View>

                        
                        <View style={{ flexDirection:'column', flex:1}}>
                            {/* icono */}
                            <Text style={{right:10,top:25}}> 
                                    <CustomIcon  name='bx_bxs-message-alt-error' size={36} color='white' ></CustomIcon>
                            </Text>
                            {/* circulo */}
                            <View style={{ backgroundColor:'#F8BBBB',opacity:0.3, borderWidth:0,top:-30,right:26, 
                                        borderRadius:50,margin:3, height:62, width:62, }}></View>
                        </View>

                    </View>
                </View>
            )
        }

     

        const renderSeparator = () =>{
            return (
                <View>
                    <Spacer height={10}></Spacer>
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
                              

                               <View style={{ width:'90%',alignContent:'flex-start', left:0,top:95+30,}}>
                                    <Text style={{ fontFamily:'Roboto-Bold', fontSize:20}}>Ultimas actualizaciones</Text>
                                    <Spacer height={20}></Spacer>
                                </View>
                                {/* lista de ultimoos updates */}
                                <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',alignContent:'flex-end', top:95+30, width:'90%'}}>
                                    <FlatList data={LastUpdates} 
                                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                                    keyExtractor={(item) => item.id} 
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