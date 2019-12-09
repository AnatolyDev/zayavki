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
    },

    getProcessors() {
        return new Promise((resolve) => {            
            setTimeout(
                () => {
                    resolve({
                        "units" : [
                            {
                                "id" : 101,
                                "name" : "i3",
                                "code" : "code101",
                                "photo" : "1.jpg"
                            },
                            {
                                "id" : 102,
                                "name" : "i5",
                                "code" : "code102",
                                "photo" : "2.jpg"
                            },
                            {
                                "id" : 103,
                                "name" : "i7",
                                "code" : "code103",
                                "photo" : "3.jpg"
                            },
                            {
                                "id" : 104,
                                "name" : "AMD K6",
                                "code" : "code104",
                                "photo" : "4.jpg"
                            },
                            {
                                "id" : 105,
                                "name" : "AMD Athlon x2",
                                "code" : "code105",
                                "photo" : "5.jpg"
                            }
                        ]
                    })
                    
                }, 1000)
            })
    },
}