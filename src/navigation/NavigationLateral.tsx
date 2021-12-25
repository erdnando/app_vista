import React from 'react';     // <-----don't forget to add react import
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
// import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View , TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { AgendaScreen } from '../screens/home/AgendaScreen';
import { ParecerScreen } from '../screens/home/ParecerScreen';
import { RelatorioScreen } from '../screens/home/RelatorioScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { NavigationHome } from './NavigationHome';
// import { Tabs } from './Tabs';
// import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// const SettingsstackScreen = () =>{
//   return (
//     <Stack.Navigator>
//       <Stack.Screen  name='SettingsScreen' component={SettingsScreen} />
      
//     </Stack.Navigator>
//   )
// }

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
            <Drawer.Navigator screenOptions={{
                                            drawerPosition:'left',
                                            headerShown: false, 
                                            drawerType:(width >=768 ? 'permanent' : 'front')  
                                            }}  
                              drawerContent={ (props) => <MenuInterno { ...props }></MenuInterno> } >
            {/* home */}
                                                           {/* StackNavigator */}
            {/* <Drawer.Screen name="Tabs"  component={ Tabs } />    */}
            <Drawer.Screen name="NavigationHome" component={ NavigationHome } />
            <Drawer.Screen name="HomeScreen"  component={ HomeScreen } />
            <Drawer.Screen name="AgendaScreen"  component={ AgendaScreen } />
            <Drawer.Screen name="ParecerScreen"  component={ ParecerScreen } />
            <Drawer.Screen name="RelatorioScreen"  component={ RelatorioScreen } />
            
                                                            {/* SettingsstackScreen */}
            </Drawer.Navigator>
        );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps ) =>{
  
  return (
     <DrawerContentScrollView>

       {/* Imagen avatar */}
       <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri:'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder-300x300.png' }} >
            
          </Image>
       </View>

        {/* Opciones del menu */}
        <View style={styles.menuContainer}>
  
            <TouchableOpacity onPress={() =>{   
                navigation.navigate('NavigationHome'); 
            }}
            >
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
        </View>

     </DrawerContentScrollView>
  );
}