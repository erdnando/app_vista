import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationLogin } from './src/navigation/NavigationLogin';
import { GeneralProvider } from './src/state/GeneralProvider';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { AlertOk } from './src/components/AlertOk';
import { AlertFail } from './src/components/AlertFail';
import { useNotificaciones } from './src/hooks/useNotificaciones';

const App = () => {

 

  return (
    <AppState>
      <NavigationContainer>
        <NavigationLogin></NavigationLogin>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </AppState>
  )
}


const AppState = ({ children }: any) =>{
  return (
    <GeneralProvider>
        { children }
    </GeneralProvider>
  )
}


//https://github.com/calintamas/react-native-toast-message/
const toastConfig = {
  ko: ({ props }) => (
    <AlertFail mensaje={props.mensaje}></AlertFail>
  ),
  ok: ({ props }) => (
    <AlertOk mensaje={props.mensaje}></AlertOk>
  )
};






export default App;
