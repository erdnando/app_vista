
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { ForgotPasswordScreen } from '../screens/login/ForgotPasswordScreen';
import { LoginScreen } from '../screens/login/LoginScreen';
import { ResetContrasenaScreen } from '../screens/login/ResetContrasenaScreen';
import { NavigationHome } from './NavigationHome';
import { NavigationLateral } from './NavigationLateral';


const Stack = createStackNavigator();

export const NavigationLogin = () => {
  return (
    <Stack.Navigator   
    screenOptions={
        {
          cardStyle:{
            backgroundColor:'white'
          },
          headerShown:true,
          headerStyle:{
            elevation:0,
            shadowColor:'transparent'
          }
        }
      }
    >
      <Stack.Screen name="LoginScreen" component={ LoginScreen } />
      
      <Stack.Screen name="ForgotPasswordScreen" component={ ForgotPasswordScreen } />
      <Stack.Screen name="NavigationHome" component={ NavigationHome } />
      <Stack.Screen name="NavigationLateral" component={ NavigationLateral } />
      <Stack.Screen name="ResetContrasenaScreen" component={ ResetContrasenaScreen } />
      
    </Stack.Navigator>
  );
}