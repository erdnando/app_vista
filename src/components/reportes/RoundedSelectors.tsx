import React, { useContext } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';


export const RoundedSelectors = () => {

const { relatorio,setRelatorio } = useContext( GeneralContext )


    return    <View style={{backgroundColor:'#BCC1CB',width:'90%',left:-3, height:70, paddingBottom:10}}>
                <View style={{ flex:1,flexDirection:'row', alignItems:'center',  justifyContent:'center', alignContent:'center', }}>
                 
                  <TouchableOpacity  
                    style={{width:'50%', borderRadius: 100,borderBottomEndRadius:0,borderTopEndRadius:0,borderColor: relatorio.isSelectorParecer ? 'transparent' :'grey', borderWidth: relatorio.isSelectorParecer ? 0: 0.9,
                    backgroundColor: relatorio.isSelectorParecer ? colores.primary : '#BCC1CB', 
                    height:48, justifyContent:'center',  }} 
                      onPress= {()=>{
                        // setIsSelectorParecer(true);
                        const payload= relatorio;
                        payload.isSelectorParecer=true;
                        setRelatorio(payload);
                      }}>
                      <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color:'black'}}>PARECER</Text>
                  </TouchableOpacity>

                  <TouchableOpacity  
                    style={{ width:'50%',borderRadius: 100,borderBottomStartRadius:0,borderTopStartRadius:0, 
                    backgroundColor: relatorio.isSelectorParecer ? '#BCC1CB' : colores.primary, borderColor:'grey',borderWidth: relatorio.isSelectorParecer ? 0.9 : 0,
                    height:48, justifyContent:'center',  }} 
                      onPress= {()=>{
                        //setIsSelectorParecer(false);
                        const payload= relatorio;
                        payload.isSelectorParecer=false;
                        setRelatorio(payload);
                      }}>
                      <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color:'black'}}>PARTICIPACIONES</Text>
                  </TouchableOpacity>

            </View>      
            </View>

      
}
