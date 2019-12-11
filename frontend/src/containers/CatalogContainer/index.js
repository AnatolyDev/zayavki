import React, { useState, useEffect } from 'react';
import TableOfData from '../../components/TableOfData';
import { zayavkiAPI } from '../../api';
import { connect } from 'react-redux';
import { addUnit } from '../../actions/units.js';

const columns = [
    { id: 'name', label: 'Наименование', minWidth: 170 },
    { id: 'code', label: 'Шифр', minWidth: 170 }
]

const CatalogContainer = (props) => {

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
        <TableOfData columns={columns} rows={rows} buttonFunc={props.addUnit} buttonText='Добавить' />
    )
}

const mapDispatchToProps = {
    addUnit : (x) => {
            return dispatch => {
                setTimeout(
                    () => dispatch(addUnit(x)),
                    1000
                )
            }
        }  
}

export default connect(
    null,
    mapDispatchToProps
)(CatalogContainer);