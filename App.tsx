import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationLogin } from './src/navigation/NavigationLogin';
import { GeneralContext, GeneralProvider } from './src/state/GeneralProvider';
import { ModalSearchResultados } from './src/components/search/ModalSearchResultados';

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
