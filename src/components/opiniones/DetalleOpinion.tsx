import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';
import { Spacer } from '../Spacer';
import { DetallHeaderOpiniones } from './DetalleHeaderOpiniones';
import { DetalleContentOpinion } from './DetalleContentOpinion';



interface Props{
  tipoUsuario:string,
}
// 1 terciario, 2colaborador
export const DetalleOpinion = ( { tipoUsuario}: Props ) => {


     const { ids } = useContext( GeneralContext )
     const { top } = useSafeAreaInsets();

    
    return (
      <View style={ {  marginTop: top, flex:1, alignItems:'center',}}>
           
           <View style={{height:130,width:'100%', backgroundColor:'#838892',  }}>
            <DetallHeaderOpiniones />
          </View>


          <View style={{flex:1, width:'100%', backgroundColor:'#838892',justifyContent:'center',alignContent:'center',
                        alignItems:'center', paddingTop:15,paddingBottom:20}}>
              
              <View style={{flex:1,width:'92%',justifyContent:'center',  backgroundColor:'red',
                            alignContent:'center',alignItems:'center' }}>

                  <DetalleContentOpinion></DetalleContentOpinion>
                  
                   
              </View>
          </View>
          
         
     
      </View>
    )
}
