import React, { useContext, useEffect } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { gstyles } from '../theme/appTheme';
import { NavigationHome } from './NavigationHome';
import { ChangePasswordScreen } from '../screens/home/ChangePasswordScreen';
import { NavigationLogin } from './NavigationLogin';
import { OpcionMenuLateral } from '../components/login/OpcionMenuLateral';
import { GeneralContext } from '../state/GeneralProvider';
import RNRestart from 'react-native-restart';
import { Loading } from '../components/Loading';
import { useAgenda } from '../hooks/useAgenda';
import CustomIcon from '../theme/CustomIcon';

const Drawer = createDrawerNavigator();


//doc -->  https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
//yarn add react-native-reanimated@next
// module.exports = {
//     ...
//     plugins: [
//         ...
//         'react-native-reanimated/plugin',
//     ],
// };
//Run pod install in the ios/ directory.


export const NavigationLateral = ( { navigation }:Props) => {

    const { width,height } = useWindowDimensions();
    const { flags,setFlags } = useContext( GeneralContext )
   
    useEffect(() => {
        
      navigation.setOptions(
          {
              headerShown:false,
              title:'',
          },
          )
  }, [])

 
      if(flags.isLoading){
        return <Loading color='orange'></Loading>
      }
      return (
                <Drawer.Navigator 
                
                  screenOptions={{
                    //swipeEnabled:flags.leftMenuAccesible? true:false,
                    // gestureEnabled:flags.leftMenuAccesible? true:false,
                                  drawerPosition:'left',
                                  headerShown: false, 
                                  drawerType:(width >=768 ? 'permanent' : 'front')  ,
                                  }}  
                  drawerContent={ (props) => <MenuInterno { ...props }></MenuInterno> } >
                  <Drawer.Screen name="NavigationHome" component={ NavigationHome } options={{ title:'', }} initialParams={{screen:'HomeScreen'}}/>      
                  <Drawer.Screen name="NavigationHomeagenda" component={ NavigationHome } initialParams={{screen:'AgendaScreen'}}/>
                  <Drawer.Screen name="NavigationHomeParecer" component={ NavigationHome } initialParams={{screen:'ParecerScreen'}}/>
                  <Drawer.Screen name="NavigationHomeContacto" component={ NavigationHome } initialParams={{screen:'ContactoScreen'}}/>
                  <Drawer.Screen name="NavigationHomeRelatorio" component={ NavigationHome } initialParams={{screen:'RelatorioScreen'}}/>
                  <Drawer.Screen name="ChangePasswordScreen"  component={ ChangePasswordScreen } />
                  <Drawer.Screen name="NavigationLogin"  component={ NavigationLogin } />
                </Drawer.Navigator>
            );
          
   
}

