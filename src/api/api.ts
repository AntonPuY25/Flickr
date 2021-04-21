import axios from "axios";


// const instance = axios.create({
//     baseURL: 'https://www.flickr.com/services/rest/',
//     withCredentials: true
// })
const apiKey = '1e4d008b9e277248c98d6bec026aaf74';
export const Api = {
    getPhoto(tag:string){
        return axios.get<TypeResponseData>(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=10&page=1&format=json&nojsoncallback=1`).then(response=>{
            return response.data
        })
    }
}
export type TypePhoto = {
    farm:number
    id: string
    isfamily:number
    isfriend: number
    ispublic:number
    owner: string
    secret: string
    server: string
    title: string
}
type TypePhotos = {
    page: number
    pages: number
    perpage: number
    photo: TypePhoto[]
    total: string
}
export type TypeResponseData = {
        photos:TypePhotos
        stat: string
}

export default Api;