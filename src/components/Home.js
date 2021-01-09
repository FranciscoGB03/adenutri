import React from 'react';
import Template from '../template/Template';
import {Carousel} from 'react-responsive-carousel';
import imagen1 from '../img/imagen1.jpg';
import imagen2 from '../img/imagen2.jpg';
import imagen3 from '../img/imagen3.jpg';

const Home = () => {
    return (
        <Template>
            <Carousel showArrows={true} showThumbs={true} autoPlay={true}>
                    <div className="" onClick={()=>{alert("hola xolos")}}>
                        <img src={imagen1} alt="Imagen1"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div className="">
                        <img src={imagen2} alt="Imagen2"/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div className="">
                        <img src={imagen3} alt="Imagen3"/>
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
        </Template>
    )
}

export default Home;