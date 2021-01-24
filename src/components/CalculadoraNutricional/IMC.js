import React from 'react';
import Campo from '../../template/Campo';
import produce from 'immer'
import NumberFormat from 'react-number-format';

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
            <form className="d-flex justify-content-start">
                <div className="mr-5">
                    <div className="d-flex justify-content-start">
                    <label htmlFor="unidad" className="text-nowrap mt-5 mr-2">Sistema de unidades:</label>
                    <select className="form-control mt-5" name="unidad" defaultValue="" onChange={actualizaImc}>
                        <option value="metrico">Métrico decimal(kilogramos-metros)</option>
                        <option value="ingles">Inglés(libras-pulgadas)</option>
                    </select>                   
                    </div>
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
                    <p><span className="mr-2">imc:</span><NumberFormat value={imc.imc} displayType="text" fixedDecimalScale={true} decimalScale={2} /></p>
                    <p><span className="mr-2">peso minimo:</span><NumberFormat value={imc.peso_min} displayType="text" fixedDecimalScale={true} decimalScale={2} /></p>
                    <p><span className="mr-2">peso maximo:</span><NumberFormat value={imc.peso_max} displayType="text" fixedDecimalScale={true} decimalScale={2} /></p>
                </div>

            </form>
        </div>
    );
}
export default IMC;