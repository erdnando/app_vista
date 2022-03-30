import React, { useContext } from 'react'
import { FlatList, Platform, Text, View } from 'react-native';
import { Loading } from '../../components/Loading';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { WithoutItems } from '../../components/search/WithoutItems';
import { Spacer } from '../../components/Spacer';
import { useSearch } from '../../hooks/useSearch';
import { ListAllRequirementByOpportunityAux } from '../../models/response/ListAllRequirementByOpportunityAux';
import { GeneralContext } from '../../state/GeneralProvider';
import { gstyles } from '../../theme/appTheme';

export const PendienteScreen = () => {

    const { search,flags } = useContext( GeneralContext );
   

    const renderUpdateItem = (item:ListAllRequirementByOpportunityAux) =>{

        {/* alerta */}
        return ( <View style={{height:160, flexDirection:'row', width:'98%',   
                        backgroundColor: '#EDF0F5', borderRadius:7,padding:5,elevation:6,
                        shadowColor: "black", shadowOpacity: 0.3,shadowOffset: {
                        height: 4, width: 1
                    }}}>
    
                    <View style={{ flexDirection:'column', margin:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>

                        <View style={{width:'85%', justifyContent:'space-evenly', marginBottom:10}}>
                            <Text style={{fontFamily:'Roboto-Bold', fontSize:15, textAlign:'justify'}}>Descripcion: <Text style={{textAlign:'justify',fontFamily:'Roboto-Regular'}}>{item.descripcion}</Text> </Text>
                        </View>
                        <Spacer height={8}></Spacer>
                        <TextOportunidadIcono icono='ic_round-pin' label='Tipo:  ' valor={item.tipo} size={15} ></TextOportunidadIcono>
                        <TextOportunidadIcono icono='gridicons_user' label='Tipo de usuario:  ' valor={item.tipoUsuario} size={15} ></TextOportunidadIcono>
                        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between' }}>
                            <TextOportunidadIcono icono='ic_round-date-range' label='Dias' valor={'  :  ' +item.dias} size={15} ></TextOportunidadIcono>
                            <View style={{width:3,}}></View>
                            <TextOportunidadIcono icono='ic_outline-check' colorValor={item.acepto==='S' ? 'green': 'red'} label='Atende' valor={'     '+item.acepto} size={15} ></TextOportunidadIcono>
                            <View style={{width:3,}}></View>
                        </View>
                    </View>
                </View>
        )
    }
    
    const renderSeparator = () =>{
        return (
           
             <Spacer height={10} ></Spacer>
        )
    }

    if(flags.isLoadingSearch){
        return <Loading color='orange'></Loading>       
      }

    return (
        <View style={gstyles.globalTabView}>
             <Spacer height={10}></Spacer>
             <View style={{flex:1,width:'100%',justifyContent:'center',marginHorizontal:0,left:4 }}>
        
             {search.pendencias.length==0 && <WithoutItems label='Sem exigencias'></WithoutItems>}

                <FlatList data={search.pendencias} 
                    scrollEnabled={true}
                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                    keyExtractor={(item) => item.id.toString()} 
                    ItemSeparatorComponent={ () => renderSeparator()}
                />
            </View>
        </View>
    )
}
