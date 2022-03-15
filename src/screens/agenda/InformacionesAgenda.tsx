import React, { useContext } from 'react'
import { View, FlatList, Button } from 'react-native';
import { Spacer } from '../../components/Spacer';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { gstyles } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { WithoutItems } from '../../components/search/WithoutItems';
import { ListJudgeResourceByOpportunityIdAux } from '../../models/response/ListJudgeResourceByOpportunityIdAux';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import CustomIcon from '../../theme/CustomIcon';

export const InformacionesAgenda = () => {

    const { agenda } = useContext( GeneralContext );

    const addZero=(param:number) =>{
        if(param <10)return '0'+param
        else return param.toString()
      }
    
      
    //const { checkPermission} = useDownloadFile()
 
    let dataCertame = agenda.resumo.dataCadastro +' - '+ agenda.resumo.horaCertame.substring(0,2)+':'+agenda.resumo.horaCertame.substring(2);
    let fechaCadastro = new Date(agenda.resumo.dataCadastro);
    let fechaImpugnacao = new Date(agenda.resumo.dataImpugnacao);
    let fechaEsclarecimento = new Date(agenda.resumo.dataEsclarecimento);
    var dataCadastro = addZero(fechaCadastro.getDate())  +'/'+ addZero(fechaCadastro.getMonth() + 1) +'/'+fechaCadastro.getFullYear()
    var dataImpugnacao = addZero(fechaImpugnacao.getDate())  +'/'+ addZero(fechaImpugnacao.getMonth() + 1) +'/'+fechaImpugnacao.getFullYear()
    var dataEsclarecimento = addZero(fechaEsclarecimento.getDate())  +'/'+ addZero(fechaEsclarecimento.getMonth() + 1) +'/'+fechaEsclarecimento.getFullYear()
    
    
    return (
         <View style={gstyles.globalTabView}>
               
                 {/* <HeaderTitle label='Nome do Cliente' top={20} fontSize={20}></HeaderTitle>
                 <Spacer height={20}></Spacer> */}
                  <Spacer height={10}></Spacer> 
                 <TextOportunidad label='ME/EPP: ' valor={agenda.resumo.meEpp} size={17} ></TextOportunidad>
                 <Spacer height={10}></Spacer>
                 <TextOportunidad label='Registro preco: ' valor={agenda.resumo.registroPreco} size={17} ></TextOportunidad>
                
                 <Spacer height={20}></Spacer>
                 <TextOportunidadIcono label='Data Cadastro: ' valor={' ' + dataCadastro } size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                 <Spacer height={10}></Spacer>
                 <TextOportunidadIcono label='Data do Boletin: ' valor={' ' + agenda.resumo.dataCaptacao==undefined ?'' :agenda.resumo.dataCaptacao  } size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                 <Spacer height={10}></Spacer>
                 <TextOportunidadIcono label='Data de impugnacao: ' valor={' ' + dataImpugnacao } size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                 <Spacer height={10}></Spacer>
                 <TextOportunidadIcono label='Data de esclarecimiento: ' valor={' ' + dataEsclarecimento } size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                 <Spacer height={10}></Spacer>
                
                
         </View>
     )
 }
 