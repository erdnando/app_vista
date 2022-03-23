
import React from 'react';
import { Platform, Text, View } from 'react-native';
import { HeaderTitle } from '../HeaderTitle';
import { Spacer } from '../Spacer';

import { ListActualizaciones } from './ListActualizaciones';
// import { HeaderTitle } from '../HeaderTitle';


interface Props{
    height:number
  }

export const UltimasActualizaciones = ( ) => {



    return  (<View style={{flex:1, flexDirection:'column',backgroundColor:'transparent',  margin:0, 
                        width:'100%',   alignItems:'center',}}>
                    <HeaderTitle label='Ultimas atualizações' top={10} fontSize={18}></HeaderTitle>

                    <View style={{flex:1,marginBottom:20,justifyContent:'center',alignItems:'flex-start',alignContent:'flex-end',top:0, width:'100%' }}>
                        <ListActualizaciones></ListActualizaciones>
                       
                    </View>
                    </View>
           )
}
