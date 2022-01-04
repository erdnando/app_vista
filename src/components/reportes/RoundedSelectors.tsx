import React, { useContext } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';


export const RoundedSelectors = () => {

const { setIsSelectorParecer, isSelectorParecer } = useContext( GeneralContext )


    return    <View style={{backgroundColor:'#BCC1CB',width:'90%',left:-3, height:70, paddingBottom:10}}>
                <View style={{ flex:1,flexDirection:'row', alignItems:'center',  justifyContent:'center', alignContent:'center', }}>
                  <TouchableOpacity  
                    style={{width:'50%', borderRadius: 100,borderBottomEndRadius:0,borderTopEndRadius:0,borderColor: isSelectorParecer ? 'transparent' :'grey', borderWidth: isSelectorParecer ? 0: 0.9,
                    backgroundColor: isSelectorParecer ? colores.primary : '#BCC1CB', 
                    height:48, justifyContent:'center',  }} 
                      onPress= {()=>{
                        setIsSelectorParecer(true);
                      }}>
                      <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color:'black'}}>PARECER</Text>
                  </TouchableOpacity>

                  <TouchableOpacity  
                    style={{ width:'50%',borderRadius: 100,borderBottomStartRadius:0,borderTopStartRadius:0, 
                    backgroundColor: isSelectorParecer ? '#BCC1CB' : colores.primary, borderColor:'grey',borderWidth: isSelectorParecer ? 0.9 : 0,
                    height:48, justifyContent:'center',  }} 
                      onPress= {()=>{
                        setIsSelectorParecer(false);
                      }}>
                      <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color:'black'}}>PARTICIPACIONES</Text>
                  </TouchableOpacity>
            </View>      
            </View>

      
}
