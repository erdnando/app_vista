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
    // interface Pendientes{
    //     id:number,
    //     descripcion:string,
    //     tipo:string,
    //     tipoUsuario:string,
    //     dias:string,
    //     acepto:string
    // }

    // const Data:Pendientes[] = [
    //     {
    //       id:1,
    //       descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //       tipo:'Lorem ipsum dolor',
    //       tipoUsuario:'Lorem ipsum dolor',
    //       dias:'000',
    //       acepto:'Sim'
    //   },
    //   {
    //     id:2,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Sim'
    // },
    // {
    //     id:3,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Nao'
    // },
    // {
    //     id:4,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Sim'
    // },
    // {
    //     id:5,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Nao'
    // },
    // {
    //     id:6,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Sim'
    // },
    // {
    //     id:7,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Sim'
    // },
    // {
    //     id:8,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Sim'
    // },
    // {
    //     id:9,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Nao'
    // },
    // {
    //     id:10,
    //     descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing eit Mauris nisi sapien.',
    //     tipo:'Lorem ipsum dolor',
    //     tipoUsuario:'Lorem ipsum dolor',
    //     dias:'000',
    //     acepto:'Nao'
    // },
    // ]

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
                        
                        <TextOportunidadIcono icono='ic_round-pin' label='Tipo: ' valor={item.tipo} size={15} ></TextOportunidadIcono>
                        <TextOportunidadIcono icono='ic_round-pin' label='Tipo de usuario: ' valor={item.tipoUsuario} size={15} ></TextOportunidadIcono>
                        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between' }}>
                            <TextOportunidadIcono icono='icomoon-free_hammer2' label='Dias' valor={'  : ' +item.dias} size={15} ></TextOportunidadIcono>
                            <View style={{width:3,}}></View>
                            <TextOportunidadIcono icono='ic_outline-check' colorValor={item.acepto==='Sim' ? 'green': 'red'} label='Atende' valor={'     '+item.acepto} size={15} ></TextOportunidadIcono>
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
