import React from 'react';
import Button from '../Form/Button'


export default props => 
        props.list.map(user => 
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <Button action={props.load} actionType="" icon="pencil" background="warning" ml='' param={user}/>
                    <Button action={props.remove} actionType="" icon="trash" background="danger" ml='ml-2' param={user}/>
                </td>
            </tr>
        )