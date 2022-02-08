import { useContext } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import RNFetchBlob, { RNFetchBlobConfig } from "rn-fetch-blob";
import FileViewer from "react-native-file-viewer";
import { GeneralContext } from "../state/GeneralProvider";

export const useDownloadFile = () => {
   
  const { flags,setFlags } = useContext( GeneralContext );

  const floading=(valor:boolean)=>{
    const payload= flags;
    payload.isLoadingAgenda= valor;
    
    setFlags(payload);
}

  const downloadAndroidFile = (fileUrl:string,extension:string,mime:string) => {
   
 


    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = fileUrl;    

    let file_ext = '.' + extension;
  
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

        RNFetchBlob.android.actionViewIntent(res.path(),mime)  
        

      });
  };


  const downloadFileIOs = async (fileUrl:string,extension:string,mime:string) => {
    var date = new Date();

    const { dirs: {DownloadDir, DocumentDir,CacheDir } } = RNFetchBlob.fs; 
    const {config} = RNFetchBlob; 
    const aPath = Platform.select({ios: CacheDir , android: DownloadDir});
    const fPath = aPath + '/' + Math.floor(date.getTime() + date.getSeconds() / 2)+'.'+extension;

    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        title:'xxxx.png',
        path: fPath,
        mime: mime,
        appendExt: extension,
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
          console.log('res -> ', JSON.stringify(res.path()));
           //setTimeout(() => {
      
        // RNFetchBlob.ios.openDocument(res.path())
         FileViewer.open(res.path(), {
            showOpenWithDialog: true,
            onDismiss: () => {
                  console.log('ventana cerrada...')
                  floading(false)
            },
        }).catch((error) => {
          
        });
          
       
           //}, 2000);
        }).catch(errorMessage => {
          console.log('error al abrir el archivo'),
          console.log(errorMessage);
        });
    };


  const checkPermission = async (urlResource:string,extension:string, mime:string) => {
  
    floading(true)
      // Function to check the platform
      // If Platform is Android then check for permissions.
  
      if (Platform.OS === 'ios') {
        
        await downloadFileIOs(urlResource,extension,mime);
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
            downloadAndroidFile(urlResource,extension,mime);
            console.log('Storage Permission Granted.');
          } else {
            // If permission denied then show alert
           // Alert.alert('Error','Storage Permission Not Granted');
          }
          floading(false)
        } catch (err) {
          // To handle permission related exception
          console.log("++++"+err);
          floading(false)
        }
      }
    };


    return {   checkPermission  }
    
  };