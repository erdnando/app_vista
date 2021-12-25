import React, { useEffect } from 'react';  
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colores } from '../theme/appTheme';
import { AgendaScreen } from '../screens/home/AgendaScreen';
import { ParecerScreen } from '../screens/home/ParecerScreen';
import { RelatorioScreen } from '../screens/home/RelatorioScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DrawerScreenProps } from '@react-navigation/drawer';


const Tab = createBottomTabNavigator();
interface Props extends DrawerScreenProps<any, any>{};

export const NavigationHome = ( { navigation }:Props) => {

  return (

    <Tab.Navigator  sceneContainerStyle={{ backgroundColor:'white' }}  
        screenOptions={({route}) => ({
                tabBarActiveTintColor:'orange',
                tabBarInactiveTintColor:'white',
                tabBarStyle:{
                  backgroundColor: colores.primary,
                    borderTopColor: colores.primary,
                    borderTopWidth:1,
                    borderBottomWidth:1,
                    elevation:0,
                },
                tabBarLabelStyle:{
                fontSize:13,
                
                },
                headerShown:true,
                tabBarIcon: ({color, focused, size }) =>{

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1screen':
                            iconName= 'receipt-outline';
                            break;
                        case 'Tab2screen':
                            iconName= 'build-outline';
                            break;
                        case 'StackNavigator':
                             iconName= 'options-outline';
                            break;
                            case 'TopTabNavigator':
                                iconName= 'rocket-outline';
                               break;
                    
                        default:
                            break;
                    }
                    //console.log(route.name);
                    return <Text > opcion
                       {/* <Icon name={iconName} size={25} color={color} /> */}
                      </Text>
                },
                headerTitle:'VISTA APP',
                headerLeft: () => {

                  return   <TouchableOpacity onPress={() =>{  navigation.toggleDrawer(); }}>
                              <Text style={{fontSize:17, marginLeft:15}}>
                                MENU
                                {/* <Icon name="reorder-four-outline" size={30} color={colores.primary} /> */}
                              </Text>
                          </TouchableOpacity>
                  },
                // headerRight: () =>{
                //     return  <TouchableOpacity onPress={() =>{  navigation.toggleDrawer(); }}>
                //             <Text>
                //             otro    
                //             {/* <Icon name="settings-outline" size={30} color={colores.primary} /> */}
                //             </Text>
                //         </TouchableOpacity>
                // }
        })}
        >

      <Tab.Screen name="HomeScreen" options={{ title:'home' }} component={ HomeScreen } />
      <Tab.Screen name="AgendaScreen" options={{ title:'Agenda' }} component={ AgendaScreen } />
      <Tab.Screen name="ParecerScreen" options={{ title:'Parecer' }} component={ ParecerScreen } />
      <Tab.Screen name="RelatorioScreen" options={{ title:'Relatorio' }} component={ RelatorioScreen } />
    </Tab.Navigator>
  );
}


