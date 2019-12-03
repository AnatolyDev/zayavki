import axios from 'axios';

const instance =  axios.create(
        {
            baseURL: ' https://api.cmsmagazine.ru/v1',
            timeout : 5000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )

export const zayavkiAPI = {
    getAllZayavki() {
        //return instance.get(`/instrumentsList?instrument_type_code=${instrument_type_code}&page=${page}`)
    }
}