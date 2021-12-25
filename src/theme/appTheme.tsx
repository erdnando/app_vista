import { StyleSheet } from "react-native";

export const colores = {
   primary : 'black',
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        marginBottom:10,
    },
    botonGrande:{
        width : 100,
        height : 100,
        backgroundColor : 'red',
        borderRadius : 8,
        alignItems : 'center',
        justifyContent:'center',
        marginRight:10
    },
    botonGrandeTexto:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    avatarContainer:{
     alignItems:'center',
     marginTop:10
    },
    avatar:{
        width:150,
        height:150,
        
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal:30,

    },
    menuTexto:{
       fontSize:20,

    },
    menuBoton:{
      marginVertical:10
    },

});