import React from 'react'
import styled from 'styled-components';


const Farmercard = styled.div`
background-color:${({ name }) => {
        switch (name) {
            case 'Dharmesh':
                return 'lightcoral';
            case 'Ram':
                return 'lightgreen';
            case 'Vishal':
                return 'lightpink';
            case 'Nikunj':
                return 'lightyellow'
            default:
                return 'white';
        }
    }
    };
border:1px solid #ccc;
border-radius: 8px;
padding: 20px;
margin: 10px 0;
box-shadow:2px 2px 8px rgba(0,0,0,0.2);
`

export default function Farmers({ name, age, location }) {

    return (

        <div >
            <Farmercard name={name}>

                <h1>Farmer:{name}</h1>
                <h3>Age:{age}</h3>
                <h3>Location:{location || 'Not Provided'}</h3>
            </Farmercard>
        </div>

    )
}
