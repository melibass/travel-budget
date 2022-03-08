import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // definir el state

    const [cantidad, guardarCantidad] = useState (0);
    //state para validar
    const [error, guardarError] = useState(false);

    //fuincion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value),10);
    }

    // submit para definir el rpesupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) ){
            guardarError(true);
            return;
        }

        //pasa validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return ( 
        <Fragment>
            <h2>How much do you wanna spend?</h2>

                {error ? <Error  mensaje="Budget is incorrect"/> : null}
          
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Insert how much"
                    onChange={definirPresupuesto}

                />
                <input 
                    type="submit"
                    className="button  u-full-width"
                    value="Apply"
                    
                />
            </form>


        </Fragment>
     );
}
 
Pregunta.propTypes={
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired

}
export default Pregunta;