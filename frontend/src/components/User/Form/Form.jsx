import React from 'react';
import Input from './Input';
import Button from './Button';
import {getChildrenOfType} from '../../../utils/utils';


export default props => 
    <div className="form">
        <div className="row">
            {getChildrenOfType(props, Input)}
        </div>


        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                {getChildrenOfType(props, Button)}
            </div>
        </div>
    </div>