import React, { useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { colores } from '../../theme/appTheme';
import { useSearch } from '../../hooks/useSearch';


interface Props{
  label:string,
  iconRight:string
}

export const InputSearch = ( { label, iconRight}: Props ) => {

  let colorIcono = colores.primary;

    //invoke global state
    const { codigoBusqueda,setResultadosBusquedaVisible,setIsLoadingSearch } = useContext( GeneralContext )
    const { onChangeSearch,getResultadoBusqueda } = useSearch(); 

    
    return (
      <View style={{flexDirection: 'row',left:0 }}>
     
     
          <TextInput
              style={{
                  fontFamily:'Roboto-Regular',
                  height: 40,
                  width:'78%',
                  margin: 12,
                  paddingLeft:20,
                  borderWidth: 1,
                  borderLeftWidth:1,
                  borderRightWidth:1,
                  borderTopWidth:1,
                  borderColor:'black',
                  borderRadius: 20,
                  
              }}
              onChangeText={ onChangeSearch }
              placeholder={label}
              keyboardType='numeric'
              autoCapitalize='none'
              autoCorrect = {false}
              maxLength={27}
              value={codigoBusqueda}
          />
          <TouchableOpacity style={{right:45, top:20}} onPress={() =>{ 
            //call search engine api
           
            setIsLoadingSearch(true);//start loading
            console.log('searching...')
            setResultadosBusquedaVisible(true);//openModal
            setTimeout(
              () => { 
                getResultadoBusqueda();//consume api
              },
              5000
            )   
            

               

            }}>
          
                <Text style={{right:10}}>
                    <CustomIcon   name={iconRight} size={24} color= {codigoBusqueda===''?'black':colorIcono}  ></CustomIcon>
                </Text>
       
             
          </TouchableOpacity>
     
  </View>
    )
}
