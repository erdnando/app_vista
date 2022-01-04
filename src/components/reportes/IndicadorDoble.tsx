import React from 'react';
import {  Text, View } from 'react-native';

export const IndicadorDoble = () => {

    return <View style={{ flexDirection:'column',justifyContent:'space-evenly',marginTop:0,left:25 }}>
                    <View style={{width:'100%', flexDirection:'row'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                          <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#83AE69', marginRight: 8,}}/>
                          <Text style={{ height: 16,color: 'gray'}}>Vencidas</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                          <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#B85050',marginRight: 8, }} />
                          <Text style={{height: 16,color: 'gray',}}>Perdidas</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#F9A61A',marginRight: 8, }} />
                          <Text style={{height: 16,color: 'gray',}}>Suspensas</Text>
                        </View>
                    </View>

                    <View style={{width:'100%', flexDirection:'row'}}>
                          <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                              <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#83AE69', marginRight: 8,}}/>
                              <Text style={{ height: 16,color: 'gray'}}>Fracasadas</Text>
                          </View>

                          <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                              <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#B85050',marginRight: 8, }} />
                              <Text style={{height: 16,color: 'gray',}}>En andamento</Text>
                          </View>
                    </View>
              </View> 
}
