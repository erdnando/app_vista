import React, { useContext } from 'react';
import { Text, View } from 'react-native';



interface Props{
  label:string,
}

export const WithoutItems = ( { label,}: Props ) => {

 
   
    return (
      <View style={ {flex:1,height:115, flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center', 
            backgroundColor: '#EDF0F5', borderRadius:7,padding:5,elevation:6,
            shadowColor: "black", shadowOpacity: 0.3,shadowOffset: {
            height: 4, width: 1
        }}}>
      <Text style={{fontSize:22}}>{label}</Text>
      </View>
    )
}
