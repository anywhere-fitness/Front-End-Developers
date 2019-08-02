
import React,{useState} from 'react';
import Person from './Person'
import Form from './Form'
import Classes from './claas'
import '../App.css';
import Welcome from './Welcome'
import SignOut from './SignOut';



export const ClientDashboard =()=> {
    const [personList, setPersonList] = useState([])

    const submit = person => setPersonList([...personList, person])
  
    const update = single => setPersonList([...personList.map(person => {
      if (single.id === person.id) return single
      return person
    })])
  
    const del = single => setPersonList([...personList.filter(person => single.id !== person.id)])
    return (
    <div className ="form-container2">

        <SignOut />,<Welcome /> 
      <div className='cont'>
        <h1> UPCOMING CLASSES</h1>
        <div className='list'>
          {personList.map((person, index) => (
            <Person key={index}
              update={update}
              del={del}
              person={person}
            />
        
          ))}
          </div>
        </div>
        <div>
        <Form className="submit-form" submit={submit} />
        <Classes />
        </div>
      
      </div>
    );
  }