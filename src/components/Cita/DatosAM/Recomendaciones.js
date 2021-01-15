import React from 'react'
import produce from 'immer';

const Recomendaciones = ({ recomendaciones, actualiza }) => {  

  /*Actualiza la info en la tabla*/
  const actualizaRecomendacion = (idx,e) => {
    actualiza('recomendaciones',produce(recomendaciones, draft => {
      draft[idx][e.target.name] = e.target.value;
      draft[idx].touched=true;
    }));
  }
    
  const guardar=()=>{    
    console.log(recomendaciones);
  }
  return (
    <div>
      <div className="form-group">
        <div>
        <h1 className="m-4">Recomendaciones alimenticias</h1>
        <button type="button" className="btn btn-outline-info" onClick={()=>guardar()}>Guardar</button>
        </div>
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
              {(recomendaciones || []).map((recomendacion, idx) =>
                <tr key={idx}>
                  <th>{recomendacion.etiqueta}</th>
                  <td>
                    <input name="preferir" value={recomendacion.preferir} onChange={(e) => actualizaRecomendacion(idx,e)} />
                  </td>
                  <td>
                    <input name="evitar" value={recomendacion.evitar} onChange={(e) => actualizaRecomendacion(idx,e)} />
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

