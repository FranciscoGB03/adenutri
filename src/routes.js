import AgendarCita from './components/Cita/AgendarCita';
import About from './components/About';
import Home from './components/Home';
import NoFound from './components/NotFound';
import DatosAntroMedicion from './components/Cita/DatosAntroMedicion';
import RegistroDoctor from './components/Admin/RegistroDoctor';
import Pacientes from './components/Paciente/Pacientes';
import Doctor from './components/Admin/Doctor';

const ROUTES=[
    { exact:true, path:'/', component:Home },
    { exact:true, path:'/About', component:About},
    { exact:true, path:'/agendarCita', component: AgendarCita },
    { exact:true, path:'/antropometricosMedicion', component: DatosAntroMedicion },
    { exact:true, path:'/altaDoctor', component: RegistroDoctor },
    { exact:true, path:'/altaPaciente', component: Pacientes },
    { exact:true, path:'/Doctor', component: Doctor },
    { component:NoFound}
];

export default ROUTES;