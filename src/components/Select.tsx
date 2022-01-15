import React, { useContext, useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import CustomIcon from '../theme/CustomIcon';


interface Props{
  placeholder:string,
  onValueChange: (value: any, index: number) => void,
  items:Item[],
  campo:string,
  width?:string
}

export const Select = ( { onValueChange,items,placeholder,campo,width='87%'}: Props ) => {


    return (
      <View style={{ flexDirection: 'row',left:14, borderBottomWidth:1,width:width,borderBottomColor: campo !=null ? 'orange' : 'grey' }}>

              <RNPickerSelect 
              style={pickerSelectStyles}
                value={campo}
                placeholder={{label:placeholder, value:null}}
                useNativeAndroidPickerStyle={true}
                onValueChange={onValueChange}
                items={items}
                />
                
                { Platform.OS=='ios' ? <View style={{right: -40 }}>
                  <CustomIcon  name='ic_baseline-arrow-drop-down' size={33} color='#838892'   style={{left:-40, top:-5,}} ></CustomIcon>
               </View>:<View></View>
               }
      </View>
    )
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex:1,
    width:250,
      fontSize: 14,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 0,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    flex:1,
    width:250,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderWidth: 0,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  });