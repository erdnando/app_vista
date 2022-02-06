import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { gstyles } from '../theme/appTheme';


interface Props{
    color:string
  }

export const Loading = ( {color}:Props ) => {

    return  <View style={{ flex:1, justifyContent:'center',alignContent:'center',backgroundColor:'#EDF0F5' }}>

              <View  style={gstyles.avatarContainer} >
                <Image style={{justifyContent:'center', alignItems:'center', width:80,height:80}} source={require('../assets/vertical-logo.png')} ></Image>
              </View>
              <ActivityIndicator color={color} size={80}></ActivityIndicator>
          </View>    
}
