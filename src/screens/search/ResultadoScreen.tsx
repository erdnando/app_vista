import React from 'react'
import { FlatList, Platform, Text, View } from 'react-native';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { Spacer } from '../../components/Spacer';
import { gstyles } from '../../theme/appTheme';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import { TextOportunidadVertical } from '../../components/oportunidad/TextOportunidadVertical';
import { Producto } from '../../components/oportunidad/Producto';

export const ResultadoScreen = () => {

    interface Resultados{
        id:number,
        lote:string
        item:string
        valorFechado:string,
        valorTotal:string,
        ganador:string,
        producto1:string,
        producto2:string,
        producto3:string,
        participacion1:string,
        participacion2:string,
        participacion3:string,
        posicion1:string,
        posicion2:string,
        posicion3:string,
       
    }

    const Data:Resultados[] = [
        {
          id:1,
          lote:'1',
          item:'1',
          valorFechado:'00/00/0000',
          valorTotal:'R$000.00',
          ganador:'Lorem ipsum dolor',
          producto1:'Lorem ipsum',
          producto2:'Lorem ipsum',
          producto3:'Lorem ipsum',
          participacion1:'Sim',
          participacion2:'Sim',
          participacion3:'Sim',
          posicion1:'1',
          posicion2:'1',
          posicion3:'1',
      },
      {
        id:2,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    {
        id:3,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    {
        id:4,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    {
        id:5,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    {
        id:6,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    {
        id:7,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    {
        id:8,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    {
        id:9,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    {
        id:10,
        lote:'1',
        item:'1',
        valorFechado:'00/00/0000',
        valorTotal:'R$000.00',
        ganador:'Lorem ipsum dolor',
        producto1:'Lorem ipsum',
        producto2:'Lorem ipsum',
        producto3:'Lorem ipsum',
        participacion1:'Sim',
        participacion2:'Sim',
        participacion3:'Sim',
        posicion1:'1',
        posicion2:'1',
        posicion3:'1',
    },
    ]

    const renderUpdateItem = (item:Resultados) =>{

        return ( 
        
           <View>
                {/* productos */}
                <Producto producto={item.producto1} participacion={item.participacion1} posicion={item.posicion1}></Producto>
                <Producto producto={item.producto2} participacion={item.participacion2} posicion={item.posicion2}></Producto>
                <Producto producto={item.producto3} participacion={item.participacion3} posicion={item.posicion3}></Producto>
                
        
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
        
                <FlatList data={Data} 
                    scrollEnabled={true}
                    renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                    //keyExtractor={(item) => item.id} 
                    ItemSeparatorComponent={ () => renderSeparator()}
                />
            </View>
        </View>
    )
}
