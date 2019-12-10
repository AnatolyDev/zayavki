import React, { useState, useEffect } from 'react';
import Catalog from '../../components/Catalog';
import { zayavkiAPI } from '../../api';
import { connect } from 'react-redux';
import { addUnit } from '../../actions/units.js';

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
        <Catalog rows={rows} clickFunc={props.addUnit} buttonText='Добавить' />
    )
}

const mapDispatchToProps = {
    addUnit
}

export default connect(
    null,
    mapDispatchToProps
)(CatalogContainer);