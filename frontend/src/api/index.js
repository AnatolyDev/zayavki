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
                            },
                            {
                                "id" : 106,
                                "name" : "AMD Athlon 2 x2",
                                "code" : "code106",
                                "photo" : "6.jpg"
                            },
                            {
                                "id" : 107,
                                "name" : "AMD Athlon x3",
                                "code" : "code107",
                                "photo" : "7.jpg"
                            },
                            {
                                "id" : 108,
                                "name" : "AMD Athlon x4",
                                "code" : "code108",
                                "photo" : "8.jpg"
                            },
                            {
                                "id" : 109,
                                "name" : "AMD Athlon x6",
                                "code" : "code109",
                                "photo" : "9.jpg"
                            },
                            {
                                "id" : 110,
                                "name" : "AMD Phenom",
                                "code" : "code110",
                                "photo" : "10.jpg"
                            },
                            {
                                "id" : 111,
                                "name" : "AMD Phenom 2",
                                "code" : "code111",
                                "photo" : "11.jpg"
                            }
                        ]
                    })
                    
                }, 1000)
            })
    },
}