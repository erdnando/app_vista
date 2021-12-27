import React from 'react';  
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colores, gstyles } from '../theme/appTheme';
import { AgendaScreen } from '../screens/home/AgendaScreen';
import { ParecerScreen } from '../screens/home/ParecerScreen';
import { RelatorioScreen } from '../screens/home/RelatorioScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DrawerScreenProps } from '@react-navigation/drawer';
import CustomIcon from '../theme/CustomIcon';
import { OpcionBottomTab } from '../components/OpcionBottomTab';
import { OpcionHeader } from '../components/OpcionHeader';
import { OpcionMenuLateral } from '../components/OpcionMenuLateral';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();
interface Props extends DrawerScreenProps<any, any>{};


export const NavigationHome = ( { navigation }:Props) => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator  sceneContainerStyle={{ backgroundColor:'white' }}  
        
        screenOptions={({route}) => ({
                tabBarActiveTintColor:colores.primary,
                tabBarInactiveTintColor:'white',
                tabBarStyle:{
                  backgroundColor: colores.bottomBar,
                    borderTopColor: colores.bottomBar,
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
                header:
                  () => {
                    return <View style={{alignSelf:'flex-start', flexDirection:'row',top:top,}}>

                                <OpcionHeader iconName='ic_baseline-menu' color='black' 
                                  onPress={() =>{ 
                                    navigation.toggleDrawer(); 
                                  }} ></OpcionHeader>

                                <View style={{flex:1, left:24 }}>
                                   <Image style={{...gstyles.avatar,height:24*1.35,width:79.89*1.35, top:3}} 
                                   source={require('../assets/horizontal-logo.png')}  >
                                </Image>
                                </View>
                               





                                <View style={{ flexDirection:'row',alignSelf:'flex-end', top:-5   }} >  
                                  <TouchableOpacity onPress={() =>{  navigation.toggleDrawer(); }}>
                                    <Text>
                                        <CustomIcon name='clarity_tasks-solid' size={30} color='black' style={{padding:150}} ></CustomIcon>
                                    </Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity style={{ marginRight:10, marginLeft:16, marginEnd:16 }} onPress={() =>{  navigation.toggleDrawer(); }}>
                                    <Text>
                                        <CustomIcon name='gridicons_user' size={30} color='black' style={{padding:150}} ></CustomIcon>
                                    </Text>
                                  </TouchableOpacity>
                                  </View>


                          </View>
                  }
                ,
 
        })}
      
        >

      <Tab.Screen name="HomeScreen" options={{ title:'' }} component={ HomeScreen } />
      <Tab.Screen name="AgendaScreen" options={{ title:'' }} component={ AgendaScreen } />
      <Tab.Screen name="ParecerScreen" options={{ title:'' }} component={ ParecerScreen } />
      <Tab.Screen name="RelatorioScreen" options={{ title:'' }} component={ RelatorioScreen } />
    </Tab.Navigator>
  );
}


