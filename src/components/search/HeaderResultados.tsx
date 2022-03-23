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

export const HeaderResultados = ( { iconClose,color, label }: Props ) => {

  const { flags,setFlags,ids,setIds } = useContext(GeneralContext);

    return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0,height:32}}> 

              <TouchableOpacity style={{marginLeft:15, padding:5}} onPress={() =>{ 
                
                const payload= flags;
                payload.resultadosBusquedaVisible =false;
                setFlags(payload)

                  const payload1 = ids;
                  payload1.codigoBusqueda='';
                  setIds(payload1);
                }}>
                  <Text>
                      <CustomIcon  name={iconClose} size={26} color={color} ></CustomIcon>
                  </Text>
              </TouchableOpacity>

              <Text style={{marginLeft:10,fontSize:20}}>{label}</Text>
          </View>
          
}
