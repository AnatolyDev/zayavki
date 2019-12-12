import React, { useState, useEffect } from 'react';
import { zayavkiAPI } from '../../api';

import TableOfData from '../TableOfData';

const columns = [
    { id: 'createrName', label: 'Инициатор', minWidth: 170 },
    { id: 'createDate', label: 'Дата создания', minWidth: 170 }
]

const f = () => {}

const Zayavki = () => {
    
    const [rows, setRows] = useState([]);

    useEffect(
        () => {
            async function getData() {
                const data = await zayavkiAPI.getAllZayavki();
                setRows(data.zayavki);
            }
            getData();
        },
        []
    )

    return (       
        <TableOfData columns={columns} rows={rows} buttonFunc={f} buttonText='Подробнее' />
    )
}

export default Zayavki;