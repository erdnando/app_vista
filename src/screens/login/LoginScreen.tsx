import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonForgotPassword } from '../../components/ButtonForgotPassword';
import { ButtonRounded } from '../../components/ButtonRounded';
import { InputEmail } from '../../components/InputEmail';
import { InputPassword } from '../../components/InputPassword';
import { Spacer } from '../../components/Spacer';
import { useLogin } from '../../hooks/useLogin';
import CustomIcon from '../../theme/CustomIcon';
import { AlertNotif } from '../../components/AlertNotif';
import { GeneralContext } from '../../state/GeneralProvider';

interface Props extends StackScreenProps<any, any>{};

//https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html
export const LoginScreen = ({ navigation }:Props) => {
    
    // const { top } = useSafeAreaInsets();
     const { isAlertLoginVisible ,setIsAlertLoginVisible} = useContext( GeneralContext )
    const {  validarLogin, } = useLogin(); 
    
    return (
        <View style={styles.container}>

           <Spacer height={60} ></Spacer>

            <View><Image source={require('../../assets/vertical-logo.png')} ></Image></View>
           
            <Spacer height={60} ></Spacer>
            
            <View style={styles.formulario}>

                <InputEmail modo='normal' label='E-mail' iconLeft='ic_outline-email' iconRight='ic_round-close'></InputEmail>
                <InputPassword modo='normal' label='Senha' iconLeft='ic_outline-lock' iconRight='ic_baseline-fingerprint' iconSee='ic_outline-visibility' IconHide='ic_outline-visibility-off' ></InputPassword>
                <Spacer height={30} ></Spacer>
                <ButtonRounded label='ACCESAR' 
                        onPress={ async() =>  { 
                           let resp = await validarLogin();
                            if(resp){
                                console.log('login correcto')
                                setIsAlertLoginVisible(false);
                                navigation.replace('NavigationLateral');  
                            }else{
                                //show alert
                                setIsAlertLoginVisible(true);
                                console.log('error al autenticarse');
                            }     
                        }} />

            <View style={{  alignItems:'center',height:40}}>

            <Spacer height={30} ></Spacer>

            {(isAlertLoginVisible) ? (<AlertNotif label='error' color='#B85050' iconName='ic_round-warning' ></AlertNotif>) : <View></View>}

            {/* <Text>alertVisible:{(isAlertLoginVisible )? 'visible':'no visible'}</Text> */}


          </View>
            </View>

            <ButtonForgotPassword label='Forgot password' bottom={120} onPress={ async() =>  { 
                           navigation.navigate({name:'ForgotPasswordScreen'} as never); 
                        }} ></ButtonForgotPassword>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'flex-end',
        top:50
    },
    formulario:{
        flex:1,
    },
    
});

