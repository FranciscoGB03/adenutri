import React,{useState} from 'react'
import produce from 'immer';

const Recomendaciones = ({ recomendaciones, actualiza }) => {
  const [valores,setValores]=useState(recomendaciones);

  /*Actualiza la info en la tabla*/
  const actualizaRecomendacion = (idx,campo,valor) => {
    setValores(produce(valores, draft => {
      draft[idx][campo] = valor;
      draft[idx].touched=true;
    }));
  }
  return (
    <div>
      <div className="form-group">
        <h1 className="m-4">Recomendaciones alimenticias</h1>
        <div className="table-responsive-sm">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Concepto</th>
                <th>Preferir</th>
                <th>Evitar</th>
              </tr>
            </thead>
            <tbody className="">
              {(valores || []).map((recomendacion, idx) =>
                <tr key={idx}>
                  <th>{recomendacion.etiqueta}</th>
                  <td>
                    <input name="preferir" value={recomendacion.preferir} onChange={(e) => actualizaRecomendacion(idx,'preferir', e.target.value)} />
                  </td>
                  <td>
                    <input name="evitar" value={recomendacion.evitar} onChange={(e) => actualizaRecomendacion(idx,'evitar', e.target.value)} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Recomendaciones

