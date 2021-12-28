import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonRounded } from '../../components/ButtonRounded';
import { ButtonTextGoTo } from '../../components/ButtonTextGoTo';
import { InputEmail } from '../../components/InputEmail';
import { Spacer } from '../../components/Spacer';
import { useLogin } from '../../hooks/useLogin';
import { gstyles } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';

export const ForgotPasswordScreen = () => {

    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();
    const {  resetContrasena,setPasswordAux,setEmailAux } = useLogin(); 

    useEffect(() => {
        setPasswordAux('.');
    }, [])

    useEffect(() => {
        navigation.setOptions(
            {
                headerLeft: () => {
                    return   <TouchableOpacity onPress={() =>{ setPasswordAux('');setEmailAux(''); navigation.goBack();   }}>
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
        <View style={{...styles.container, marginTop:top-130}}>
             <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/Background.png')}>

             <Spacer height={120} ></Spacer>
             <View style={styles.logo} ><Image source={require('../../assets/vertical-logo.png')} ></Image></View>
             <Spacer height={60} ></Spacer>
            
            <View style={styles.formulario}>
               <Text style={{fontSize:25, fontWeight:'bold'}}>Esqueceu sua senha?</Text>
               <Spacer height={20} ></Spacer>
               <Text style={{fontSize:17, }}>digite seu e-mail abaixo para receber</Text>
               <Text style={{fontSize:17, }}>instruções de como resetar sua senha</Text>

               <Spacer height={20} ></Spacer>
               <InputEmail modo='normal' label='E-mail' iconLeft='ic_outline-email' iconRight='ic_round-close'></InputEmail>

               <Spacer height={14} ></Spacer>
               <ButtonRounded label='SOLICITAR' 
                        onPress={ async() =>  { 
                       
                            let resp = await resetContrasena();
                            if(resp){
                                console.log('reseteo correcto')
                                navigation.navigate({name:'ResetContrasenaScreen'} as never); 
                           }    
                        }} />
            </View>
            
           

            <ButtonTextGoTo label='Voltar para Login' bottom={120} onPress={ async() =>  { 
                           setPasswordAux('');
                           setEmailAux('');
                           navigation.navigate({name:'LoginScreen'} as never); 
                        }} ></ButtonTextGoTo>
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
        top:50
    },
    background:{
        flex:1, justifyContent:'center',
    },
    logo:{
        justifyContent:'center', alignItems:'center'
    },
    formulario:{
        flex:1,
        alignItems:'center'
    },
    
})