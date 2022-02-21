import React, { useContext, useEffect } from 'react';
import {  FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import CustomIcon from '../../theme/CustomIcon';
import { Spacer } from '../Spacer';
import { MenuOpiniones } from '../../models/MenuOpiniones';
import { TipoUsuario } from '../../models/Usuario';

export const DetallHeaderOpiniones = () => {

  //invoke global state
  const { menuOpiniones,setMenuOpiniones, menuOpinionesTerciario, 
          setMenuOpinionesTerciario ,ids,setIds,usuario} = useContext( GeneralContext )


  const renderUpdateItem = (item:MenuOpiniones) =>{


    {/* opcion */}
    return ( item.visible ? <TouchableOpacity style={{ borderRadius: 100,  }} 
                                onPress={()=>{
                                  console.log('menu opiniones click..'+item.id);
                                  
                                 //TODO logic to load component view, based in selected option
                                 const payload =  usuario.tipo===TipoUsuario.COLABORADOR ? menuOpiniones: menuOpinionesTerciario;
                                 const payload1 = ids;
                                
                                 payload.forEach(function(part, index) {
                                  if(payload[index].id===item.id) { 
                                      payload[index].estatus=1; 
                                      payload1.idMenuOpinionSelected=item.id;
                                      setIds(payload1);
                                      
                                    }else{
                                        payload[index].estatus=0;  
                                    } 
                                });


                                usuario.tipo===TipoUsuario.COLABORADOR ?  setMenuOpiniones(payload) :  setMenuOpinionesTerciario(payload)
                               
                                console.log(menuOpiniones)

                                }}>
                            <View style={{height:124, flexDirection:'row', width:122,
                                            backgroundColor: 'white', borderRadius:7,padding:5,elevation:6,marginRight:15,marginLeft:2,
                                            borderColor:(item.estatus==1 ? 'orange': '#E2E5EA'),borderWidth:2,
                                            shadowColor: (item.estatus==1 ? 'orange': 'grey'), shadowOpacity: 0.8,shadowOffset: {
                                                height: 1, width: 3, }               
                                            }}>

                                        <View style={{ justifyContent:'flex-start',width:'100%',  alignItems:'center',alignContent:'flex-start',}}>
                            
                                            
                                            <View style={{flex:1, height:120, justifyContent:'center',alignItems:'center'}}>
                                                
                                                {/* icon */}
                                                <View style={{ backgroundColor:(item.estatus==1 ? '#FF9029': '#E2E5EA'), borderWidth:0, borderRadius:50,margin:6, height:48, width:48, 
                                                justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                                                    <Text > 
                                                    <CustomIcon name={item.icon} size={24} color={item.estatus==1 ? 'white': 'grey'} ></CustomIcon>
                                                    </Text>
                                                </View>

                                                {/* titulo */}
                                                <View style={{width:'100%', justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                                                    <Text style={{fontFamily:'Roboto-Regular', fontSize:14, textAlign:'center'}}>{item.opcion.length >10 ? item.opcion : item.opcion+ `\n`}</Text>
                                                </View>

                                            </View>

                                            
                                            
                                            
                        
                                        </View>
                            </View>
                    </TouchableOpacity> : <View></View>
    )
}

const renderSeparator = () =>{
    return (
         <Spacer height={17} ></Spacer>
    )
}


return (
    <View style={{ flex:1, width:'100%', alignItems:'flex-start', top:10, marginHorizontal:16}}>
         
         <View style={{flex:1,width:'100%',justifyContent:'center', }}>
    
            <FlatList data={usuario.tipo===TipoUsuario.COLABORADOR ? menuOpiniones : menuOpinionesTerciario} 
                scrollEnabled={true}
                horizontal={true}
                renderItem={ ({ item,index }) =>renderUpdateItem(item) } 
                keyExtractor={(item) => item.id+item.opcion} 
                ItemSeparatorComponent={ () => renderSeparator()}
            />
        </View>
    </View>
) 
}