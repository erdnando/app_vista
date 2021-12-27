import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GeneralContext } from '../../state/GeneralProvider';
// import Icon  from 'react-native-vector-icons/Ionicons';
import { styles } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';


interface Props extends StackScreenProps<any, any>{};

//https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html
export const LoginScreen = ({ navigation }:Props) => {
    
    const { top } = useSafeAreaInsets();
    const { setUserName } = useContext( GeneralContext )
    
    return (
        <View style={ { ...styles.globalMargin, marginTop: top+20, flex:1, alignItems:'center'}}>
            <Text style={{fontSize:60, alignContent:'center',  justifyContent:'center', paddingBottom:250}}>vista</Text>
            
            <Text>
                <CustomIcon name='bx_bxs-phone' size={140} color='black' style={{padding:150}} ></CustomIcon>
            </Text>

            <Button  title='Login'  onPress={ () =>  { 
                setUserName('@erdnando');
                navigation.replace('NavigationLateral');   
            }}  
                ></Button>
            <Button  title='Forgot password'  onPress={ () =>  {  
                navigation.navigate({name:'ForgotPasswordScreen'} as never); 
                } }  ></Button>
        </View>
    )
}
