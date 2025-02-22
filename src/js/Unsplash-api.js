import axios from "axios"

export class UnsplashAPI {
    #BASE_URL = 'https://api.unsplash.com/search/photos'
    #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58'
    #query = '';

    async getPopularPhotos(page) {
        const url = `${this.#BASE_URL}?page=${page}&per_page=12&query=popular&orientation=portrait&client_id=${this.#API_KEY}`

        try {
            const response = await axios(url);
            return response.data;
        } catch (error) {
            console.log(error) 
        }
    }

    async getPhotosByQuery(page) {
        const url = `${this.#BASE_URL}?page=${page}&per_page=12&query=${this.#query}&orientation=portrait&client_id=${this.#API_KEY}`

        try {
            const response = await axios(url);
            return response.data;
        } catch (error) {
            console.log(error) 
        }
    }

    set query(newQuery){
        this.#query = newQuery;
    }
    
}