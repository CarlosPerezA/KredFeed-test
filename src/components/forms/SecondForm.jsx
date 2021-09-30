import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../utils/updateAction";
import Layout from '../layout/Layout';
import HeaderForms from '../headerForms/HeaderForms';
import ProgressIndicator from '../progressIndicator/progressIndicator';
import '../../styles/forms/FirstForm.scss';

const SecondForm = (props) => {
    const { register, handleSubmit,  getValues, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("/representante-legal");
    };
    return (
        <Layout >
        <div className="Form--container">
            <HeaderForms />
            <ProgressIndicator step1={true} step2={true}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row-1'>
                    <div className='inputContainer XL'>
                        <label htmlFor='calle'>Calle o Avenida</label>
                        <input id='calle' type='text' {...register("calle")} defaultValue={state.data.calle} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='numero_exterior'>Numero exterior</label>
                        <input id='numero_exterior' type='text' {...register("numero_exterior")} defaultValue={state.data.numero_exterior} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='numero_interior'>Numero interior</label>
                        <input id='numero_interior' type='text' {...register("numero_interior")} defaultValue={state.data.numero_interior} />
                    </div>
                </div>
                <div className='row-2'>
                    <div className='inputContainer XL'>
                        <label htmlFor='colonia'>Colonia o urbanización</label>
                        <input id='colonia' type='text' {...register("colonia")} defaultValue={state.data.colonia} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='codigo_postal'>Codigo postal</label>
                        <input id='codigo_postal' type='text' {...register("codigo_postal")} defaultValue={state.data.codigo_postal} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='pais'>País</label>
                        <input id='pais' type='text' {...register("pais")} defaultValue={state.data.pais} />
                    </div>
                </div>
                <div className='row-3'>
                    <div className='inputContainer M'>
                        <label htmlFor='entidad_federativa'>Entidad federativa</label>
                        <input id='entidad_federativa' type='text' {...register("entidad_federativa")} defaultValue={state.data.entidad_federativa} />
                    </div>
                    <div className='inputContainer M'>
                        <label htmlFor='ciudad'>Ciudad o Población</label>
                        <input id='ciudad' type='text' {...register("ciudad")} defaultValue={state.data.ciudad} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='telefono'>Telefono</label>
                        <input id='telefono' type='text' {...register("telefono")} defaultValue={state.data.telefono} />
                    </div>
                </div>
                <div className='buttonContainer'>
                    <button type="submit" >Siguiente</button>
                </div>
            </form>
        </div>
    </Layout>
    )
}

export default withRouter(SecondForm);
