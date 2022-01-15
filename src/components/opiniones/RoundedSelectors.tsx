import React, { useContext } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';

interface Props{
  label1:string,
  label2:string,
  onPress1:()=>void;
  onPress2:()=>void;
}

export const RoundedSelectors =  ( { label1, label2,onPress1, onPress2 }: Props ) => {

const { opiniones,setOpiniones } = useContext( GeneralContext )

let borderColorBtn1='';
let borderColorBtn2='';
let borderWidthBtn1=0;
let borderWidthBtn2=0;
let backgoundBtn1='';
let backgoundBtn2='';

if(opiniones.parecer.estatusGO===0){
  borderColorBtn1='#838892';//gris
  borderColorBtn2='#838892';//gris
  borderWidthBtn1=1;
  borderWidthBtn2=1;
  backgoundBtn1='white';
  backgoundBtn2='white';
}

if(opiniones.parecer.estatusGO===1){
  borderColorBtn1=colores.primary;
  borderColorBtn2='#838892';//gris
  borderWidthBtn1=0.9;
  borderWidthBtn2=0.9;
  backgoundBtn1=colores.primary;
  backgoundBtn2='white';
}

if(opiniones.parecer.estatusGO===2){
  borderColorBtn1='#838892';
  borderColorBtn2=colores.primary;
  borderWidthBtn1=0.9;
  borderWidthBtn2=0.9;
  backgoundBtn1='white';
  backgoundBtn2=colores.primary;
}


    return    <View style={{backgroundColor:'transparent',width:'100%', paddingBottom:16, paddingTop:28}}>
                      <View style={{ flex:1,flexDirection:'row', alignItems:'center',  justifyContent:'center', alignContent:'center', }}>
                      
                        <TouchableOpacity  
                          style={{width:'50%', borderRadius: 100,borderBottomEndRadius:0,borderTopEndRadius:0,
                          borderColor: borderColorBtn1, borderWidth: borderWidthBtn1,
                          backgroundColor: backgoundBtn1, 
                          height:48, justifyContent:'flex-end',alignItems:'center'  }} 
                            onPress= {onPress1} >
                              <TextOportunidadIcono icono='ic_outline-check' colorIcono='#454A53' label='' colorValor='#454A53' valor={label1}  size={14} ></TextOportunidadIcono>
                        </TouchableOpacity>

                        <TouchableOpacity  
                          style={{width:'50%', borderRadius: 100,borderBottomStartRadius:0,borderTopStartRadius:0,
                          borderColor: borderColorBtn2, borderWidth: borderWidthBtn2,
                          backgroundColor: backgoundBtn2, 
                          height:48, justifyContent:'flex-end',alignItems:'center'  }} 
                            onPress= {onPress2} >
                              <TextOportunidadIcono icono='ic_round-close' colorIcono='#454A53' label='' colorValor='#454A53' valor={label2}  size={14} ></TextOportunidadIcono>
                        </TouchableOpacity>

                  </View>      
            </View>

      
}
