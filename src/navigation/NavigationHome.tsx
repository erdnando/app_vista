import React from 'react';  
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colores } from '../theme/appTheme';
import { AgendaScreen } from '../screens/home/AgendaScreen';
import { ParecerScreen } from '../screens/home/ParecerScreen';
import { RelatorioScreen } from '../screens/home/RelatorioScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DrawerScreenProps } from '@react-navigation/drawer';
import CustomIcon from '../theme/CustomIcon';
import { OpcionBottomTab } from '../components/OpcionBottomTab';
import { OpcionHeader } from '../components/OpcionHeader';


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
                    return <OpcionBottomTab routeName={route.name} color={color} ></OpcionBottomTab>
   
                },
                headerTitle:'VISTA APP',
                headerLeft: () => {

                  // return   <TouchableOpacity onPress={() =>{  navigation.toggleDrawer(); }}>
                  //             <Text style={{fontSize:17, marginLeft:15}}>
                  //                <CustomIcon name='ic_baseline-menu' size={30} color='black' style={{padding:150}} ></CustomIcon>
                  //             </Text>
                  //         </TouchableOpacity>
                  return <OpcionHeader iconName='ic_baseline-menu' color='black' 
                  onPress={() =>{ 
                    console.log('click..');
                    navigation.toggleDrawer(); 
                  }} ></OpcionHeader>
                  },
                headerRight: () =>{
                    return <View style={{ flexDirection:'row'  }} >  
                            <TouchableOpacity onPress={() =>{  navigation.toggleDrawer(); }}>
                              <Text>
                                  <CustomIcon name='clarity_tasks-solid' size={30} color='black' style={{padding:150}} ></CustomIcon>
                              </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight:10, marginLeft:10 }} onPress={() =>{  navigation.toggleDrawer(); }}>
                              <Text>
                                  <CustomIcon name='gridicons_user' size={30} color='black' style={{padding:150}} ></CustomIcon>
                              </Text>
                            </TouchableOpacity>
                            </View>
                }
        })}
        >

      <Tab.Screen name="HomeScreen" options={{ title:'' }} component={ HomeScreen } />
      <Tab.Screen name="AgendaScreen" options={{ title:'' }} component={ AgendaScreen } />
      <Tab.Screen name="ParecerScreen" options={{ title:'' }} component={ ParecerScreen } />
      <Tab.Screen name="RelatorioScreen" options={{ title:'' }} component={ RelatorioScreen } />
    </Tab.Navigator>
  );
}


