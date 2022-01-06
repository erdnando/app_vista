
import React from 'react';
import { Platform, Text, View } from 'react-native';
import { HeaderTitle } from '../HeaderTitle';
import { Spacer } from '../Spacer';
import { ListOportunidades } from './ListOportunidades';


// import { HeaderTitle } from '../HeaderTitle';


interface Props{
    height:number
  }

export const OportunidadesDia = ( ) => {



    return  (<View style={{flex:1, backgroundColor:'#BCC1CB', top:40,  
                        width:'100%',   alignItems:'center',alignContent:'flex-start'}}>
                    <HeaderTitle label='6 de enero de 2022' top={20} fontSize={18}></HeaderTitle>
                    <Spacer height={20}></Spacer>
                    <ListOportunidades></ListOportunidades>
                   
                    </View>
           )
}
