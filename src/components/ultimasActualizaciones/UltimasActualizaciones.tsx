
import React from 'react';
import { Platform, Text, View } from 'react-native';
import { HeaderActualizaciones } from './HeaderActualizaciones';
import { ListActualizaciones } from './ListActualizaciones';


interface Props{
    height:number
  }

export const UltimasActualizaciones = ( ) => {



    return  (<View style={{flex:1, flexDirection:'column',backgroundColor:'#BCC1CB', position:'absolute', bottom:0, 
                        width:'100%', height:Platform.OS=='ios' ? '73%': '78%',  alignItems:'center',}}>
                    <HeaderActualizaciones label='Ultimas actualizaciones'></HeaderActualizaciones>
                    <View style={{height:Platform.OS=='ios' ? '63%': '72%' }}>
                        <ListActualizaciones></ListActualizaciones>
                    </View>
                    </View>
           )
}
