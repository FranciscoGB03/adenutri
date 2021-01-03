import AgendarCita from './components/AgendarCita';
import About from './components/About';
import Home from './components/Home';
import NoFound from './components/NotFound';
import DatosAntroMedicion from './components/DatosAntroMedicion';
import RegistroDoctor from './components/RegistroDoctor';
import Pacientes from './components/Pacientes';

const ROUTES=[
    { exact:true, path:'/', component:Home },
    { exact:true, path:'/About', component:About},
    { exact:true, path:'/agendarCita', component: AgendarCita },
    { exact:true, path:'/antropometricosMedicion', component: DatosAntroMedicion },
    { exact:true, path:'/altaDoctor', component: RegistroDoctor },
    { exact:true, path:'/altaPaciente', component: Pacientes },
    { component:NoFound}
];

export default ROUTES;