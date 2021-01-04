import React, { Component } from 'react';
import {useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';


<h1>Agendar Cita</h1> 
const AgendarCita =()=>{
//----hooks----//
const [AgendarCitas,setAgendarCitas]= useState({idPaciente:'',idDoctor:'',tipocita:''});    
///----Metodos---//
const handleInputChange = (event) =>{
    setAgendarCitas({...AgendarCitas,[event.target.name]:event.target.value})
  
}
const guardar = (event)=>{
    event.preventDefault();
    console.log(AgendarCitas);
}


///---Variable--/
return(
    
     
    <div>
    <div><h2>Registro de cita</h2> </div>
    <form method= "post" onSubmit={guardar}> 
    <div className = "d-flex justify-content start">
    <div>IdPaciente: </div>
    <input name= "IdPaciente"
    value={AgendarCitas.idPaciente}
    onChange= {handleInputChange}/>
</div>

<div className = "d-flex justify-content start">
    <div>IdDoctor: </div>
    <input name= "IdDoctor"
    value={AgendarCitas.idDoctor}
    onChange= {handleInputChange}/>
 </div>

<div className = "d-flex justify-content start">
    <div>Tipo de Cita: </div>
    <input name= "Tipo de Cita"
    value={AgendarCita.tipocita}
    onChange= {handleInputChange}/>
     
    </div>
   

<button className = "btn btn-outline-dark" type="submit">Enviar</button>
</form>
</div>

)

}
export default AgendarCita;