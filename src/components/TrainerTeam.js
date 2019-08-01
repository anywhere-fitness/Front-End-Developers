import React, { useState , useEffect } from 'react';
import Nav from './TrainerNavBar'
import { TeamCard } from './TeamCard'

export default function TrainerTeam(){
    const [ trainers , setTrainers ] = useState("")


    useEffect(() => {
    fetch('https://anywhere-fitness-be-jrl.herokuapp.com/api/users')
    .then(res => res.json())
    .then(res => {
        setTrainers(res.users)
        console.log(res.users)
    })}, []) 

    return (
        <div>
            <Nav />
            <div>
                {Array.from(trainers).map(trainer => <TeamCard key={trainer.id} id={trainer.id} username={trainer.username}/>)}
            </div>
        </div>
    )
}