import React from 'react'
import { View } from 'react-native';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import { Spacer } from '../../components/Spacer';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { HeaderTitle } from '../../components/HeaderTitle';
import { gstyles } from '../../theme/appTheme';

export const OportunidadScreen = () => {
    return (
        <View style={gstyles.globalTabView}>
              
                {/* <TextOportunidad label='Nome do Cliente' valor='' size={20} colorValor='black' ></TextOportunidad> */}
                <HeaderTitle label='Nome do Cliente' top={20} fontSize={20}></HeaderTitle>
                <Spacer height={20}></Spacer>

                <TextOportunidad label='Orgao: ' valor='lorem ipsum dolor sit amet' size={17} ></TextOportunidad>
                <TextOportunidad label='Edital: ' valor='00000000000000' size={17} ></TextOportunidad>
                <TextOportunidad label='Modalidade: ' valor='Lorem ipsum dolor sit amet' size={17}  ></TextOportunidad>
                <TextOportunidad label='Plataforma: ' valor='Lorem ipsum dolor sit amet' size={17}  ></TextOportunidad>
                <TextOportunidad label='Status: ' valor='Aguardando parecer' colorValor='orange' valueIsBold={true} size={17}  ></TextOportunidad>
                
                <Spacer height={20}></Spacer>
                <TextOportunidadIcono label='data Certame: ' valor='00/00/00 00:00' size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                <Spacer height={10}></Spacer>
                <TextOportunidadIcono label='Localidade: ' valor='Uberaba - MG' size={17} icono='ic_baseline-place'></TextOportunidadIcono>
                <Spacer height={10}></Spacer>
                <TextOportunidadIcono label='' valor='Download do Edital' size={17} icono='ic_baseline-cloud-download'></TextOportunidadIcono>

        </View>
    )
}
