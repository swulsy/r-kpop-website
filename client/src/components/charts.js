import React, { useState } from 'react';
import BarChart from './barchart';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "./charts.css"

function Charts() {
    const params = useParams();
    const groupName = params.groupName;
    const [state, setState] = useState({ stat: "Comments" });

    function updateStat(newStat) {
        let newState = { stat: newStat };
        setState(newState);
        console.log(state.stat);
    }

    return (
        <div className="container" elevation={4}>
            <Link to="/"><Home className='home' /></Link>
            <h1 className='group'>{groupName}</h1> <br />
            <div className='buttons'>
                <Button variant="outlined"
                    onClick={() => { updateStat("Comments") }}>Comments</Button>
                <Button variant="outlined"
                    onClick={() => { updateStat("Scores") }}>Upvotes</Button>
            </div>
            <div className='bar-container' >
                <BarChart group={groupName} stat={state.stat} />
            </div>
        </div>
    );
}

export default Charts;
