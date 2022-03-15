import React, { useContext } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Spacer } from '../../components/Spacer';
import { gstyles } from '../../theme/appTheme';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import { Producto } from '../../components/oportunidad/Producto';
import { OpportunityListitemAux } from '../../models/response/OpportunityListitemAux';
import Collapsible from 'react-native-collapsible';
import { GeneralContext } from '../../state/GeneralProvider';
import { WithoutItems } from '../../components/search/WithoutItems';

export const ResultadoAgenda = () => {

    const { search,setSearch } = useContext( GeneralContext )
    //const { resultadoTab,setResultadoTab } = useSearch();

    const renderUpdateItem = (item:OpportunityListitemAux) =>{
         
        return ( 
           
           <View>
                {/* productos */}
                <TouchableOpacity onPress={() =>{ 
                    
                                    const payload= search;
                                    payload.resultados[item.id].collapsed=!item.collapsed;
                                    setSearch(payload)

                                    }} >
                    <Producto producto={item.producto} participacion={item.participacion} posicion={item.posicion}></Producto>
                </TouchableOpacity>

                <Collapsible collapsed={item.collapsed}  style={{justifyContent:'flex-start',alignContent:'flex-start',alignItems:'flex-start'}} >
                        <View style={{height:120, flexDirection:'row', width:'98%',   
                                backgroundColor: '#EDF0F5', borderRadius:7,padding:5,elevation:6,
                                shadowColor: "black", shadowOpacity: 0.3,shadowOffset: {
                                height: 4, width: 1
                            }}}>
            
                            <View style={{ flexDirection:'column', margin:6, justifyContent:'flex-start',  alignItems:'flex-start'}}>

                                <View style={{flexDirection:'row'}}>
                                    <TextOportunidad  label='Lote: ' valor={item.lote} size={ 15 } ></TextOportunidad>
                                    <TextOportunidad  label='Items: ' valor={item.item} size={ 15 } ></TextOportunidad>
                                </View>
                                <TextOportunidad  label='Valor fechado: ' valor={item.valorFechado} size={ 15 } ></TextOportunidad>
                                <TextOportunidad  label='Valor total: ' valor={item.valorTotal} size={ 15 } ></TextOportunidad>
                                <TextOportunidad label='Ganahador: ' valor={item.ganador} size={ 15 } ></TextOportunidad>
                            </View>
                        </View>
                </Collapsible>

            </View>
           
        )
    }
    
    const renderSeparator = () =>{
        return (
           
             <Spacer height={10} ></Spacer>
        )
    }

    return (
        <View style={gstyles.globalTabView}>
             <Spacer height={10}></Spacer>
             <View style={{flex:1,width:'100%',justifyContent:'center',marginHorizontal:0,left:4 }}>
        
             {search.resultados.length==0 && <WithoutItems label='Sem demandas juridica'></WithoutItems>}
                <FlatList data={search.resultados} 
                    scrollEnabled={true}
                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                    keyExtractor={(item,index) => item.id.toString()+index }
                    ItemSeparatorComponent={ () => renderSeparator()}
                />
            </View>
        </View>
    )
}
