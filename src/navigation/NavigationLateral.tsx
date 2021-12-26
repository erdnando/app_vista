import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View , TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { AgendaScreen } from '../screens/home/AgendaScreen';
import { ParecerScreen } from '../screens/home/ParecerScreen';
import { RelatorioScreen } from '../screens/home/RelatorioScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { NavigationHome } from './NavigationHome';
// import Icon from 'react-native-vector-icons/Ionicons';
import { ChangePasswordScreen } from '../screens/home/ChangePasswordScreen';

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



export const NavigationLateral = () => {

    const { width } = useWindowDimensions();

  return (
            <Drawer.Navigator 
              screenOptions={{
                              drawerPosition:'left',
                              headerShown: false, 
                              drawerType:(width >=768 ? 'permanent' : 'front')  
                              }}  
              drawerContent={ (props) => <MenuInterno { ...props }></MenuInterno> } >
              <Drawer.Screen name="NavigationHome" component={ NavigationHome } initialParams={{screen:'HomeScreen'}}/>              
              {/* <Drawer.Screen name="HomeScreen"  component={ HomeScreen } /> */}
              <Drawer.Screen name="NavigationHomeagenda" component={ NavigationHome } initialParams={{screen:'AgendaScreen'}}/>
              <Drawer.Screen name="NavigationHomeParecer" component={ NavigationHome } initialParams={{screen:'ParecerScreen'}}/>
              <Drawer.Screen name="NavigationHomeRelatorio" component={ NavigationHome } initialParams={{screen:'RelatorioScreen'}}/>
              <Drawer.Screen name="ChangePasswordScreen"  component={ ChangePasswordScreen } />
            </Drawer.Navigator>
        );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps ) =>{
  
  return (
     <DrawerContentScrollView>

       {/* Imagen avatar */}
       <View style={styles.avatarContainer}>
          <Image style={styles.avatar} 
            source={{ uri:'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder-300x300.png' }} >
          </Image>
       </View>

        {/* Opciones del menu */}
        <View style={styles.menuContainer}>

            <TouchableOpacity onPress={() =>{ navigation.navigate('NavigationHome');  }} >
              <View style={{flexDirection:'row'}}>
                <Text>
                    {/* <Icon name="analytics-outline" size={30} color={colores.primary} /> */}
                    icono
                </Text>
                <Text style={{...styles.menuTexto, paddingLeft:8}}>Home</Text>
                </View>
            </TouchableOpacity>



           <TouchableOpacity style={styles.menuBoton} onPress={() => { 
             navigation.navigate('AgendaScreen');  
             }}>
             <View style={{flexDirection:'row'}}>
                <Text>
                    {/* <Icon name="build-outline" size={30} color={colores.primary} />    */}
                    icono
                </Text>
                <Text style={{...styles.menuTexto, paddingLeft:8}}>Agenda</Text>
                </View>
           </TouchableOpacity>


           <TouchableOpacity style={styles.menuBoton} onPress={() => { 
             navigation.navigate('ParecerScreen');  
             }}>
             <View style={{flexDirection:'row'}}>
                <Text>
                    {/* <Icon name="build-outline" size={30} color={colores.primary} />    */}
                    icono
                </Text>
                <Text style={{...styles.menuTexto, paddingLeft:8}}>Parecer</Text>
                </View>
           </TouchableOpacity>



           <TouchableOpacity style={styles.menuBoton} onPress={() => { 
             navigation.navigate('RelatorioScreen');  
             }}>
             <View style={{flexDirection:'row'}}>
                <Text>
                    {/* <Icon name="build-outline" size={30} color={colores.primary} />    */}
                    icono
                </Text>
                <Text style={{...styles.menuTexto, paddingLeft:8}}>Relatorio</Text>
                </View>
           </TouchableOpacity>

           <TouchableOpacity style={styles.menuBoton} onPress={() => { 
             navigation.navigate('ChangePasswordScreen');  
             }}>
             <View style={{flexDirection:'row'}}>
                <Text>
                    {/* <Icon name="build-outline" size={30} color={colores.primary} />    */}
                    icono
                </Text>
                <Text style={{...styles.menuTexto, paddingLeft:8}}>Cambio contraseña</Text>
                </View>
           </TouchableOpacity>



        </View>

     </DrawerContentScrollView>
  );
}