const MenuInterno = ({navigation}: DrawerContentComponentProps ) =>{
  const { logOut, flags,setFlags,setTabSelected,ids,setIds,setTabModule, usuario} = useContext( GeneralContext )
  const { getMonthAgenda } = useAgenda()
  return (
     <DrawerContentScrollView>

       {/* Imagen avatar */}
       {/* <View style={gstyles.avatarContainer}>
          <Image style={gstyles.avatar} 
            source={{ uri:'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder-300x300.png' }} >
          </Image>
       </View> */}
       <View  style={gstyles.avatarContainer} >
         <Image style={{justifyContent:'center', alignItems:'center', width:150,height:150}} source={require('../assets/vertical-logo.png')} ></Image>
         </View>

        {/* Opciones del menu */}
        <View style={gstyles.menuContainer}>

        <View style={{flexDirection:'row'}}>
          <Text>
          <CustomIcon name={'gridicons_user'} size={25} color={'black'} ></CustomIcon>
          </Text>
          <Text style={{...gstyles.menuTexto,marginTop:2, paddingLeft:8, fontFamily:'Roboto-Bold', fontSize:16}}>{usuario.email}</Text>
          </View>
          
          <OpcionMenuLateral iconName='fe_home' color='black' label='Home'  onPress={() =>{
            setTabSelected('Logo')
            setTabModule('Logo');
            const payload= flags;
                  payload.isNotificaciones=false;
                  payload.verDetalleAgenda=false;
                  setFlags(payload);

                  const payload1 = ids;
                  payload1.idOpinionBusqueda= '';
                  payload1.idOpinionSeleccionado='';
                  payload1.codigoBusqueda='';
                  setIds(payload1);

            navigation.navigate('NavigationHome'); 
            }}></OpcionMenuLateral>

          <OpcionMenuLateral iconName='bi_calendar-week' color='black' label='Agenda' onPress={() =>{
            setTabSelected('Agenda');
            setTabModule('Agenda');
            const payload= flags;
                  payload.isNotificaciones=false;
                  payload.verDetalleAgenda=false;

                  const payload1 = ids;
                  payload1.idOpinionBusqueda= '';
                  payload1.idOpinionSeleccionado='';
                  payload1.codigoBusqueda='';
                  setIds(payload1);

                  setFlags(payload);
                  getMonthAgenda(new Date())
            navigation.navigate('AgendaScreen'); 
            }}></OpcionMenuLateral>

          <OpcionMenuLateral iconName='icomoon-free_hammer2' color='black' label='Parecer' onPress={() =>{
            setTabSelected('Parecer');
            setTabModule('Parecer');
            const payload= flags;
                  payload.isNotificaciones=false;
                  payload.verDetalleAgenda=false;
                  setFlags(payload);

                  const payload1 = ids;
                  payload1.idOpinionBusqueda= '';
                  payload1.idOpinionSeleccionado='';
                  payload1.codigoBusqueda='';
                  setIds(payload1);

            navigation.navigate('ParecerScreen'); 
            }}></OpcionMenuLateral>

           {usuario.tipo===1 && <OpcionMenuLateral iconName='ic_baseline-lightbulb' color='black' label='Contacto' onPress={() =>{
            setTabSelected('Contacto');
            setTabModule('Contacto');
            const payload= flags;
                  payload.isNotificaciones=false;
                  payload.verDetalleAgenda=false;
                  setFlags(payload);

                  const payload1 = ids;
                  payload1.idOpinionBusqueda= '';
                  payload1.idOpinionSeleccionado='';
                  payload1.codigoBusqueda='';
                  setIds(payload1);

            navigation.navigate('ContactoScreen'); 
            }}></OpcionMenuLateral>}
                    

          <OpcionMenuLateral iconName='bi_bar-chart-line-fill' color='black' label='Relatorio' onPress={() =>{
            setTabSelected('Relatorio');
            setTabModule('Relatorio');
            const payload= flags;
                  payload.isNotificaciones=false;
                  payload.verDetalleAgenda=false;
                  setFlags(payload);

                  const payload1 = ids;
                  payload1.idOpinionBusqueda= '';
                  payload1.idOpinionSeleccionado='';
                  payload1.codigoBusqueda='';
                  setIds(payload1);

            navigation.navigate('RelatorioScreen'); 
            }}></OpcionMenuLateral>

          <OpcionMenuLateral iconName='ic_outline-lock' color='black' label='Cambio contrase??a' onPress={() =>{
            setTabSelected('Cambio contrase??a');
            setTabModule('Cambio contrase??a');
            const payload= flags;
                  payload.isNotificaciones=false;
                  payload.verDetalleAgenda=false;
                  setFlags(payload);

                  const payload1 = ids;
                  payload1.idOpinionBusqueda= '';
                  payload1.idOpinionSeleccionado='';
                  payload1.codigoBusqueda='';
                  setIds(payload1);


            navigation.navigate('ChangePasswordScreen'); 
            }}></OpcionMenuLateral>

          <OpcionMenuLateral iconName='ic_round-close' color='black' label='Cerrar sesion' onPress={() =>{
            const payload= flags;
                  payload.isNotificaciones=false;
                  payload.verDetalleAgenda=false;
                  //payload.leftMenuAccesible=false;
                  setFlags(payload);

                  const payload1 = ids;
                  payload1.idOpinionBusqueda= '';
                  payload1.idOpinionSeleccionado='';
                  payload1.codigoBusqueda='';
                  setIds(payload1);
                  
            logOut(); 
            //navigation.navigate('NavigationLogin'); 
            //CodePush.restartApp();
            RNRestart.Restart();
            //NativeModules.DevSettings.reload();
            
            }}></OpcionMenuLateral>
          
        </View>

     </DrawerContentScrollView>
  );
}