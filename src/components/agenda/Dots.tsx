
import React, { useContext } from 'react';
import { View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';


interface Props{
  arrDots:string[];
  }

export const Dots = ({ arrDots}:Props ) => {

  const { agenda,setAgenda } = useContext( GeneralContext )



  return (
    <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:0,left:2 }}>
       {arrDots.map((prop, key) => {
         return (
          <View key={key} style={{height: 6,width: 6, borderRadius: 6, backgroundColor: prop.color,marginRight: 2, }} />
         );
      })}
     </View>
  )

   
           
}
