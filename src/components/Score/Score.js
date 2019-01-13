import React from 'react';
import Draggable from 'react-draggable';
import Button from '@material-ui/core/Button';

const Score = ({score, attempt, mistake, resetFct}) => {
    return (
        <Draggable>
        <div className="Score">
            <p>
                Score: {score}/10
            </p>
            <p>
                Tentatives: {attempt}
            </p>
            <p>
                Erreurs: {mistake}
            </p>

            <Button size={'small'} variant={'contained'} className="btnReset" onClick={resetFct}>Reset</Button>
        </div>
        </Draggable>
    )
}

export default Score;