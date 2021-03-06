import React, { useContext } from 'react';
import { Modal, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { HeaderResultadosAgenda } from './HeaderResultadosAgenda';
import { Loading } from '../Loading';
import { NavigatorAgenda } from '../../navigation/NavigatorAgenda';
import { Navigatorsearch } from '../../navigation/NavigatorSearch';


interface Props{
  iconClose:string,
  color:string,
  label:string,
}

export const ModalAgendaDetalle = ( { iconClose,color, label }: Props ) => {

  //call service to get data
  
  const { flags } = useContext(GeneralContext);

    return   <Modal animationType='slide' transparent={true}  visible={ flags.resultadosAgendaVisible }>

                <View style={{ flex:1,backgroundColor:'white',paddingTop:50 }}>
                    <HeaderResultadosAgenda iconClose={iconClose} color={color} label={label}></HeaderResultadosAgenda>
                    {/* <NavigatorAgenda></NavigatorAgenda> */}
                    <Navigatorsearch></Navigatorsearch>
                </View>
                
            </Modal>
          
}
