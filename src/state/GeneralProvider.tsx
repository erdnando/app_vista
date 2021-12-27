import React from 'react'
import { createContext } from 'react';


interface GeneralState{
    isLogedIn: boolean,
    userName: string,
    favoriteIcon: string,
    setIsLogedIn: (isLogedIn: boolean)=>void,
    setUserName: (userName:string)=>void,
    setFavoriteIcon: (favoriteIcon:string | undefined )=>void,
    logOut: ()=>void,
}
const GeneralContext = React.createContext({} as GeneralState);

class GeneralProvider extends React.Component{
    
    state = {
        isLogedIn: false,
        userName: '',
        favoriteIcon: '',
    }

    setIsLogedIn = (isLogedIn:boolean) =>{
       this.setState({isLogedIn});
    }

    setUserName= (userName:string) =>{
        this.setState({userName});
     }

     setFavoriteIcon= (favoriteIcon:string | undefined) =>{
        this.setState({favoriteIcon});
     }

     logOut = () =>{
        this.setIsLogedIn(false);
        this.setUserName('');
        this.setFavoriteIcon('');
     }

     render(): React.ReactNode {
         return(
           <GeneralContext.Provider
             value={{
                    isLogedIn: this.state.isLogedIn,
                    userName: this.state.userName,
                    favoriteIcon: this.state.favoriteIcon,
                    setIsLogedIn: this.setIsLogedIn,
                    setUserName: this.setUserName,
                    setFavoriteIcon: this.setFavoriteIcon,
                    logOut: this.logOut,
                    }}
                >
               {this.props.children}
           </GeneralContext.Provider>
         )
     }
}


export { GeneralProvider, GeneralContext }