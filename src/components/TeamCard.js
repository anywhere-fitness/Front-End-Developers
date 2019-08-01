import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../App.css';



export function TeamCard(props) {
    

        return (
            <div className='teamCard'>
                <h1>{props.id}.{props.username}</h1>
            </div>
        );
        }


