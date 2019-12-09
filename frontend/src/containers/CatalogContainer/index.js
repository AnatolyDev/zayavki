import React, { useState, useEffect } from 'react';
import Catalog from '../../components/Catalog';
import { zayavkiAPI } from '../../api';

const rows = [
    {name: 'name1', code: 'code1'},
    {name: 'name2', code: 'code2'},
    {name: 'name3', code: 'code3'},
    {name: 'name4', code: 'code4'},
]

const CatalogContainer = () => {

    const [rows, setRows] = useState([]);

    useEffect(
        () => {
            async function getData() {
                const data = await zayavkiAPI.getProcessors();
                setRows(data.units);
            }
            getData();
        },
        []
    )

    return (
        <Catalog rows={rows}/>
    )
}

export default CatalogContainer;