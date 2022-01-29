import React, { useContext } from 'react';  
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colores, gstyles } from '../theme/appTheme';
import { AgendaScreen } from '../screens/home/AgendaScreen';
import { ParecerScreen } from '../screens/home/ParecerScreen';
import { RelatorioScreen } from '../screens/home/RelatorioScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DrawerScreenProps } from '@react-navigation/drawer';
import CustomIcon from '../theme/CustomIcon';
import { OpcionBottomTab } from '../components/login/OpcionBottomTab';
import { OpcionHeader } from '../components/login/OpcionHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GeneralContext } from '../state/GeneralProvider';
import { ContactoScreen } from '../screens/home/ContactoScreen';
import { TitleApp } from '../components/TitleApp';
import { useSearch } from '../hooks/useSearch';


const Tab = createBottomTabNavigator();
interface Props extends DrawerScreenProps<any, any>{};


export const NavigationHome = ( { navigation }:Props) => {

  const { top } = useSafeAreaInsets();
  //call global state
  const { usuario,flags,setFlags,setTabSelected,setTabSelectedOld,tabSelectedOld, tabSelected,ids, 
          setIds, tabModule,setTabModule,menuOpiniones,setMenuOpiniones} = useContext(GeneralContext);
  const { getResultadoBusqueda } = useSearch(); 



  //terciario
  if( usuario.tipo === 1){
      return(
        <Tab.Navigator  sceneContainerStyle={{ backgroundColor:'transparent',  }}  
        screenOptions={({route}) => ({
                tabBarActiveTintColor:colores.primary,
                tabBarInactiveTintColor:'white',
                tabBarStyle:{
                    backgroundColor: colores.bottomBar,
                    borderTopColor: colores.bottomBar,
                    borderTopWidth:1,
                    borderBottomWidth:1,
                    elevation:0,
                    height:Platform.OS === 'ios' ? 72 : 60
                },
                tabBarLabelStyle:{
                fontSize:13,
                },
                headerShown:true,
                tabBarIcon: ({color, focused, size }) =>{
                    return <OpcionBottomTab routeName={route.name} color={color} ></OpcionBottomTab>
                },
                header:
                  () => {
                    return <View style={{alignSelf:'flex-start',alignContent:'center',justifyContent:'center', 
                                        flexDirection:'row',top:top,backgroundColor:colores.topBar, height:66}}>
                                
                                {/* icono left side (hamburguer or back arrow) */}
                               { flags.verDetalleAgenda || ids.idOpinionSeleccionado !='' ?   
                                  <OpcionHeader iconName='ic_round-arrow-back' color={colores.primary}  // back option 
                                      onPress={() =>{ 
                                        ids.idOpinionSeleccionado!='' ? setTabSelectedOld('Parecer'):setTabSelectedOld(tabSelected);

                                        const payload= flags;
                                        payload.verDetalleAgenda=false;
                                        setFlags(payload);

                                        setTabSelected(tabModule)
                                         

                                        const payload1 = ids;
                                        payload1.idOpinionBusqueda= '';
                                        payload1.idOpinionSeleccionado='';
                                        payload1.idMenuOpinionSelected=1;
                                        setIds(payload1);




                                        const payload2 = menuOpiniones;
                                        payload2.forEach(function(part, index) {
                                               payload2[index].estatus=0;  
                                        });

                                        payload2[0].estatus=1;
                                        setMenuOpiniones(payload2);

                                      

                                      }} /> : 
                                    
                                    <OpcionHeader iconName='ic_baseline-menu' color={colores.primary}  //menu hamburguesa
                                      onPress={() =>{ 
                                        navigation.toggleDrawer(); 
                                      }} />
                               }
                                  

                                {/* logo app/ menu option */}
                                <View style={{flex:1, left:24,top:15 }}>
                                   <TitleApp></TitleApp>
                                </View>
                              
                               {/* iconos right side */}
                                <View style={{ flexDirection:'row',alignSelf:'flex-end', top:-20   }} >  
                                      {/* notificaciones */}
                                      <TouchableOpacity onPress={() =>{  
                                            ids.idOpinionSeleccionado!='' ? setTabSelectedOld('Parecer'):setTabSelectedOld(tabSelected);
                                            //setTabSelectedOld(tabSelected);//aux
                                            //setTabSelected('Notificaciones');
                                            const payload= flags;
                                            payload.isNotificaciones=!flags.isNotificaciones;
                                            payload.verDetalleAgenda=false;
                                            setFlags(payload);

                                            const payload1= ids;
                                            payload1.idOpinionSeleccionado='';
                                            payload1.codigoBusqueda='';
                                            payload1.idOpinionBusqueda='';
                                            setIds(payload1);

                                            flags.isNotificaciones ? setTabSelected('Notificaciones'): setTabSelected(tabSelectedOld);
                                            
                                      }}>
                                        
                                          {/* <Text><CustomIcon name='clarity_notification-solid-badged' size={30} color='white' style={{padding:150}} ></CustomIcon></Text> */}
                                          <Image style={{...gstyles.avatar,height:28,width:25, top:3,tintColor:'white'}} 
                                              source={require('../assets/clarity_notification-solid-badged.png')}  >
                                          </Image>

                                      </TouchableOpacity>

                                      {/* perfil */}
                                      <TouchableOpacity style={{ marginRight:10, marginLeft:16, marginEnd:16 }} 
                                      onPress={() =>{  navigation.toggleDrawer(); }}>
                                        <Text>
                                            <CustomIcon name='gridicons_user' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                        </Text>
                                      </TouchableOpacity>

                                      {/* search just on agenda detail */}
                                      { flags.verDetalleAgenda || ids.idOpinionSeleccionado !='' ?   
                                         <TouchableOpacity style={{ marginEnd:16 }} 
                                         onPress={() =>{ 
                                              console.log('searching...3')
                                              const payload1= ids;
                                              payload1.codigoBusqueda='1';
                                              setIds(payload1);

                                                  //call search engine api
                                              const payload= flags;
                                              payload.isLoading=true;
                                              payload.resultadosBusquedaVisible=true;//openModal
                                              setFlags(payload);

                                              console.log('searching...4')
                                              
                                              // setTimeout(
                                              //   () => { 
                                              //     getResultadoBusqueda(true);//consume api
                                              //   },
                                              //   3000
                                              // )   
                                              getResultadoBusqueda(true);//consume api


                                          }}>
                                           <Text>
                                               <CustomIcon name='gg_search' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                           </Text>
                                                                                    
                                         </TouchableOpacity> 
                                         : <View></View>
                                      }

                                </View>
                          </View>
                  }
        })} >

        <Tab.Screen name="HomeScreen" options={{ title:'',unmountOnBlur:true }}   component={ HomeScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => {  
                      setTabSelected('Logo');   
                      setTabModule('Logo');
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);

                      const payload1 = ids;
                      payload1.idOpinionBusqueda= '';
                      payload1.idOpinionSeleccionado='';
                      setIds(payload1);

                       }, })} />
        <Tab.Screen name="AgendaScreen" options={{ title:'',unmountOnBlur:true }} component={ AgendaScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => {   
                      setTabSelected('Agenda');   
                      setTabModule('Agenda');
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);
                      
                      const payload1 = ids;
                      payload1.idOpinionBusqueda= '';
                      payload1.idOpinionSeleccionado='';
                      setIds(payload1);
                      }, })} />
        <Tab.Screen name="ParecerScreen" options={{ title:'',unmountOnBlur:true }} component={ ParecerScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => { 
                      setTabSelected('Parecer');  
                      setTabModule('Parecer');
                    const payload= flags;
                      payload.isNotificaciones=false;
                      setFlags(payload);

                      const payload1 = ids;
                      payload1.idOpinionBusqueda= '';
                      payload1.idOpinionSeleccionado='';
                      setIds(payload1);

                        }, })} />
        <Tab.Screen  name="ContactoScreen" options={{ title:'',unmountOnBlur:true }} component={ ContactoScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => { 
                      setTabSelected('Contacto'); 
                      setTabModule('Contacto'); 
                     const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);

                      const payload1 = ids;
                      payload1.idOpinionBusqueda= '';
                      payload1.idOpinionSeleccionado='';
                      setIds(payload1);

                    }, })} />
        <Tab.Screen name="RelatorioScreen" options={{ title:'',unmountOnBlur:true }} component={ RelatorioScreen } listeners={({ navigation, route }) => ({
                    tabPress: e => { 
                      setTabSelected('Relatorios'); 
                      setTabModule('Relatorios');
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);

                      const payload1 = ids;
                      payload1.idOpinionBusqueda= '';
                      payload1.idOpinionSeleccionado='';
                      setIds(payload1);


                    }, })} />

      </Tab.Navigator>
      )
  }
 //colaborador
  if( usuario.tipo === 2){
     
      return (
        <Tab.Navigator  sceneContainerStyle={{ backgroundColor:'transparent',  }}  
            
            screenOptions={({route}) => ({
                    tabBarActiveTintColor:colores.primary,
                    tabBarInactiveTintColor:'white',
                    tabBarStyle:{
                        backgroundColor: colores.bottomBar,
                        borderTopColor: colores.bottomBar,
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        elevation:0,
                        height:Platform.OS === 'ios' ? 72 : 60
                    },
                    tabBarLabelStyle:{
                    fontSize:13,
                    },
                    headerShown:true,
                    tabBarIcon: ({color, focused, size }) =>{
                        return <OpcionBottomTab routeName={route.name} color={color} ></OpcionBottomTab>
                    },
                    header:
                      () => {
                        return <View style={{alignSelf:'flex-start',alignContent:'center',justifyContent:'center', 
                                            flexDirection:'row',top:top,backgroundColor:colores.topBar, height:66}}>
                                   
                                   { flags.verDetalleAgenda || ids.idOpinionSeleccionado!='' ?   
                                      <OpcionHeader iconName='ic_round-arrow-back' color={colores.primary}  // back option 
                                          onPress={() =>{ 
                                           

                                            const payload= flags;
                                            payload.verDetalleAgenda=false;
                                            setFlags(payload);

                                            const payload1 = ids;
                                            payload1.idOpinionBusqueda= '';
                                            payload1.idOpinionSeleccionado='';
                                            payload1.idMenuOpinionSelected=1;
                                            setIds(payload1);

                                            setTabSelected(tabModule)



                                            const payload2 = menuOpiniones;
                                        payload2.forEach(function(part, index) {
                                               payload2[index].estatus=0;  
                                        });

                                        payload2[0].estatus=1;
                                        setMenuOpiniones(payload2);


                                        

                                          }} /> : 
                                        
                                        <OpcionHeader iconName='ic_baseline-menu' color={colores.primary}  //menu hamburguesa
                                          onPress={() =>{ 
                                            navigation.toggleDrawer(); 
                                          }} />
                                   }

                                    {/* logo app */}
                                    <View style={{flex:1, left:24,top:15 }}>
                                          <TitleApp></TitleApp>
                                            {/* <Image style={{...gstyles.avatar,height:24*1.15,width:79.89*1.15, top:3}} 
                                               source={require('../assets/horizontal-logo.png')}  >
                                            </Image> */}
                                        
                                    </View>
                                  
                                  
                                    <View style={{ flexDirection:'row',alignSelf:'flex-end', top:-20   }} >  
                                        {/* notificaciones */}
                                        <TouchableOpacity onPress={() =>{  
                                              ids.idOpinionSeleccionado!='' ? setTabSelectedOld('Parecer'):setTabSelectedOld(tabSelected);
                                              //setTabSelectedOld(tabSelected);//aux

                                             // setTabSelected('Notificaciones');
                                              const payload= flags;
                                              payload.isNotificaciones=!flags.isNotificaciones;
                                              payload.verDetalleAgenda=false;
                                              setFlags(payload);

                                              const payload1= ids;
                                              payload1.idOpinionSeleccionado='';
                                              payload1.codigoBusqueda='';
                                              payload1.idOpinionBusqueda='';
                                              setIds(payload1);
                                             
                                              flags.isNotificaciones ? setTabSelected('Notificaciones'): setTabSelected(tabSelectedOld);
                                        }}>
                                          {/* <Text><CustomIcon name='clarity_tasks-solid' size={30} color='white' style={{padding:150}} ></CustomIcon></Text> */}
                                          <Image style={{...gstyles.avatar,height:28,width:25, top:3,tintColor:'white'}} 
                                              source={require('../assets/clarity_notification-solid-badged.png')}  >
                                          </Image>
                                        </TouchableOpacity>

                                        {/* perfil */}
                                        <TouchableOpacity style={{ marginRight:10, marginLeft:16, marginEnd:16 }} 
                                        onPress={() =>{  navigation.toggleDrawer(); }}>
                                          <Text>
                                              <CustomIcon name='gridicons_user' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                          </Text>
                                        </TouchableOpacity>


                                      {/* search just on agenda detail */}
                                      { flags.verDetalleAgenda || ids.idOpinionSeleccionado!='' ?   
                                         <TouchableOpacity style={{ marginEnd:16 }} 
                                         onPress={() =>{ 

                                              const payload1= ids;
                                              payload1.codigoBusqueda='1';
                                              setIds(payload1);

                                                  //call search engine api
                                              const payload= flags;
                                              payload.isLoading=true;
                                              payload.resultadosBusquedaVisible=true;//openModal
                                              setFlags(payload);

                                              console.log('searching...5')
                                              
                                            
                                              getResultadoBusqueda(true);//consume api

                                              
                                          }}>
                                           <Text>
                                               <CustomIcon name='gg_search' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                           </Text>
                                         </TouchableOpacity> 
                                         : <View></View>
                                      }


                                      </View>
                              </View>
                      }
                    ,
            })} >

          <Tab.Screen name="HomeScreen" options={{ title:'',unmountOnBlur:true }}  component={ HomeScreen } listeners={({ navigation, route }) => ({
                      tabPress: e => {   
                        setTabSelected('Logo'); 
                        setTabModule('Logo');  
                        const payload= flags;
                        payload.isNotificaciones=false;
                        payload.verDetalleAgenda=false;
                        setFlags(payload);

                        const payload1 = ids;
                        payload1.idOpinionBusqueda= '';
                        payload1.idOpinionSeleccionado='';
                        setIds(payload1);

                        }, })} />
          <Tab.Screen name="AgendaScreen" options={{ title:'',unmountOnBlur:true }} component={ AgendaScreen } listeners={({ navigation, route }) => ({
                      
                      tabPress: e => {   
                        setTabSelected('Agenda');   
                        setTabModule('Agenda');
                        const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);

                      const payload1 = ids;
                      payload1.idOpinionBusqueda= '';
                      payload1.idOpinionSeleccionado='';
                      setIds(payload1);

                         }, })} />
          <Tab.Screen name="ParecerScreen" options={{ title:'',unmountOnBlur:true }} component={ ParecerScreen } listeners={({ navigation, route }) => ({
                      tabPress: e => { setTabSelected('Parecer'); 
                      setTabModule('Parecer'); 
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);

                      const payload1 = ids;
                      payload1.idOpinionBusqueda= '';
                      payload1.idOpinionSeleccionado='';
                      setIds(payload1);

                      }, })} />
          <Tab.Screen name="RelatorioScreen" options={{ title:'',unmountOnBlur:true }} component={ RelatorioScreen } listeners={({ navigation, route }) => ({
                      tabPress: e => { setTabSelected('Relatorios'); 
                      setTabModule('Relatorios');
                      const payload= flags;
                      payload.isNotificaciones=false;
                      payload.verDetalleAgenda=false;
                      setFlags(payload);

                      const payload1 = ids;
                      payload1.idOpinionBusqueda= '';
                      payload1.idOpinionSeleccionado='';
                      setIds(payload1);

                      }, })} />
        </Tab.Navigator>
      );
  }
  else{
  return(
    <View>
      <Text>Sin permisos</Text>
    </View>
  )
  }
}


