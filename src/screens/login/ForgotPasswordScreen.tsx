import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { gstyles } from '../../theme/appTheme';

export const ForgotPasswordScreen = () => {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();
    
    return (
        <View style={ { ...gstyles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
            <Text style={{fontSize:60, alignContent:'center',  justifyContent:'center', paddingBottom:250}}>forgot password</Text>
            

            <Button  title='Regresar'  onPress={ () =>  {  navigation.navigate({name:'LoginScreen'} as never);  } }  ></Button>
        </View>
    )
}
