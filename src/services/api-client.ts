import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        // by having this key in the params section, this query string will always contain the api key.
        key:'ef8e0d4e87b74045ae708594b12593f1'
    }
})