import React, { useContext } from 'react'
import { View, Button } from 'react-native';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import { Spacer } from '../../components/Spacer';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { HeaderTitle } from '../../components/HeaderTitle';
import { gstyles } from '../../theme/appTheme';
import { useSearch } from '../../hooks/useSearch';
import { useDownloadFile } from '../../hooks/useDownloadFile';
import FileViewer from "react-native-file-viewer";

export const OportunidadScreen = () => {

   const { oportunidadesTab } = useSearch();
   //const {  checkPermission } = useDownloadFile();  
   const { checkPermission} = useDownloadFile()
      
    return (
        <View style={gstyles.globalTabView}>
              
                {/* <TextOportunidad label='Nome do Cliente' valor='' size={20} colorValor='black' ></TextOportunidad> */}
                <HeaderTitle label='Nome do Cliente' top={20} fontSize={20}></HeaderTitle>
                <Spacer height={20}></Spacer>

                <TextOportunidad label='Orgao: ' valor={oportunidadesTab.razaoSocialOrgao} size={17} ></TextOportunidad>
                <TextOportunidad label='Edital: ' valor={oportunidadesTab.edital} size={17} ></TextOportunidad>
                <TextOportunidad label='Modalidade: ' valor={oportunidadesTab.modalidade} size={17}  ></TextOportunidad>
                <TextOportunidad label='Plataforma: ' valor={oportunidadesTab.plataforma} size={17}  ></TextOportunidad>
                <TextOportunidad label='Status: ' valor={oportunidadesTab.statusOportunidade} colorValor='orange' valueIsBold={true} size={17}  ></TextOportunidad>
                
                <Spacer height={20}></Spacer>
                <TextOportunidadIcono label='data Certame: ' valor={oportunidadesTab.dataCertame} size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                <Spacer height={10}></Spacer>
                <TextOportunidadIcono label='Localidade: ' valor={oportunidadesTab.localidade} size={17} icono='ic_baseline-place'></TextOportunidadIcono>
                <Spacer height={10}></Spacer>
                <TextOportunidadIcono label='' valor='Download do Edital' size={17} icono='ic_baseline-cloud-download'></TextOportunidadIcono>
                {/* <Link to='http://www.redbooks.ibm.com/redbooks/pdfs/sg247363.pdf' target='_blank'   >Download</Link> */}
                <Button title='Download' onPress={()=>{
                      checkPermission('https://www.mysu.org.uy/haceclick/folletos/02-el-deseo-sexual.pdf','pdf','application/pdf');
                   
                     
                }}></Button>
        </View>
    )
}
