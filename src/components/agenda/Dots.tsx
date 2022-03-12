
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
          <View key={key} style={{height: 7,width: 7, borderRadius: 6, backgroundColor: prop.color,marginRight: 2,
            borderColor:'white',borderWidth:0,shadowColor: "#000060", shadowOpacity: 0.7,shadowOffset: {
            height: 1, width: 1,
        } }} />
         );
      })}
     </View>
  )

   
           
}
