import React, { useContext } from 'react';
import { Modal, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { HeaderResultados } from './HeaderResultados';
import { Loading } from '../Loading';
import { Navigatorsearch } from '../../navigation/NavigatorSearch';


interface Props{
  iconClose:string,
  color:string,
  label:string,
}

export const ModalSearchResultados = ( { iconClose,color, label }: Props ) => {

  //call service to get data
  
  const { flags } = useContext(GeneralContext);
  
    return   <Modal animationType='slide' transparent={true}  visible={ flags.resultadosBusquedaVisible }>

                <View style={{ flex:1,backgroundColor:'white',paddingTop:50 }}>
                    <HeaderResultados iconClose={iconClose} color={color} label={label}></HeaderResultados>
                    <Navigatorsearch></Navigatorsearch>
                </View>
                
            </Modal>
          
}
