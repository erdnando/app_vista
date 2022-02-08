import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import CustomIcon from '../theme/CustomIcon';


interface Props{
    mensaje:string
  }

export const AlertFail = ( {mensaje}:Props ) => {

    return  <View style={{height:48, flexDirection:'row', width:'95%',   
                borderWidth: 0,backgroundColor: '#B85050', borderRadius:5,padding:5,elevation:6,
                shadowColor: "#000000", shadowOpacity: 0.4,shadowOffset: {
                height: 1, width: 1
            }}}>

            <Text style={{left:8,top:6}}> 
                <CustomIcon  name={'ic_round-warning'} size={24} color={'white'} ></CustomIcon>
            </Text>

            <View style={{ flexDirection:'column', width:'82%',height:50,left:15,top:3, justifyContent:'flex-start',  alignItems:'flex-start'}}>
              <Text style={{fontFamily:'Roboto-Regular', fontSize:14, color:'#FFFFFF',marginTop:8,width:'99%'}}>{mensaje}</Text>
            </View>
            </View> 
}
