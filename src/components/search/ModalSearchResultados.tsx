import React, { useContext } from 'react';
import { Modal, View } from 'react-native';
import { Navigatorsearch } from '../../navigation/NavigatorSearch';
import { GeneralContext } from '../../state/GeneralProvider';
import { HeaderResultados } from './HeaderResultados';
import { useSearch } from '../../hooks/useSearch';
import { Loading } from '../Loading';


interface Props{
  iconClose:string,
  color:string,
  label:string,
}

export const ModalSearchResultados = ( { iconClose,color, label }: Props ) => {

  //call service to get data
  
  const { flags } = useContext(GeneralContext);

  if(flags.isLoading){
    return <Modal animationType='slide' transparent={true}  visible={ flags.resultadosBusquedaVisible }>
              <View style={{ flex:1,backgroundColor:'white',paddingTop:50 }}>
                  <HeaderResultados iconClose={iconClose} color={color} label={label}></HeaderResultados>
                  <Loading color='orange'></Loading>
              </View>
          </Modal>
  }
    return   <Modal animationType='slide' transparent={true}  visible={ flags.resultadosBusquedaVisible }>

                <View style={{ flex:1,backgroundColor:'white',paddingTop:50 }}>
                    <HeaderResultados iconClose={iconClose} color={color} label={label}></HeaderResultados>
                    <Navigatorsearch></Navigatorsearch>
                </View>
                
            </Modal>
          
}
