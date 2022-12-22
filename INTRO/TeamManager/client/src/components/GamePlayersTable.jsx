import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const GamePlayersTable = (props) => {
    const { num, players, changeGameStatus} = props;
    const [game, setGame] = useState(1);
    const [gameStatus, setGameStatus] = useState(["Undecided", "Not Playing", "Playing"]);
    useEffect(()=>{
        if(num==1)setGame("firstGame");
        else if(num==2)setGame("secondGame");
        else if(num==3)setGame("thirdGame");
    })
    return (
        <table className='table mx-auto'>
            <thead>
                <tr className='row mx-auto'>
                    <th className='col'>Player Name</th>
                    <th className='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, i)=><tr className='row mx-auto'>
                    <td className='col'>{player.name}</td>
                    <td className='col d-flex justify-content-between'>
                        <button onClick={e=>changeGameStatus(game,player._id,2)}>Playing</button>
                        <button onClick={e=>changeGameStatus(game,player._id,1)}>Not Playing</button>
                        <button onClick={e=>changeGameStatus(game,player._id,0)}>Undecided</button>
                        <span>{gameStatus[player[game]]}</span>
                        </td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default GamePlayersTable