import React from 'react';
import { Table } from 'reactstrap';

const Catalog = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Добавить</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Компьютер 1</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <td>Компьютер 2</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <td>Компьютер 3</td>
                    <td>Otto</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Catalog;