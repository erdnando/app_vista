import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme';


interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ({ navigation }:Props) => {
    
    const { top } = useSafeAreaInsets();
    //const navigation = useNavigation();
    
    return (
        <View style={ { ...styles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
            <Text style={{fontSize:60, alignContent:'center',  justifyContent:'center', paddingBottom:250}}>vista</Text>
            

            <Button  title='Login'  onPress={ () =>  { 

                navigation.replace('NavigationLateral'); 
                // return (
                //     <NavigationContainer>
                //       <NavigationLogin></NavigationLogin>
                //     </NavigationContainer>
                //   )
            
            }}  
                ></Button>
            <Button  title='Forgot password'  onPress={ () =>  {  
                navigation.navigate({name:'ForgotPasswordScreen'} as never); 
                } }  ></Button>
        </View>
    )
}
