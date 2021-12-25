import React from 'react';  
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { AgendaScreen } from '../screens/home/AgendaScreen';
import { ParecerScreen } from '../screens/home/ParecerScreen';
import { RelatorioScreen } from '../screens/home/RelatorioScreen';
import { LoginScreen } from '../screens/login/LoginScreen';
import { HomeScreen } from '../screens/home/HomeScreen';


const Tab = createBottomTabNavigator();

export const NavigationHome = () => {
  return (
    <Tab.Navigator  sceneContainerStyle={{
          backgroundColor:'white',
    }}  

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
                }
        })}
        >

      {/* <Tab.Screen name="Tab1screen" options={{ title:'Tab1', tabBarIcon : (props) =>  <Text style={{color:props.color}}>T1</Text> }} component={ Tab1Screen } /> */}
      <Tab.Screen name="HomeScreen" options={{ title:'home' }} component={ HomeScreen } />
      <Tab.Screen name="AgendaScreen" options={{ title:'Agenda' }} component={ AgendaScreen } />
      <Tab.Screen name="ParecerScreen" options={{ title:'Parecer' }} component={ ParecerScreen } />
      <Tab.Screen name="RelatorioScreen" options={{ title:'Relatorio' }} component={ RelatorioScreen } />
      {/* <Tab.Screen name="TopTabNavigator" options={{ title:'TopNavigator' }} component={ TopTabNavigator } /> */}
      {/* <Tab.Screen name="StackNavigator" options={{title:'stack'}} component={ StackNavigator } /> */}
    </Tab.Navigator>
  );
}


