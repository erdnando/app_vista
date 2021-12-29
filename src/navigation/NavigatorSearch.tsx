import React from 'react';  
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { ExigenciaLegalScreen } from '../screens/search/ExigenciaLegalScreen';
import { OportunidadScreen } from '../screens/search/OportunidadScreen';
import { ParecerScreen } from '../screens/search/ParecerScreen';
import { ResultadoScreen } from '../screens/search/ResultadoScreen';
import { PendienteScreen } from '../screens/search/PendienteScreen';
import { PlanAccionScreen } from '../screens/search/PlanAccionScreen';

//LogBox.ignoreLogs(['Sending']);
const Tab = createMaterialTopTabNavigator();

export const Navigatorsearch = () => {

    const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator style={{ paddingTop:top-35 }} 
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
            width:400,
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
        
      <Tab.Screen name="OportunidadScreen" options={ { tabBarLabel:'OPORTUNIDADE'} } component={ OportunidadScreen } />
      <Tab.Screen name="ParecerScreen" options={ { tabBarLabel:'PARECER'} } component={ ParecerScreen } />
      <Tab.Screen name="ExigenciaLegalScreen" options={ { tabBarLabel:'DEMANDA JURIDICA'} } component={ ExigenciaLegalScreen } />
      <Tab.Screen name="ResultadoScreen" options={ { tabBarLabel:'RESULTADO'} } component={ ResultadoScreen } />
      <Tab.Screen name="PendienteScreen" options={ { tabBarLabel:'PENDENCIAS'} } component={ PendienteScreen } />
      <Tab.Screen name="PlanAccionScreen" options={ { tabBarLabel:'PLAN DE ACCION'} } component={ PlanAccionScreen } />
    </Tab.Navigator>
  );
}