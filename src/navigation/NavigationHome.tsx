import React, { useEffect } from 'react';  
import { Button, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
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
import { OpcionMenuLateral } from '../components/login/OpcionMenuLateral';
import { NavigationContainer } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();
interface Props extends DrawerScreenProps<any, any>{};


export const NavigationHome = ( { navigation }:Props) => {

  const { top } = useSafeAreaInsets();


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

                                <OpcionHeader iconName='ic_baseline-menu' color={colores.primary} 
                                  onPress={() =>{ 
                                    navigation.toggleDrawer(); 
                                  }} ></OpcionHeader>

                                <View style={{flex:1, left:24,top:15 }}>
                                   <Image style={{...gstyles.avatar,height:24*1.15,width:79.89*1.15, top:3}} 
                                   source={require('../assets/horizontal-logo.png')}  >
                                </Image>
                                </View>
                               





                                <View style={{ flexDirection:'row',alignSelf:'flex-end', top:-20   }} >  
                                  <TouchableOpacity onPress={() =>{  navigation.toggleDrawer(); }}>
                                    <Text>
                                        <CustomIcon name='clarity_tasks-solid' size={30} color='white' style={{padding:150}} ></CustomIcon>
                                    </Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity style={{ marginRight:10, marginLeft:16, marginEnd:16 }} onPress={() =>{  navigation.toggleDrawer(); }}>
                                    <Text>
                                        <CustomIcon name='gridicons_user' size={30} color='white' style={{padding:150}} ></CustomIcon>
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


