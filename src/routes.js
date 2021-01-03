import About from './components/About';
import Home from './components/Home';
import NoFound from './components/NotFound';

const ROUTES=[
    { exact:true, path:'/', component:Home },
    { exact:true, path:'/About', component:About},
    { component:NoFound}
];

export default ROUTES;