import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { gstyles } from '../theme/appTheme';


interface Props{
    color:string,
    backgroundColor?:string,
    imageSize?:number
  }

export const Loading = ( {color,backgroundColor='#EDF0F5',imageSize=80}:Props ) => {

    return  <View style={{ flex:1, justifyContent:'center',alignContent:'center',backgroundColor:backgroundColor }}>

              <View  style={gstyles.avatarContainer} >
                <Image style={{justifyContent:'center', alignItems:'center', width:imageSize,height:imageSize}} source={require('../assets/vertical-logo.png')} ></Image>
              </View>
              <ActivityIndicator color={color} size={80}></ActivityIndicator>
          </View>    
}
