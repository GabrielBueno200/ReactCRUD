import React from 'react';

export default props => 
    <div className="row">
    <div className="col-md-12">
        <table className="table mt-4 table-dark ">
            <thead>
                <tr> 
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            
            </thead>

            <tbody>
                {props.children}
            </tbody>
        </table>
    </div>
    </div>