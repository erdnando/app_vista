import React, { useContext, useState } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import vistaApi from '../../api/vista';
import { useDownloadFile } from '../../hooks/useDownloadFile';
import { useParecer } from '../../hooks/useParecer';
import { TipoUsuario } from '../../models/Usuario';
import { GeneralContext } from '../../state/GeneralProvider';
import { colores } from '../../theme/appTheme';
import CustomIcon from '../../theme/CustomIcon';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';
import { Select } from '../Select';
import { Spacer } from '../Spacer';
import { InputMensaje } from './InputMensaje';
import { LabelTexto } from './LabelTexto';
import { RoundedSelectors } from './RoundedSelectors';


export const CardParecer = ( ) => {

  const { opiniones,setOpiniones,parecer,usuario} = useContext(GeneralContext);
  const { checkPermission} = useDownloadFile()
  const { isAllParecerOK,saveParecerTerciario,cargaComboMotivo } = useParecer()
  //const [hasData] = useState(false)

  const items=[   { label: "JavaScript", value: "JavaScript" },
  { label: "TypeStript", value: "TypeStript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "C++", value: "C++" },
  { label: "C", value: "C" },
  ];

 // let urlApi = vistaApi.getUri().toString()
  console.log('-----------------URL-----------')
  const urlArchivo = vistaApi.defaults.baseURL+parecer.parecerSeleccionado.arquivo;

  console.log(urlArchivo);





      return <View  style={{flex:1, width:'100%',backgroundColor: 'white', borderRadius:10,padding:15,elevation:6,
                            shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                            height: 3, width: 3 }
                            }}>
                

                      <View style={{ flexDirection:'column', margin:0, justifyContent:'flex-start',  alignItems:'flex-start'}}>

                          {/* cliente */}
                          <LabelTexto  fontSize={12} color='#838892' label='' value='CLIENTE'></LabelTexto>
                          {/* titulo */}
                          <LabelTexto  fontSize={18} color='#454A53' label='' value={parecer.parecerSeleccionado.opinion}></LabelTexto>
                          {/* line */}
                          <View style={{width:'100%', marginBottom:8, height:2,backgroundColor:'#BCC1CB'}}></View>
                          {/* Orgao */}
                          <LabelTexto  fontSize={14} color='#454A53' label='Orgao: ' value={parecer.parecerSeleccionado.oragao}></LabelTexto>
                          {/* Edital */}
                          <LabelTexto  fontSize={14} color='#454A53' label='Edital: ' value={parecer.parecerSeleccionado.edital}></LabelTexto>
                          {/* Modalidade */}
                          <LabelTexto  fontSize={14} color='#454A53' label='Modalidade: ' value={parecer.parecerSeleccionado.modalidade}></LabelTexto>
                          {/* Plataforma */}
                          <LabelTexto  fontSize={14} color='#454A53' label='Plataforma: ' value={parecer.parecerSeleccionado.plataforma}></LabelTexto>
                          {/* Status */}
                          <LabelTexto  fontSize={14} color='#FF9029' label='Status: ' value={parecer.parecerSeleccionado.estatus.toString()}></LabelTexto>

                          <Spacer height={10}></Spacer>
                          <TextOportunidadIcono icono='ic_round-date-range' colorIcono='#838892' label='Data Certame:  ' colorValor='#838892' valor={parecer.parecerSeleccionado.fechaOpinion} size={15} ></TextOportunidadIcono>
                          <Spacer height={3}></Spacer>
                          <TextOportunidadIcono icono='ic_baseline-place' colorIcono='#838892' label='Localidade:  ' colorValor='#838892' valor={parecer.parecerSeleccionado.ubicacion}  size={15} ></TextOportunidadIcono>
                          
                          <TouchableOpacity onPress={()=>{
                            //http://ec2-3-86-19-112.compute-1.amazonaws.com:8080/vista-api/docs/opportunityDocument/2688.pdf
                            ///docs/opportunityDocument/2688.pdf
                              checkPermission( vistaApi.defaults.baseURL+parecer.parecerSeleccionado.arquivo ,'pdf','application/pdf');
                            }} style={{justifyContent:'center',alignContent:'center',alignItems:'center',height:20}}>
                              
                              <View style={{flex:1,flexDirection:'row',marginLeft:2, justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                                <CustomIcon  name='ic_baseline-cloud-download' size={25} color='#838892'></CustomIcon>
                                <Text style={{fontFamily:'Roboto-Regular', fontSize:15,fontWeight:'400', textAlign:'justify',color:'blue',marginTop:3,marginLeft:-2}}>  Download do Edital</Text>
                              </View>
                          </TouchableOpacity>
                        
                          <Spacer height={8}></Spacer>

                          <RoundedSelectors label1='GO' label2='NO GO' 
                            onPress1={()=>{
                              console.log('go')
                              const payload = opiniones;
                              payload.parecer.estatusGO=1;

                              //set all valores in go
                              payload.valores.forEach(function(item,index){
                                item.go=true;
                              });

                              payload.allDisabledforNoGo=false;


                              setOpiniones(payload);
                            }}
                            onPress2={()=>{
                              console.log('no go')
                              const payload = opiniones;
                              payload.parecer.estatusGO=2;

                               //set all valores in no go
                               payload.valores.forEach(function(item,index){
                                item.go=false;
                              });

                              payload.allDisabledforNoGo=true;

                              setOpiniones(payload);
                            }}
                          ></RoundedSelectors>

                          <Spacer height={20}></Spacer>

                          {opiniones.parecer.estatusGO===2 ?  
                          <Select placeholder='Motivo' campo={opiniones.parecer.motivo} items={opiniones.catMotivo}
                            onValueChange={function (value: any, index: number): void {

                                  const payload = opiniones;
                                  opiniones.parecer.motivo=value;
                                  setOpiniones(payload);
                            }} 
                          /> : <View style={{height:34}}></View>
                            } 
                 
                          <View style={{marginLeft:-10,paddingHorizontal:3}}>
                            <InputMensaje placeholder='Justificativa' width='95%' campo={opiniones.parecer.justificacion}
                            longitud={opiniones.parecer.justificacion.length} 
                            onChangeMensaje={(msg:string)=>{
                                const payload = opiniones;
                                opiniones.parecer.justificacion=msg;
                                setOpiniones(payload);
                            }}></InputMensaje>
                          </View>


                 {/* <Spacer height={5}></Spacer> */}

                  {/* boton salvar*/}
                  <View style={{flex:0, width:'100%',  alignItems:'center',height:30,backgroundColor:'transparent',
                                justifyContent:'flex-start', alignContent:'center'}}>
                      <TouchableOpacity 
                        disabled={ !isAllParecerOK() ? true : false} 
                        style={{ marginHorizontal:16, borderRadius: 100, width:'97%',
                        backgroundColor: !isAllParecerOK() ? '#BCC1CB' :  colores.primary, 
                        height:48, justifyContent:'center',  }} 
                          onPress= {()=>{
                            //TODO add logic to save parecer
                            console.log('saving parecer..')
                            saveParecerTerciario();
                            //clear parecer
                          }}>
                          <Text style={{ fontFamily:'Roboto-Regular', textAlign:'center',color: isAllParecerOK() ? 'black' : 'white'}}>SALVAR</Text>
                      </TouchableOpacity>
                  </View>

                    </View>


                    
            </View> 
          
}
