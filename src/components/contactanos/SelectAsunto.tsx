import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import RNPickerSelect from 'react-native-picker-select';
import CustomIcon from '../../theme/CustomIcon';
import { useMensaje } from '../../hooks/useMensaje';



interface Props{
  placeholder:string,
  campo:string
}

export const SelectAsunto = ( { campo,placeholder}: Props ) => {

  let colorIcono = colores.primary;
  
  //const [selectedValue, setSelectedValue] = useState("Assunto");
  const { asuntoMensaje, setAsuntoMensaje,mensaje } = useMensaje(); 

    return (
      <View style={{ flexDirection: 'row',left:14, borderBottomWidth:1,width:'87%',borderBottomColor: asuntoMensaje !=null ? 'orange' : 'grey' }}>

              <RNPickerSelect 
              style={pickerSelectStyles}
                placeholder={{label:'Assunto', value:null}}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => {
                  console.log(value)
                  setAsuntoMensaje(value);
                  
                }}
                items={[
                    { label: "JavaScript", value: "JavaScript" },
                    { label: "TypeStript", value: "TypeStript" },
                    { label: "Python", value: "Python" },
                    { label: "Java", value: "Java" },
                    { label: "C++", value: "C++" },
                    { label: "C", value: "C" },
                ]}
                />
                
              <View style={{right:-40 }}>
                  <CustomIcon  name='ic_baseline-arrow-drop-down' size={33} color='#838892'   style={{left:-40, top:-5,}} ></CustomIcon>
               </View>
      </View>
    )
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex:1,
    width:250,
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 0,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    flex:1,
    width:250,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
  });