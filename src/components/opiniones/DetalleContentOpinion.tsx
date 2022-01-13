
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';



export const DetalleContentOpinion = ( ) => {

  const { menuOpiniones,ids } = useContext(GeneralContext);
  // const [opcionMenuSelected, setOpcionMenuSelected] = useState(0)


  // const payload = menuOpiniones;
  // payload.forEach(function(part, index) {
  //   payload[index].estatus===1 ? setOpcionMenuSelected(payload[index].id): 0;
  // });
                                

  switch (ids.idMenuOpinionSelected) {
    case 1:
      return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 
                 <Text>Parecer</Text>
              </View> 
    case 2:
      return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 
                  <Text>Pareceres realizados</Text>
              </View> 
    case 3:
      return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 
                  <Text>Valores</Text>
              </View> 
    case 4:
      return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 
                  <Text>Exigencias</Text>
              </View> 
    default:
      return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 
                 <Text>Opcion no valida</Text>
              </View> 
  }

  

//   return  <View style={{ flexDirection:'row', justifyContent:'flex-start',alignItems:'center', top:0}}> 
//   <Text>Opcion no valida</Text>
// </View> 
      
     

             

     
      
   

    
          
}
