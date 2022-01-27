import React from 'react'
import { PermissionsAndroid, Platform, View, Button } from 'react-native';
import { TextOportunidad } from '../../components/oportunidad/TextOportunidad';
import { Spacer } from '../../components/Spacer';
import { TextOportunidadIcono } from '../../components/oportunidad/TextOportunidadIcono';
import { HeaderTitle } from '../../components/HeaderTitle';
import { gstyles } from '../../theme/appTheme';
import { useSearch } from '../../hooks/useSearch';
import RNFetchBlob, { RNFetchBlobConfig } from 'rn-fetch-blob';

//import FileOpener from 'react-native-file-opener3';



export const OportunidadScreen = () => {

    const { oportunidadesTab } = useSearch();

    const fileUrl = 'https://1000marcas.net/wp-content/uploads/2020/02/logo-Intel-500x281.png';

    const downloadAndroidFile = () => {
   
      // Get today's date to add the time suffix in filename
      let date = new Date();
      // File URL which we want to download
      let FILE_URL = fileUrl;    
      // Function to get extention of the file url
      //let file_ext = getFileExtention(FILE_URL);
     
      let file_ext = '.' + 'png';
     
      // config: To get response by passing the downloading related options
      // fs: Root directory path to download
      const { config, fs } = RNFetchBlob;
      let RootDir = fs.dirs.PictureDir;
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
          // Alert after successful downloading
          console.log('res -> ', JSON.stringify(res));
          RNFetchBlob.android.actionViewIntent(res.path(),"image/*")  // .ios.previewDocument(res.path());
          //alert('File Downloaded Successfully.');
        });
    };


    const openFile = (fPath:string) =>{


      console.log('abriendo archivo::::::::')
      console.log(fPath);
      // FileOpener.open(fPath,'image/*').then((msg) => {
      //   console.log(msg)
      //     console.log('success!!')
      // },(err) => {
      //     console.log(err)
      // });
    }

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
            //     //RNFetchBlob.ios.openDocument(res.path());
            //  // Alert.alert(CONSTANTS.APP_NAME,'File download successfully');
            
           // RNFetchBlob.ios.openDocument(res.path())
            
            openFile(res.path());
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

      
    return (
        <View style={gstyles.globalTabView}>
              
                {/* <TextOportunidad label='Nome do Cliente' valor='' size={20} colorValor='black' ></TextOportunidad> */}
                <HeaderTitle label='Nome do Cliente' top={20} fontSize={20}></HeaderTitle>
                <Spacer height={20}></Spacer>

                <TextOportunidad label='Orgao: ' valor={oportunidadesTab.razaoSocialOrgao} size={17} ></TextOportunidad>
                <TextOportunidad label='Edital: ' valor={oportunidadesTab.edital} size={17} ></TextOportunidad>
                <TextOportunidad label='Modalidade: ' valor={oportunidadesTab.modalidade} size={17}  ></TextOportunidad>
                <TextOportunidad label='Plataforma: ' valor={oportunidadesTab.plataforma} size={17}  ></TextOportunidad>
                <TextOportunidad label='Status: ' valor={oportunidadesTab.statusOportunidade} colorValor='orange' valueIsBold={true} size={17}  ></TextOportunidad>
                
                <Spacer height={20}></Spacer>
                <TextOportunidadIcono label='data Certame: ' valor={oportunidadesTab.dataCertame} size={17} icono='ic_round-date-range'></TextOportunidadIcono>
                <Spacer height={10}></Spacer>
                <TextOportunidadIcono label='Localidade: ' valor={oportunidadesTab.localidade} size={17} icono='ic_baseline-place'></TextOportunidadIcono>
                <Spacer height={10}></Spacer>
                <TextOportunidadIcono label='' valor='Download do Edital' size={17} icono='ic_baseline-cloud-download'></TextOportunidadIcono>
                {/* <Link to='http://www.redbooks.ibm.com/redbooks/pdfs/sg247363.pdf' target='_blank'   >Download</Link> */}
                <Button title='Download' onPress={()=>{
                      checkPermission();
                }}></Button>
        </View>
    )
}
