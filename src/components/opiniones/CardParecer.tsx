import React, { useState,useContext } from 'react';
import { View } from 'react-native';
import { GeneralContext } from '../../state/GeneralProvider';
import { TextOportunidadIcono } from '../oportunidad/TextOportunidadIcono';
import { Select } from '../Select';
import { Spacer } from '../Spacer';
import { InputMensaje } from './InputMensaje';
import { LabelTexto } from './LabelTexto';
import { RoundedSelectors } from './RoundedSelectors';


export const CardParecer = ( ) => {

  const { opiniones,setOpiniones} = useContext(GeneralContext);

  //const [motivo, setMotivo] = useState('');
  //const  [justificativa, setJustificativa]  = useState(''); 
  const items=[   { label: "JavaScript", value: "JavaScript" },
  { label: "TypeStript", value: "TypeStript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "C++", value: "C++" },
  { label: "C", value: "C" },
  ];

      return <View  style={{flex:1, width:'100%',backgroundColor: 'white', borderRadius:10,padding:15,elevation:6,
                            shadowColor: "black", shadowOpacity: 0.4,shadowOffset: {
                            height: 3, width: 3 }
                            }}>
                

                      <View style={{ flexDirection:'column', margin:8, justifyContent:'flex-start',  alignItems:'flex-start'}}>

                          {/* cliente */}
                          <LabelTexto  fontSize={12} color='#838892' label='' value='Cliente'></LabelTexto>
                          {/* titulo */}
                          <LabelTexto  fontSize={18} color='#454A53' label='' value='Lorem ispum dolor sit amet'></LabelTexto>
                          {/* line */}
                          <View style={{width:'100%', marginBottom:8, height:2,backgroundColor:'#BCC1CB'}}></View>
                          {/* Orgao */}
                          <LabelTexto  fontSize={14} color='#454A53' label='Orgao:' value=' Lorem ispum dolor sit amet'></LabelTexto>
                          {/* Edital */}
                          <LabelTexto  fontSize={14} color='#454A53' label='Edital:' value=' 0000000000'></LabelTexto>
                          {/* Modalidade */}
                          <LabelTexto  fontSize={14} color='#454A53' label='Modalidade:' value=' Lorem ispum dolor sit amet'></LabelTexto>
                          {/* Plataforma */}
                          <LabelTexto  fontSize={14} color='#454A53' label='Plataforma:' value=' Lorem ispum dolor sit amet'></LabelTexto>
                          {/* Status */}
                          <LabelTexto  fontSize={14} color='#FF9029' label='Status:' value=' Aguardando parecer'></LabelTexto>

                          <Spacer height={10}></Spacer>
                          <TextOportunidadIcono icono='ic_round-date-range' colorIcono='#838892' label='Data Certame' colorValor='#838892' valor='000000 00:00'  size={15} ></TextOportunidadIcono>
                          <TextOportunidadIcono icono='ic_baseline-place' colorIcono='#838892' label='Data Certame' colorValor='#838892' valor='000000 00:00'  size={15} ></TextOportunidadIcono>
                          <TextOportunidadIcono icono='ic_baseline-cloud-download' colorIcono='#838892' label='' colorValor='#838892' valor='Download do Edital'  size={15} ></TextOportunidadIcono>
                        
                          <RoundedSelectors label1='GO' label2='NO GO' 
                          onPress1={()=>{
                            console.log('go')
                            const payload = opiniones;
                            payload.parecer.estatusGO=1;
                            setOpiniones(payload);
                          }}
                          onPress2={()=>{
                            console.log('no go')
                            const payload = opiniones;
                            payload.parecer.estatusGO=2;
                            setOpiniones(payload);

                          }} ></RoundedSelectors>

                          <Spacer height={24}></Spacer>
                          <Select placeholder='Motivo' campo={opiniones.parecer.motivo} items={items}
                            onValueChange={function (value: any, index: number): void {

                                  const payload = opiniones;
                                  opiniones.parecer.motivo=value;
                                  setOpiniones(payload);
                            }} 
                          />
                          <Spacer height={0}></Spacer>
                          <InputMensaje placeholder='Justificativa' campo={opiniones.parecer.justificacion}
                          longitud={opiniones.parecer.justificacion.length} 
                          onChangeMensaje={(msg:string)=>{
                              const payload = opiniones;
                              opiniones.parecer.justificacion=msg;
                              setOpiniones(payload);
                          }}></InputMensaje>


                    </View>


                    
            </View> 
          
}
