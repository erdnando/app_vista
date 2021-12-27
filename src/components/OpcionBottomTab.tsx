import React from 'react';
import { Text } from 'react-native';
import CustomIcon from '../theme/CustomIcon';


interface Props{
  routeName:string,
  color:string
}

export const OpcionBottomTab = ( { routeName,color }: Props ) => {

    //invoke global state
    //const {setFavoriteIcon} = useContext( GeneralContext )
    
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
      default:
        iconName= 'fe_home';
          break;
  }
    
    return (
      <Text style={{ right:22,top:4}} > opcion
      <CustomIcon name={iconName} size={30} color={color} ></CustomIcon>
     </Text>
    )
}
