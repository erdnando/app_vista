import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, NativeModules, Platform } from 'react-native'
import { ButtonTextGoTo } from '../../components/login/ButtonTextGoTo';
import { ButtonRounded } from '../../components/login/ButtonRounded';
import { InputPassword } from '../../components/login/InputPassword';
import { Spacer } from '../../components/Spacer';
import { AlertNotif } from '../../components/login/AlertNotif';
import { GeneralContext } from '../../state/GeneralProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//import CodePush from 'react-native-code-push';
 //import RNRestart from 'react-native-restart';
//import {Restart} from 'fiction-expo-restart';

interface Props extends StackScreenProps<any, any>{};

//https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html
export const ChangePasswordScreen = ({ navigation }:Props) => {
    
    const { top,left } = useSafeAreaInsets();
    
    const { flags,setFlags,ids,setIds,logOut,usuario } = useContext( GeneralContext )
    // const {  validarLogin, } = useLogin(); 
    
    useEffect(() => {
        
        navigation.setOptions(
            {
                headerShown:false,
                title:'',
            }
            )
    }, [])
    
    if(flags.isPasswordReseted){
        return (
            <View style={{...styles.container, marginTop:top-50, }}>
            <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/Background.png')}>

            <View style={{alignItems:'center',height:40,top:Platform.OS==='android' ? top+80: top+20}}>
                    <Text style={{fontFamily:'Roboto-Bold',fontSize:18}}>Reset de shena</Text>
                </View>
                    
                <Spacer height={150} ></Spacer>

                <View style={styles.logo} ><Image source={require('../../assets/vertical-logo.png')} ></Image></View>
            
                <Spacer height={100} ></Spacer>
                <View style={{alignItems:'center',height:40,}}>
                    <Text style={{fontFamily:'Roboto-Bold',fontSize:18}}>Senha resetada com sucesso!</Text>
                </View>

                <Spacer height={10} ></Spacer>
                <View style={{alignItems:'center',height:40,justifyContent:'center',alignContent:'center',width:'100%',}}>
                    <Text style={{width:'68%', fontFamily:'Roboto-Regular',fontSize:14,textAlign:'center'}}>Agore voce ja poda fazer login com a sua nova senha!</Text>
                </View>

                 <Spacer height={30} ></Spacer>

                <View style={styles.formulario}>

                   
                    <Spacer height={40} ></Spacer>

                    <View>
                        <ButtonRounded  label='FAZER LOGIN SENHA' 
                                onPress={ async() =>  { 

                                    const payload= flags;
                                    payload.isPasswordReseted=false;
                                    setFlags(payload);

                                    //TODO reload app
                                    //CodePush.restartApp();
                                    //RNRestart.Restart();                          
                                }} />
                    </View>
                

                    <View style={{  alignItems:'center',height:40}}>

                        <Spacer height={30} ></Spacer>

                        {(flags.isAlertLoginVisible) ? (<AlertNotif label='error' color='#B85050' iconName='ic_round-warning' ></AlertNotif>) : <View></View>}

                    </View>

                </View>

                
            </ImageBackground>
            </View>
        )
    }else{
            return (
                <View style={{flex:1,
                    flexDirection:'column',
                    alignItems:'center',
                    alignContent:'center',
                    justifyContent:'center',
                   width:'100%', marginTop:top,}}>
                <ImageBackground style={styles.background} resizeMode='cover' source={require('../../assets/Background.png')}>

                <View style={{alignItems:'center',height:40,top:Platform.OS==='android' ? top+30: top-20}}>
                    <Text style={{fontFamily:'Roboto-Bold',fontSize:18}}>Reset de shena</Text>
                </View>
                    
                <Spacer height={100} ></Spacer>

                    {/* <View style={styles.logo} ><Image source={require('../../assets/vertical-logo.png')} ></Image></View> */}
                
                    <Spacer height={120} ></Spacer>
                    <View style={{alignItems:'center',height:40,}}>
                    <Text style={{fontFamily:'Roboto-Bold',fontSize:18}}>Insira sua nova senha</Text>
                </View>

                <Spacer height={30} ></Spacer>

                    <View style={{flex:1,justifyContent:'flex-start',alignContent:'center',alignItems:'center'}}>

                        <InputPassword modo='normal' width='80%' placeHolder='Nueva contraseña' campo={usuario.nuevoPassword1} label='Senha' iconLeft='ic_outline-lock' iconRight='ic_baseline-fingerprint' iconSee='ic_outline-visibility' IconHide='ic_outline-visibility-off' ></InputPassword>
                        <InputPassword modo='normal' width='80%' placeHolder='Confirmar contraseña' campo={usuario.nuevoPassword2} label='Senha' iconLeft='ic_outline-lock' iconRight='ic_baseline-fingerprint' iconSee='ic_outline-visibility' IconHide='ic_outline-visibility-off' ></InputPassword>
                        <Spacer height={20} ></Spacer>

                        <View style={{flex:0,width:'100%',height:50,justifyContent:'center',alignContent:'center'}}>
                            <ButtonRounded  label='RESETAR SENHA' 
                                    onPress={ async() =>  { 
                                        const payload= flags;
                                        payload.isPasswordReseted=true;
                                        setFlags(payload);
                                
                                    }} />
                        </View>
                    

                        <View style={{  alignItems:'center',height:40}}>

                        <Spacer height={30} ></Spacer>

                        {(flags.isAlertLoginVisible) ? (<AlertNotif label='error' color='#B85050' iconName='ic_round-warning' ></AlertNotif>) : <View></View>}

                        </View>

                    </View>

                    <View style={{flex:0,width:'100%',height:100,}}>
                               <ButtonTextGoTo label='Ir para Login' bottom={0} onPress={ async() =>  { 
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
                                //CodePush.restartApp();
                                //RNRestart.Restart();
                               //Restart();

                                }} ></ButtonTextGoTo>
                    </View>
                </ImageBackground>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
       width:'100%'
    },
    formulario:{
        flex:1,
    },
    background:{
        flex:1, justifyContent:'center', 
        width:'100%'
    },
    logo:{
        justifyContent:'center', alignItems:'center'
    }
});

