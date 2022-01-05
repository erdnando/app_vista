import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { colores } from '../../theme/appTheme';
import RNPickerSelect from 'react-native-picker-select';



interface Props{
  placeholder:string,
  campo:string
}

export const SelectAsunto = ( { campo,placeholder}: Props ) => {

  let colorIcono = colores.primary;
  
  const [selectedValue, setSelectedValue] = useState("java");


    return (
      <View style={{ flexDirection: 'row',left:-24 }}>

              <View style={{width:'100%', left:30}}>
              <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeStript", value: "TypeStript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />
              </View>
      </View>
    )
}
