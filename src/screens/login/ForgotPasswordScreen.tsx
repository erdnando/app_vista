import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonRounded } from '../../components/login/ButtonRounded';
import { ButtonTextGoTo } from '../../components/login/ButtonTextGoTo';
import { InputEmail } from '../../components/login/InputEmail';
import { Spacer } from '../../components/Spacer';
import { useLogin } from '../../hooks/useLogin';
import CustomIcon from '../../theme/CustomIcon';

export const ForgotPasswordScreen = () => {

    const { top,left } = useSafeAreaInsets();
    const navigation = useNavigation();
    const {  resetContrasena,setPasswordAux,setEmailAux } = useLogin(); 
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    useEffect(() => {
        setPasswordAux('.');
    }, [])

    useEffect(() => {
        navigation.setOptions(
            {
                headerLeft: () => {
                    return   <TouchableOpacity  
                               onPress={() =>{ setPasswordAux('');setEmailAux(''); navigation.goBack();   }}>
                                <Text style={{left:18}}>
                                <CustomIcon name='ic_round-arrow-back' size={30} color='black' ></CustomIcon>
                                </Text>
                            </TouchableOpacity>
                       
                   },
                title:'Reset de senha',
            }
            )
    }, [])
    
    return (
        <View style={{...styles.container ,marginTop:top-50, marginHorizontal:left-25}}>
             <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/Background.png')}>
             
                <ScrollView>
                    <Spacer height={80} ></Spacer>
                    <View style={styles.logo} ><Image source={require('../../assets/vertical-logo.png')} ></Image></View>
                    <Spacer height={50} ></Spacer>
                    
                    <View style={styles.formulario}>
                        <View style={{ alignItems:'center'}}>
                            <Text style={{fontSize:25,fontFamily:'Roboto-Regular', fontWeight:'bold'}}>Esqueceu sua senha?</Text>
                            <Spacer height={20} ></Spacer>
                            <Text style={{fontSize:17, fontFamily:'Roboto-Regular',}}>digite seu e-mail abaixo para receber</Text>
                            <Text style={{fontSize:17,fontFamily:'Roboto-Regular', }}>instruções de como resetar sua senha</Text>
                    </View>

                    <Spacer height={20} ></Spacer>
                    <InputEmail modo='normal' label='E-mail' iconLeft='ic_outline-email' iconRight='ic_round-close'></InputEmail>

                    <Spacer height={40} ></Spacer>

                    <View>
                        <ButtonRounded label='SOLICITAR' 
                                    onPress={ async() =>  { 
                                
                                        let resp = await resetContrasena();
                                        if(resp){
                                            console.log('reseteo correcto')
                                            navigation.navigate({name:'ResetContrasenaScreen'} as never); 
                                    }    
                                    }} />
                        </View>
                    </View>
                    <Spacer height={50} ></Spacer>
                <ButtonTextGoTo label='Voltar para Login' bottom={0} onPress={ async() =>  { 
                            setPasswordAux('');
                            setEmailAux('');
                            navigation.navigate({name:'LoginScreen'} as never); 
                            }} ></ButtonTextGoTo>
                  </ScrollView>
            </ImageBackground>
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
 
    },
    background:{
        flex:1, justifyContent:'center',
    },
    logo:{
        justifyContent:'center', alignItems:'center'
    },
    formulario:{
        flex:1,
       
    },
    
})