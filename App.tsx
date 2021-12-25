import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationLogin } from './src/navigation/NavigationLogin';
// import { NavigationLogin } from './src/navigation/navigationLogin';
// import { NavigationHome } from './src/navigation/NavigationHome';
import { NavigationLateral } from './src/navigation/NavigationLateral';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationLogin></NavigationLogin>
      {/* <NavigationLateral></NavigationLateral> */}
    </NavigationContainer>
  )
}

export default App;
