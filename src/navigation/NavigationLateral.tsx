import React, { useContext, useEffect } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, useWindowDimensions, View  } from 'react-native';
import { gstyles } from '../theme/appTheme';
import { NavigationHome } from './NavigationHome';
import { ChangePasswordScreen } from '../screens/home/ChangePasswordScreen';
import { NavigationLogin } from './NavigationLogin';
import { OpcionMenuLateral } from '../components/login/OpcionMenuLateral';
import { GeneralContext } from '../state/GeneralProvider';


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

    const { width } = useWindowDimensions();
   
    useEffect(() => {
        
      navigation.setOptions(
          {
              headerShown:false,
              title:'',
             
          },
          
          )
  }, [])

  return (
            <Drawer.Navigator 
              screenOptions={{
                              drawerPosition:'left',
                              headerShown: false, 
                              drawerType:(width >=768 ? 'permanent' : 'front')  ,
                            
                              }}  
              drawerContent={ (props) => <MenuInterno { ...props }></MenuInterno> } >
              <Drawer.Screen name="NavigationHome" component={ NavigationHome } options={{ title:'', }} initialParams={{screen:'HomeScreen'}}/>      

              <Drawer.Screen name="NavigationHomeagenda" component={ NavigationHome } initialParams={{screen:'AgendaScreen'}}/>
              <Drawer.Screen name="NavigationHomeParecer" component={ NavigationHome } initialParams={{screen:'ParecerScreen'}}/>
              <Drawer.Screen name="NavigationHomeRelatorio" component={ NavigationHome } initialParams={{screen:'RelatorioScreen'}}/>
              <Drawer.Screen name="ChangePasswordScreen"  component={ ChangePasswordScreen } />
              <Drawer.Screen name="NavigationLogin"  component={ NavigationLogin } />
              {/* <Drawer.Screen name="NotificacionesScreen" options={{ title:'' }} component={ NotificacionesScreen } /> */}
            </Drawer.Navigator>
        );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps ) =>{
  const { logOut, flags,setFlags,setTabSelected} = useContext( GeneralContext )
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
          <OpcionMenuLateral iconName='fe_home' color='black' label='Home'  onPress={() =>{
            setTabSelected('Logo')
            const payload= flags;
                  payload.isNotificaciones=false;
                  setFlags(payload);

            

            navigation.navigate('NavigationHome'); 
            }}></OpcionMenuLateral>
          <OpcionMenuLateral iconName='bi_calendar-week' color='black' label='Agenda' onPress={() =>{
            
            setTabSelected('Agenda');
            const payload= flags;
                  payload.isNotificaciones=false;
                  setFlags(payload);

            navigation.navigate('AgendaScreen'); 
            
            }}></OpcionMenuLateral>
          <OpcionMenuLateral iconName='icomoon-free_hammer2' color='black' label='Parecer' onPress={() =>{
            
            setTabSelected('Parecer');

            const payload= flags;
                  payload.isNotificaciones=false;
                  setFlags(payload);
            navigation.navigate('ParecerScreen'); 
            
            }}></OpcionMenuLateral>
          <OpcionMenuLateral iconName='bi_bar-chart-line-fill' color='black' label='Relatorio' onPress={() =>{
            
            setTabSelected('Relatorio');

            const payload= flags;
                  payload.isNotificaciones=false;
                  setFlags(payload);
            navigation.navigate('RelatorioScreen'); 
            
            }}></OpcionMenuLateral>
          <OpcionMenuLateral iconName='ic_outline-lock' color='black' label='Cambio contraseña' onPress={() =>{
            
            setTabSelected('Cambio contraseña');

            const payload= flags;
                  payload.isNotificaciones=false;
                  setFlags(payload);
            navigation.navigate('ChangePasswordScreen'); 
            
            }}></OpcionMenuLateral>
          <OpcionMenuLateral iconName='ic_round-close' color='black' label='Cerrar sesion' onPress={() =>{
            
            const payload= flags;
                  payload.isNotificaciones=false;
                  setFlags(payload);
            logOut(); 
            navigation.navigate('NavigationLogin'); 
            
            }}></OpcionMenuLateral>
          {/* <OpcionMenuLateral iconName='ic_round-close' color='black' label='notificaciones' onPress={() =>{ logOut(); navigation.navigate('NotificacionesScreen'); }}></OpcionMenuLateral> */}
        </View>

     </DrawerContentScrollView>
  );
}