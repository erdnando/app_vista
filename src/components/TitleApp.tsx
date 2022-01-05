import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { GeneralContext } from '../state/GeneralProvider';
import { gstyles } from '../theme/appTheme';



export const TitleApp = () => {

  const { tabSelected} = useContext( GeneralContext )

  if(tabSelected === 'Logo')

    return  (<Image style={{...gstyles.avatar,height:24*1.15,width:79.89*1.15, top:3}} 
            source={require('../assets/horizontal-logo.png')}  >
        </Image>)
   
   return ( <Text style={{color:'white',fontFamily:'Roboto-Regular',fontSize:21, top:5}}>{tabSelected}</Text>)

}
