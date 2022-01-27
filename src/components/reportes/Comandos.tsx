import React, { useContext } from 'react';
import {  PermissionsAndroid, Platform, Text, TouchableOpacity, View } from 'react-native';
import { useRelatorios } from '../../hooks/useRelatorios';
import { colores } from '../../theme/appTheme';
import { GeneralContext } from '../../state/GeneralProvider';
import RNFetchBlob, { RNFetchBlobConfig } from 'rn-fetch-blob';


export const Comandos = () => {


 //invoke global state
 const {  relatorio,setRelatorio } = useContext( GeneralContext )

 const fileUrl = 'https://1000marcas.net/wp-content/uploads/2020/02/logo-Intel-500x281.png';

    const downloadAndroidFile = () => {
   
      // Get today's date to add the time suffix in filename
      let date = new Date();
      // File URL which we want to download
      let FILE_URL = fileUrl;    
 
      let file_ext = '.' + 'png';
    
      const { config, fs } = RNFetchBlob;
      let RootDir = fs.dirs.DownloadDir;//PictureDir
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          path: RootDir+'/file_' + Math.floor(date.getTime() + date.getSeconds() / 2) +  file_ext,
          description: 'downloading file...',
          notification: true,
          
          // useDownloadManager works with Android only
          useDownloadManager: true,  
           
        },
      };
      config(options)
        .fetch('GET', FILE_URL)
        .then(res => {
          console.log('res -> ', JSON.stringify(res));

          RNFetchBlob.android.actionViewIntent(res.path(),"image/*")  
          

        });
    };


    const downloadFileIOs = async (fileUrl:string) => {
      var date = new Date();
  
      const { dirs: {DownloadDir, DocumentDir,PictureDir } } = RNFetchBlob.fs; 
      const {config} = RNFetchBlob; 
      //const isIOS = Platform.OS == "ios"; 
      const aPath = Platform.select({ios: DocumentDir , android: DownloadDir});
      const fPath = aPath + '/' + Math.floor(date.getTime() + date.getSeconds() / 2)+'.png';
  
      const configOptions = Platform.select({
        ios: {
          fileCache: true,
          title:'xxxx.png',
          path: fPath,
          mime: 'image/*',
          appendExt: 'png',
         notification: true,
        },
      
        android: {
          fileCache: false,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: fPath,
            description: 'Downloading png...',
          }
        },
      });

   
        config(configOptions as RNFetchBlobConfig)
          .fetch('GET', fileUrl)
          .then(res => {        
            //console.log('res -> ', JSON.stringify(res));
            console.log('res -> ', JSON.stringify(res.path()));
             setTimeout(() => {
            //   //RNFetchBlob.ios.previewDocument('file://' + res.path());
            //     //  RNFetchBlob.fs.writeFile(fPath, res.data, 'base64');
             //RNFetchBlob.ios.previewDocument(res.path());//fPath
       
            RNFetchBlob.ios.openDocument(res.path())
            
            //openFile(res.path());
             }, 2000);
          })
          .catch(errorMessage => {
            console.log('error al abrir el archivo'),
            console.log(errorMessage);
          });
      };


    const checkPermission = async () => {
    
        // Function to check the platform
        // If Platform is Android then check for permissions.
    
        if (Platform.OS === 'ios') {
          
          await downloadFileIOs('https://1000marcas.net/wp-content/uploads/2020/02/logo-Intel-500x281.png');
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                buttonPositive:'ok',
                title: 'Storage Permission Required',
                message:'Application needs access to your storage to download File',
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              // Start downloading
              downloadAndroidFile();
              console.log('Storage Permission Granted.');
            } else {
              // If permission denied then show alert
             // Alert.alert('Error','Storage Permission Not Granted');
            }
          } catch (err) {
            // To handle permission related exception
            console.log("++++"+err);
          }
        }
      };





      

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

                    <TouchableOpacity  style={{ borderRadius: 100,  }} onPress={()=>{ 
                      //filtrar
                      //TODO implement api call
                      //checkPermission();






                      }} >
                      <Text  style={{ fontFamily:'Roboto-Regular',fontSize:15,fontWeight:'600', textAlign:'center',color:colores.primary }}>FILTRAR</Text>
                    </TouchableOpacity>

                    <View style={{width:10}}></View>
               </View>

      
}
