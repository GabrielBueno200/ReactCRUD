import React from 'react'
import Main from '../template/Main'
import './Home.css'

export default props => 
    <Main icon="home" title="Início"
        subtitle="Projeto: CRUD em ReactJS">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">
            Quisque finibus auctor ullamcorper. 
            Quisque at orci a libero commodo imperdiet accumsan et libero. 
            Fusce sit amet sapien sed est lobortis vehicula. Cras faucibus nulla leo, 
            nec varius quam euismod ut. Nunc ut rutrum orci, ut lacinia sem. Curabitur 
            sollicitudin arcu ut eros convallis, ut pulvinar lacus dapibus. 
            Morbi eleifend et dui sit amet ultricies. Sed euismod ornare tellus elementum dapibus.
        </p>
    </Main>