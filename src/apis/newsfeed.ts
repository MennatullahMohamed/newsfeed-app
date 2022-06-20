import { IArticle } from "../dtos/article";
import axios from 'axios';

const API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "91675d0f8ed84225867c85102d9c413d";

export function fetchNews(searchText: string = ""): Promise<IArticle[]> {
    return axios.get(`${API_URL}?country=us&apiKey=${API_KEY}&q=${searchText}`)
        .then((res: any) => {
            console.log("res.data0", res)
            if (res.status == 200) {
                console.log("res.data1", res.data.articles)
                return res.data.articles;
            }
            else {
                return []
            }
        })
        .catch((err) => {
            console.log('err', err.response)
            return []
        })
}