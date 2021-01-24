import AgendarCita from './components/Cita/AgendarCita';
import About from './components/About';
import Home from './components/Home';
import NoFound from './components/NotFound';
import RegistroDoctor from './components/Admin/RegistroDoctor';
import Pacientes from './components/Paciente/Pacientes';
import Doctor from './components/Admin/Doctor';
import Cita from './components/Cita/Cita';
import Calculadora from './components/CalculadoraNutricional/Calculadora';

const ROUTES=[
    { exact:true, path:'/', component:Home },
    { exact:true, path:'/About', component:About},
    { exact:true, path:'/agendarCita', component: AgendarCita },    
    { exact:true, path:'/altaDoctor', component: RegistroDoctor },
    { exact:true, path:'/altaPaciente', component: Pacientes },
    { exact:true, path:'/cita', component: Cita },
    { exact:true, path:'/calculadora', component: Calculadora },
    { exact:true, path:'/Doctor', component: Doctor },
    { component:NoFound}
];

export default ROUTES;