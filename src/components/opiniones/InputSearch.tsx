import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';
import { useSearchOpinion } from '../../hooks/useSearchOpinion';


interface Props{
  label:string,
  iconRight:string
}

export const InputSearch = ( { label, iconRight}: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
    const { ids } = useContext( GeneralContext )
    const { onChangeSearch,getResultadoBusqueda } = useSearchOpinion(); 

    
    return (
      <View style={{flexDirection: 'row', }}>
            <TextInput style={{
                  fontFamily:'Roboto-Regular',
                  height: 40,
                  width:Platform.OS=='ios' ? '89%': '90%',
                  margin: 12,
                  left:8,
                  paddingLeft:20, borderWidth:Platform.OS=='android' ? 3 : 0,borderColor:Platform.OS=='android' ? '#E2E5EA' : 'transparent',
                  borderRadius: 20, padding:5,elevation:0,backgroundColor : "white",
                  shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                   height: 1,
                   width: 1
                 }
                  
              }}
              onChangeText={ onChangeSearch }
              placeholder={label}
              keyboardType='numeric'
              autoCapitalize='none'
              autoCorrect = {false}
              maxLength={27}
              value={ids.idOpinionBusqueda}
          />

          <TouchableOpacity style={{ right:35, top:20}} onPress={() =>{ 
                //call search engine api
                // const payload= flags;
                // payload.isLoading=true;
                // payload.resultadosBusquedaVisible=true;
                // setFlags(payload);
                console.log('searching...1')
              
                setTimeout(
                  () => { 
                    getResultadoBusqueda();//consume api
                  },
                  3000
                )   
            }}>
              
             <Text style={{right:10,}}>
                        <CustomIcon   name={iconRight} size={24} color= {ids.idOpinionBusqueda===''?'black':colorIcono}  ></CustomIcon>
              </Text>  
          </TouchableOpacity>
     
         
     
      </View>
    )
}
