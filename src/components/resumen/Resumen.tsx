import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';
import { Loading } from '../Loading';
import { Spacer } from '../Spacer';


interface Props{
  label:string,
  icono:string,
  colorIcono:string,
  metrica:string,
  loading?:boolean
}

export const Resumen = ( { colorIcono,icono,label,metrica,loading=false }: Props ) => {

    return (
      <View style={{flex:1, height:100, justifyContent:'center',alignItems:'center',marginTop:10}}>
                                        
          <View style={{ backgroundColor:'#EDF0F5', borderWidth:0, borderRadius:50,margin:6, height:62, width:62, 
                         justifyContent:'center', alignContent:'center', alignItems:'center' }}>
              <Text > 
                 <CustomIcon name={icono} size={34} color={colorIcono} ></CustomIcon>
              </Text>
          </View>

          
       {loading==false && <Text style={{fontFamily:'Roboto-Bold', fontSize:17, margin:0,alignItems:'center',justifyContent:'center',alignContent:'center',}}>{metrica}</Text>}
       {loading && <Loading loadingSize={25} color='orange' backgroundColor='white' imageSize={0}></Loading>}
       {/* {loading && <Spacer height={10}></Spacer>} */}
        <Text style={{fontFamily:'Roboto-Regular',color:'#838892', fontSize:15, margin:3,textAlign:'center', alignItems:'center',justifyContent:'center',alignContent:'center', }}>{label}</Text>
 
        
    </View>
    )
}
