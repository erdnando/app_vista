import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CustomIcon from '../../theme/CustomIcon';


interface Props{
  iconName:string,
  color:string,
  onPress : () => void
}

export const OpcionHeader = ( { iconName,color, onPress }: Props ) => {

    //invoke global state
    //const {setFavoriteIcon} = useContext( GeneralContext )
    return  <TouchableOpacity onPress={onPress} >
              <Text style={{fontSize:20, marginLeft:16, top:16}}>
                <CustomIcon name={iconName} size={34} color={color} style={{padding:150}} ></CustomIcon>
              </Text>
            </TouchableOpacity>
          
}
