import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colores, gstyles } from '../theme/appTheme';
import CustomIcon from '../theme/CustomIcon';


interface Props{
  iconName:string,
  label:string,
  color:string,
  onPress : () => void
}

export const OpcionMenuLateral = ( { iconName,label,color, onPress }: Props ) => {

    //invoke global state
    //const {setFavoriteIcon} = useContext( GeneralContext )
    
    return (
        <TouchableOpacity onPress= {onPress} style={{ ...gstyles.menuBoton , marginBottom:10}} >
        <View style={{flexDirection:'row'}}>
          <Text>
          <CustomIcon name={iconName} size={25} color={color} ></CustomIcon>
          </Text>
          <Text style={{...gstyles.menuTexto, paddingLeft:8}}>{label}</Text>
          </View>
      </TouchableOpacity>
    )
}
