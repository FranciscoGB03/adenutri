import React from 'react';
import Campo from '../../template/Campo';
import produce from 'immer'

const IMC = ({ imc, actualiza }) => {

    const sistemas = [{ valor: 'decimal', etiqueta: 'Métrico decimal(kilogramos-metros)' }, { valor: 'ingles', etiqueta: 'Inglés(libras-pulgadas)' }];

    const actualizaImc = (e) => {
        actualiza('imc', produce(imc, draft => {
            draft[e.target.name] = e.target.value;
            draft.imc = draft.estatura !== 0 ?
                draft.peso !== 0 && draft.estatura !== 0 ?
                    draft.unidad === 'metrico' ?
                        draft.peso / (draft.estatura * draft.estatura) :
                        (draft.peso / (draft.estatura * draft.estatura)) * 703
                    : 0
                : 0;
            draft.peso_min = draft.estatura !== 0 ?
                draft.unidad === 'metrico' ?
                    (draft.estatura * draft.estatura) * 18.5 :
                    ((draft.estatura * draft.estatura) / (39.37 * 39.37)) * 18.5 * 2.205
                : 0;
            draft.peso_max = draft.estatura !== 0 ?
                draft.unidad === 'metrico' ?
                    (draft.estatura * draft.estatura) * 24.9 :
                    ((draft.estatura * draft.estatura) / (39.37 * 39.37)) * 24.9 * 2.205
                : 0;
        }))
    }

    return (
        <div>
            <form className="d-flex justify-content-between">
                <div>
                    <Campo containerClass="text-nowrap d-flex justify-content-start mt-2"
                        labelClass="mr-2 mt-2"
                        data="unidad"
                        etiqueta="sistema de unidades:"
                        type="text"
                        onChange={(e) => actualizaImc(e)} />
                    <Campo containerClass="text-nowrap d-flex justify-content-start mt-2"
                        labelClass="mr-2 mt-2"
                        data="peso"
                        etiqueta="Peso actual:"
                        type="number"
                        onChange={(e) => actualizaImc(e)} />
                    <Campo containerClass="text-nowrap d-flex justify-content-start mt-2"
                        labelClass="mr-2 mt-2"
                        data="estatura"
                        etiqueta="Estatura:"
                        type="number"
                        onChange={(e) => actualizaImc(e)} />
                </div>
                <div>
                    imc:{imc.imc}
                    peso minimo:{imc.peso_min}
                    peso maximo: {imc.peso_max}
                </div>

            </form>
        </div>
    );
}
export default IMC;