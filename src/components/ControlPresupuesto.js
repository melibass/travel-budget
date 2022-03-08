import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import {revisarPresupuesto} from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 

        <Fragment>

            <div className="alert alert-primary">
                Total budget: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Left: $ {restante}
            </div>
        </Fragment>

     );
}

ControlPresupuesto.propTypes={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired

}
export default ControlPresupuesto;