import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationLogin } from './src/navigation/NavigationLogin';
import { GeneralProvider } from './src/state/GeneralProvider';

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <NavigationLogin></NavigationLogin>
      </NavigationContainer>
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

export default App;
