import React, {useState} from "react";
import PropTypes from 'prop-types';
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] =useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] =useState(false);

    // cuando el user agrega gasto

    const agregarGasto = e => {
        e.preventDefault();
        //validad
        if (cantidad <1 || isNaN(cantidad) || nombre.trim()===''){
            guardarError(true);
            return;

        }
        guardarError(false);
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        console.log(gasto)
        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true)
;

        //resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Put your expenses here</h2>

            {error ? <Error mensaje="Both fields are required or budget is incorrect" /> : null}
            <div className="campo">
                <label>What are you spending on?</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Food"
                    value={nombre}
                    onChange={e=> guardarNombre(e.target.value)}
                />
                </div>

            <div className="campo">
                <label>How much?</label>
                <input 
                     type="number"
                     className="u-full-width"
                     placeholder="Ex. 300"
                     value={cantidad}
                     onChange={e => guardarCantidad(parseInt(e.target.value ,10))}
                />
                </div>

            <input
                type="submit"
                className="button button-submit u-full-width"
                value="Add to list"
            />
        </form>
      );
}
 
Formulario.propTypes={
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired

}

export default Formulario;