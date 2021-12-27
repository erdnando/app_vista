import React from 'react';
import { View } from 'react-native';


interface Props{
    height:number
  }

export const Spacer = ( {height}:Props ) => {

    return  <View style={{height: height}}></View>
}
