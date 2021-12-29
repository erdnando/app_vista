import axios from 'axios'


const movieDB = axios.create({
    
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'0bd141a296b8758dbf4de1e8c0b0b469',
        language:'es-ES'
    }
})

export default movieDB;