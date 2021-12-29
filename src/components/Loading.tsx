import React from 'react';
import { ActivityIndicator, View } from 'react-native';


interface Props{
    color:string
  }

export const Loading = ( {color}:Props ) => {

    return  <View style={{ flex:1, justifyContent:'center',alignContent:'center' }}>
              <ActivityIndicator color={color} size={80}></ActivityIndicator>
          </View>    
}
