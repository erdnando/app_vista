import React from 'react';
import {  Text, View } from 'react-native';

export const IndicadorSimple = () => {

    return    <View style={{ flexDirection:'row',justifyContent:'flex-start',marginTop:0,left:28 }}>
                                  
                  <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                    <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#FF9029', marginRight: 8,}}/>
                    <Text style={{ height: 16,color: 'gray'}}>No realizado</Text>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center', marginEnd:10}}>
                    <View style={{height: 12,width: 12, borderRadius: 6, backgroundColor: '#83AE69',marginRight: 8, }} />
                    <Text style={{height: 16,color: 'gray',}}>Realizado</Text>
                  </View>

              </View>    
}
