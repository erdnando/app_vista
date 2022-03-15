import React from 'react';  
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { DemandaJuridicaAgenda } from '../screens/agenda/DemandaJuridicaAgenda';
import { DocumentosAgenda } from '../screens/agenda/DocumentosAgenda';
import { ResultadoAgenda } from '../screens/agenda/ResultadoAgenda';
import { PendienteAgenda } from '../screens/agenda/PendienteAgenda';
import { PlanAccionAgenda } from '../screens/agenda/PlanAccionAgenda';
import { ParecerAgenda } from '../screens/agenda/ParecerAgenda';
import { ResumoAgenda } from '../screens/agenda/ResumoAgenda';

//LogBox.ignoreLogs(['Sending']);
const Tab = createMaterialTopTabNavigator();

export const NavigatorAgenda = () => {

    const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator  style={{ paddingTop:top-35 }} 
    
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    
    screenOptions={({route}) => ({
      
        tabBarStyle:{ 
            backgroundColor: 'white',
            borderBottomWidth:3,
            borderColor:'#D6DBDF',
            elevation:2,
           // shadowColor: 'red',
            width:'100%',
        },
        tabBarScrollEnabled:true,
        tabBarItemStyle:{
          width:170, //width single tab
         },
        tabBarLabelStyle:{
          fontWeight:'bold',
          fontFamily:'Roboto-Regular',
          fontSize:15
        },
        tabBarInactiveTintColor:'grey', //label color
        tabBarPressColor:colores.primary,
        tabBarIndicatorStyle:{
            borderBottomWidth:4,
            borderBottomColor:colores.primary,
        },
        tabBarActiveTintColor:colores.primary,
        tabBarIndicatorContainerStyle:{
          borderBottomWidth:4,
          borderBottomColor:'#E5E8E8',
        },
        
    })}
    >
        
      <Tab.Screen name="ResumoAgenda" options={ { tabBarLabel:'RESUMO' , swipeEnabled:true} } component={ ResumoAgenda } />
      <Tab.Screen name="DocumentosAgenda" options={ { tabBarLabel:'DOCUMENTOS' , swipeEnabled:true,} } component={ DocumentosAgenda }  />
      <Tab.Screen name="ParecerAgenda" options={ { tabBarLabel:'PARECER' , swipeEnabled:true,} } component={ ParecerAgenda }  />
      <Tab.Screen name="DemandaJuridicaAgenda" options={ { tabBarLabel:'DEMANDA JURIDICA', swipeEnabled:true,} } component={ DemandaJuridicaAgenda } />
      <Tab.Screen name="ResultadoAgenda" options={ { tabBarLabel:'RESULTADO', swipeEnabled:true,} } component={ ResultadoAgenda } />
      <Tab.Screen name="PendienteAgenda" options={ { tabBarLabel:'PENDENCIAS', swipeEnabled:true,} } component={ PendienteAgenda } />
      <Tab.Screen name="PlanAccionAgenda" options={ { tabBarLabel:'PLAN DE ACCION', swipeEnabled:true,} } component={ PlanAccionAgenda } />
    </Tab.Navigator>
  );
}