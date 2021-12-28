import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ButtonTextGoTo } from '../../components/ButtonTextGoTo';
import { Spacer } from '../../components/Spacer';
import { useLogin } from '../../hooks/useLogin';
import CustomIcon from '../../theme/CustomIcon';

export const ResetContrasenaScreen = () => {

    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();
    const {  setPasswordAux,setEmailAux } = useLogin(); 

    useEffect(() => {
        setPasswordAux('.');
    }, [])

    useEffect(() => {
        navigation.setOptions(
            {
                headerLeft: () => {
                    return   <TouchableOpacity onPress={() =>{  navigation.goBack();  }}>
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
             <Spacer height={90} ></Spacer>
            
            <View style={styles.formulario}>
               <Text style={{fontSize:25, fontWeight:'bold'}}>Verifique a sua caixa de e-mail</Text>
               <Spacer height={20} ></Spacer>
               <Text style={{fontSize:17, }}>Um email foi enviado com instruções para</Text>
               <Text style={{fontSize:17, }}>fazero seu reset de senha. Por favor,</Text>
               <Text style={{fontSize:17, }}>verifique a sua caixa de e-mail</Text>

               <Spacer height={20} ></Spacer>
    
         
            </View>
            
           

            <ButtonTextGoTo label='Nao recebeu o e-mail?' bottom={120} onPress={ async() =>  { 
                          
                           navigation.navigate({name:'ForgotPasswordScreen'} as never); 
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