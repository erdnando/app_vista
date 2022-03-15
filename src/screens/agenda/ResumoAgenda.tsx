import React, { useContext } from 'react'
import { View, Button } from 'react-native';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import { Spacer } from '../../components/Spacer';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { HeaderTitle } from '../../components/HeaderTitle';
import { gstyles } from '../../theme/appTheme';
import { useDownloadFile } from '../../hooks/useDownloadFile';
import CustomIcon from '../../theme/CustomIcon';
import { GeneralContext } from '../../state/GeneralProvider';
import vistaApi from '../../api/vista';

export const ResumoAgenda = () => {

   const { agenda } = useContext( GeneralContext );
   const { checkPermission} = useDownloadFile()

   let dataCertame = agenda.resumo.dataCertame +' - '+ agenda.resumo.horaCertame.substring(0,2)+':'+agenda.resumo.horaCertame.substring(2);
   
    return (
        <View style={gstyles.globalTabView}>
              
                {/* <HeaderTitle label='Nome do Cliente' top={20} fontSize={20}></HeaderTitle>
                <Spacer height={20}></Spacer> */}
                <TextOportunidad label='Cliente: ' valor={agenda.resumo.razaoSocialCliente} size={17} ></TextOportunidad>
                <TextOportunidad label='Orgao: ' valor={agenda.resumo.razaoSocialOrgao} size={17} ></TextOportunidad>
                <TextOportunidad label='Edital: ' valor={agenda.resumo.edital} size={17} ></TextOportunidad>
                <TextOportunidad label='Modalidade: ' valor={agenda.resumo.modalidade} size={17}  ></TextOportunidad>
                <TextOportunidad label='Plataforma: ' valor={agenda.resumo.plataforma} size={17}  ></TextOportunidad>
                <TextOportunidad label='Status: ' valor={agenda.resumo.statusOportunidade} colorValor='orange' valueIsBold={true} size={17}  ></TextOportunidad>
                
                <Spacer height={20}></Spacer>
                <TextOportunidadIcono label='Data Certame: ' valor={ dataCertame } size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                <Spacer height={10}></Spacer>
                <TextOportunidadIcono label='Localidade: ' valor={agenda.resumo.localidade} size={17} icono='ic_baseline-place'></TextOportunidadIcono>
                <Spacer height={2}></Spacer>
                <View style={{ flexDirection:'row', alignContent:'center', alignItems:'center' ,marginLeft:3}}>
                        <CustomIcon name='ic_baseline-cloud-download' size={25} color='black'></CustomIcon>
                        <Button title='Download do Edital'  onPress={()=>{
                                 checkPermission( vistaApi.defaults.baseURL+agenda.resumo.arquivo ,'pdf','application/pdf');
                        }}></Button>
                </View>
        </View>
    )
}
