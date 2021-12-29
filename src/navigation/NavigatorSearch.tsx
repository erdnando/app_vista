import React from 'react';  
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { ExigenciaLegalScreen } from '../screens/search/ExigenciaLegalScreen';
import { OportunidadScreen } from '../screens/search/OportunidadScreen';
import { ParecerScreen } from '../screens/search/ParecerScreen';
import { ResultadoScreen } from '../screens/search/ResultadoScreen';
import { PendienteScreen } from '../screens/search/PendienteScreen';
import { PlanAccionScreen } from '../screens/search/PlanAccionScreen';
import CustomIcon from '../theme/CustomIcon';


//LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();



export const Navigatorsearch = () => {

    const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator style={{ paddingTop:top }} 
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    screenOptions={({route}) => ({
        tabBarStyle:{
            backgroundColor: 'white',
            borderTopColor: colores.primary,
            borderBottomWidth:0,
            borderTopWidth: 0,
            elevation:0,
            shadowColor: 'transparent'
        },
        tabBarActiveTintColor:'orange',
        tabBarInactiveTintColor:'black',
        tabBarPressColor:colores.primary,
        tabBarShowIcon:true,
        tabBarIndicatorStyle:{
            backgroundColor:colores.primary
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