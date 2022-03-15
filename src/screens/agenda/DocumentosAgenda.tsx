import React, { useContext } from 'react'
import { View, Button } from 'react-native';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import { Spacer } from '../../components/Spacer';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { HeaderTitle } from '../../components/HeaderTitle';
import { gstyles } from '../../theme/appTheme';
import { useSearch } from '../../hooks/useSearch';
import { useDownloadFile } from '../../hooks/useDownloadFile';
//import FileViewer from "react-native-file-viewer";
import CustomIcon from '../../theme/CustomIcon';
import { GeneralContext } from '../../state/GeneralProvider';
import vistaApi from '../../api/vista';

export const DocumentosAgenda = () => {

   const { search } = useContext( GeneralContext );
   const { checkPermission} = useDownloadFile()

   let dataCertame = search.oportunidade.dataCertame +' - '+ search.oportunidade.horaCertame.substring(0,2)+':'+search.oportunidade.horaCertame.substring(2);
   
    return (
        <View style={gstyles.globalTabView}>
              
                <HeaderTitle label='Nome do Cliente' top={20} fontSize={20}></HeaderTitle>
                <Spacer height={20}></Spacer>

                <TextOportunidad label='Orgao: ' valor={search.oportunidade.razaoSocialOrgao} size={17} ></TextOportunidad>
                <TextOportunidad label='Edital: ' valor={search.oportunidade.edital} size={17} ></TextOportunidad>
                <TextOportunidad label='Modalidade: ' valor={search.oportunidade.modalidade} size={17}  ></TextOportunidad>
                <TextOportunidad label='Plataforma: ' valor={search.oportunidade.plataforma} size={17}  ></TextOportunidad>
                <TextOportunidad label='Status: ' valor={search.oportunidade.statusOportunidade} colorValor='orange' valueIsBold={true} size={17}  ></TextOportunidad>
                
                <Spacer height={20}></Spacer>
                <TextOportunidadIcono label='Data Certame: ' valor={ dataCertame } size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                <Spacer height={10}></Spacer>
                <TextOportunidadIcono label='Localidade: ' valor={search.oportunidade.localidade} size={17} icono='ic_baseline-place'></TextOportunidadIcono>
                <Spacer height={2}></Spacer>
                <View style={{ flexDirection:'row', alignContent:'center', alignItems:'center' ,marginLeft:3}}>
                        <CustomIcon name='ic_baseline-cloud-download' size={25} color='black'></CustomIcon>
                        <Button title='Download do Edital'  onPress={()=>{
                                //http://ec2-3-86-19-112.compute-1.amazonaws.com:8080/vista-api/docs/opportunityDocument/2722.pdf
                                // checkPermission(search.oportunidade..arquivo,'pdf','application/pdf');
                                // checkPermission('https://www.mysu.org.uy/haceclick/folletos/02-el-deseo-sexual.pdf','pdf','application/pdf');
                                 checkPermission( vistaApi.defaults.baseURL+search.oportunidade.arquivo ,'pdf','application/pdf');
                        }}></Button>
                </View>
        </View>
    )
}
