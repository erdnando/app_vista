import React, { useState } from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import CustomIcon from '../../theme/CustomIcon';



interface Props{
  routeName:string,
  color:string
}

export const OpcionBottomTab = ( { routeName,color }: Props ) => {

    //invoke global state
    //const {setFavoriteIcon} = useContext( GeneralContext )
    // const [isvisiblenotificacionTab, setisvisiblenotificacionTab] = useState(false)
    
    let iconName: string = '';
    switch (routeName) {
      case 'HomeScreen':
          iconName= 'fe_home';
          break;
      case 'AgendaScreen':
          iconName= 'bi_calendar-week';
          break;
      case 'ParecerScreen':
           iconName= 'icomoon-free_hammer2';
          break;
      case 'RelatorioScreen':
            iconName= 'bi_bar-chart-line-fill';
            break;
      case 'NotificacionesScreen':
        iconName= 'fe_home';
        break;
      default:
        iconName= 'fe_home';
          break;
  }
    
  return (<View style={{ height:56, width:72}}>
              <Text style={{ right:-15,top:Platform.OS === 'ios' ? 26 : 22}} > 
              <CustomIcon name={iconName} size={30} color={color} ></CustomIcon>
            </Text>
          </View>)

  // return (
  //   <TouchableOpacity  style={{ borderRadius: 100,  }} 
  //   onPressIn={() =>{
  //      console.log('click')
  //   }} >
  //   <View style={{ height:56, width:72}}>
  //   <Text style={{ right:-15,top:Platform.OS === 'ios' ? 26 : 22}} > 
  //   <CustomIcon name={iconName} size={30} color={color} ></CustomIcon>
  //   </Text>
  //   </View>
  // </TouchableOpacity>
  // )
}
