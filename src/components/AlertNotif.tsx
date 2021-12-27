import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../hooks/useLogin';
import { GeneralContext } from '../state/GeneralProvider';
import CustomIcon from '../theme/CustomIcon';
import { colores } from '../theme/appTheme';


interface Props{
  label:string,
  color:string,
  iconName:string,
}

export const AlertNotif = ( { label,color,iconName }: Props ) => {

 // let colorIcono = colores.primary;

    //invoke global state
    //const { email,password } = useContext( GeneralContext )
    //const { alertVisible } = useLogin(); 

 
    return (
           <View  style={{flexDirection:'row',  backgroundColor:color,borderRadius: 6 }}>

               <CustomIcon  name= {iconName} size={24} color='white' style={{left:12, top:12,}} ></CustomIcon>
               <TouchableOpacity  style={{   height:48,   }} >
               <Text style={{ width:264,  textAlign:'left', top:16,left:22,color:'white'}}>{label}</Text>
               </TouchableOpacity>
            
           </View>
    )

    


    // {alertVisible===true && <AlertNotif label='error' color='#B85050' iconName='ic_round-warning' ></AlertNotif>}
          
   
}
