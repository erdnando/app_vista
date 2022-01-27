import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import { useDownloadFile } from '../../hooks/useDownloadFile';


export const Comandos = () => {


 //invoke global state
 const {  relatorio,setRelatorio } = useContext( GeneralContext )
// const {  checkPermission } = useDownloadFile();   

    return    <View style={{flexDirection:'row',justifyContent:'flex-end', top:35}}>
                    <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={()=>{  
                      // limpiar
                      const payload= relatorio;
                      payload.filtroFechaInicial='';
                      payload.filtroFechaFinal='';
                      setRelatorio(payload);

                      }}>
                      <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>LIMPIAR</Text>
                    </TouchableOpacity>

                    <View style={{width:50}}></View>

                    <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={ async()=>{ 
                      //filtrar
                      //TODO implement api call
                      //checkPermission('https://1000marcas.net/wp-content/uploads/2020/02/logo-Intel-500x281.png','png','img/*');
                     // checkPermission('https://www.mysu.org.uy/haceclick/folletos/02-el-deseo-sexual.pdf','pdf','application/pdf');
                      

                      }} >
                      <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>FILTRAR</Text>
                    </TouchableOpacity>

                    <View style={{width:10}}></View>
               </View>

      
}
