import { PermissionsAndroid, Platform } from "react-native";
import RNFetchBlob, { RNFetchBlobConfig } from "rn-fetch-blob";

export const downloadFile = async () => {
   

  //const fileUrl = 'https://1000marcas.net/wp-content/uploads/2020/02/logo-Intel-500x281.png';

  const downloadAndroidFile = (fileUrl: string,fileExt: string,mime:string) => {
 
    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = fileUrl;    

    let file_ext = '.' + fileExt;
  
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

  const downloadFileIOs = async (fileUrl:string,fileExt: string,mime:string) => {
    var date = new Date();

    const { dirs: {DownloadDir, DocumentDir,PictureDir } } = RNFetchBlob.fs; 
    const {config} = RNFetchBlob; 
    //const isIOS = Platform.OS == "ios"; 
    const aPath = Platform.select({ios: DocumentDir , android: DownloadDir});
    const fPath = aPath + '/' + Math.floor(date.getTime() + date.getSeconds() / 2)+'.'+fileExt;

    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        title:'xxxx'+'.'+fileExt,
        path: fPath,
        mime: mime,
        appendExt: fileExt,
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

//main method
  const prepareDownload = async (fileUrl: string,fileExt: string,mime:string) => {
  
      // Function to check the platform
      // If Platform is Android then check for permissions.
  
      if (Platform.OS === 'ios') {
        
        await downloadFileIOs(fileUrl,fileExt,mime);

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
            downloadAndroidFile(fileUrl,fileExt,mime);
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


    return {   prepareDownload   }
    
  };