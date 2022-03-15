import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';


interface Props{
  iconClose:string,
  color:string,
  label:string,
}

export const HeaderResultadosAgenda = ( { iconClose,color, label }: Props ) => {

  const { flags,setFlags } = useContext(GeneralContext);

    return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 

              <TouchableOpacity style={{marginLeft:15, padding:5}} onPress={() =>{ 
                
                const payload= flags;
                payload.resultadosAgendaVisible =false;
                setFlags(payload)
                }}>
                  <Text>
                      <CustomIcon  name={iconClose} size={26} color={color} ></CustomIcon>
                  </Text>
              </TouchableOpacity>

              <Text style={{marginLeft:10,fontSize:20}}>{label}</Text>
          </View>
          
}
