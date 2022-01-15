import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import { ButtonTextGoTo } from '../../components/login/ButtonTextGoTo';
import { ButtonRounded } from '../../components/login/ButtonRounded';
import { InputEmail } from '../../components/login/InputEmail';
import { InputPassword } from '../../components/login/InputPassword';
import { Spacer } from '../../components/Spacer';
import { useLogin } from '../../hooks/useLogin';
import { AlertNotif } from '../../components/login/AlertNotif';
import { GeneralContext } from '../../state/GeneralProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CodePush from 'react-native-code-push';

interface Props extends StackScreenProps<any, any>{};

//https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html
export const ChangePasswordScreen = ({ navigation }:Props) => {
    
    const { top,left } = useSafeAreaInsets();
    
    const { flags,setFlags,ids,setIds,logOut } = useContext( GeneralContext )
    const {  validarLogin, } = useLogin(); 
    
    useEffect(() => {
        
        navigation.setOptions(
            {
                headerShown:false,
                title:'',
            }
            )
    }, [])
    
    return (
        <View style={{...styles.container, marginTop:top-50, marginHorizontal:left-25}}>
         <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/Background.png')}>
           <Spacer height={100} ></Spacer>

            <View style={styles.logo} ><Image source={require('../../assets/vertical-logo.png')} ></Image></View>
           
            <Spacer height={60} ></Spacer>
            
            <View style={styles.formulario}>

                <InputEmail modo='normal' label='E-mail' iconLeft='ic_outline-email' iconRight='ic_round-close'></InputEmail>
                <InputPassword modo='normal' label='Senha' iconLeft='ic_outline-lock' iconRight='ic_baseline-fingerprint' iconSee='ic_outline-visibility' IconHide='ic_outline-visibility-off' ></InputPassword>
                <Spacer height={40} ></Spacer>

                <View>
                <ButtonRounded  label='ACCESAR' 
                        onPress={ async() =>  { 
                           let resp = await validarLogin();
                            if(resp){
                                console.log('login correcto')
                                const payload= flags;
                                payload.isAlertLoginVisible=false;
                                setFlags(payload);
                                
                                navigation.replace('NavigationLateral');  
                            }else{
                                //show alert
                                const payload= flags;
                                payload.isAlertLoginVisible=true;
                                setFlags(payload);
                                console.log('error al autenticarse');
                            }     
                        }} />
                </View>

            <View style={{  alignItems:'center',height:40}}>

            <Spacer height={30} ></Spacer>

            {(flags.isAlertLoginVisible) ? (<AlertNotif label='error' color='#B85050' iconName='ic_round-warning' ></AlertNotif>) : <View></View>}

          </View>
            </View>

            <ButtonTextGoTo label='Ir para Login' bottom={70} onPress={ async() =>  { 
                        //    navigation.replace({name:'LoginScreen'} as never); 
                        const payload= flags;
                        payload.isNotificaciones=false;
                        payload.verDetalleAgenda=false;
                        //payload.leftMenuAccesible=false;
                        setFlags(payload);
      
                        const payload1 = ids;
                        payload1.idOpinionBusqueda= '';
                        payload1.idOpinionSeleccionado='';
                        setIds(payload1);
                        
                        logOut(); 
                   
                       // navigation.navigate('NavigationLogin'); 
                        CodePush.restartApp();

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
       
    },
    formulario:{
        flex:1,
    },
    background:{
        flex:1, justifyContent:'center',
    },
    logo:{
        justifyContent:'center', alignItems:'center'
    }
});

