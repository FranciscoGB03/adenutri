import Home from './components/Home';
import NoFound from './components/NotFound';

const ROUTES=[
    { exact:true, path:'/', component:Home },
    { component:NoFound}
];

export default ROUTES;