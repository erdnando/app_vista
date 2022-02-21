import axios from 'axios'


const vistaApi = axios.create({
    timeout:5000,
    baseURL:'http://ec2-3-86-19-112.compute-1.amazonaws.com:8080/vista-api'
})

export default vistaApi;