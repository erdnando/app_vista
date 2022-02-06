import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationLogin } from './src/navigation/NavigationLogin';
import { GeneralProvider } from './src/state/GeneralProvider';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { AlertOk } from './src/components/AlertOk';
import { AlertFail } from './src/components/AlertFail';

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



const toastConfig = {
  ko: ({ props }) => (
    <AlertFail mensaje={props.mensaje}></AlertFail>
  ),
  ok: ({ props }) => (
    <AlertOk mensaje={props.mensaje}></AlertOk>
  )
};

export default App;
