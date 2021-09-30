import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../utils/updateAction";
import Layout from '../layout/Layout';
import HeaderForms from '../headerForms/HeaderForms';
import ProgressIndicator from '../progressIndicator/progressIndicator';
import '../../styles/forms/FirstForm.scss';

const FirstForm = (props) => {
    const { register, handleSubmit,  getValues, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("/domicilio");
    };
    return (
    <Layout >
        <HeaderForms />
            <ProgressIndicator step1={true} />
        <div className="Form--container">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row-1'>
                    <div className='inputContainer M'>
                        <label htmlFor='razon_social'>Razón Social</label>
                        <input id='razon_social' type='text' {...register("razon_social")} defaultValue={state.data.razon_social} />
                    </div>
                    <div className='inputContainer XXL'>
                        <label htmlFor='nombre_comercial'>Nombre comercial</label>
                        <input id='nombre_comercial' type='text' {...register("nombre_comercial")} defaultValue={state.data.nombre_comercial} />
                    </div>
                </div>
                <div className='row-2'>
                    <div className='inputContainer M'>
                        <label htmlFor='rfc'>RFC</label>
                        <input id='rfc' type='text' {...register("rfc")} defaultValue={state.data.rfc} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='nacionalidad'>Nacionalidad</label>
                        <input id='nacionalidad' type='text' {...register("nacionalidad")} defaultValue={state.data.nacionalidad} />
                    </div>
                    <div className='inputContainer M'>
                        <label htmlFor='fecha_constitucion'>Fecha de constitución</label>
                        <input id='fecha_constitucion' type='date' {...register("fecha_constitucion")} defaultValue={state.data.fecha_constitucion} />
                    </div>
                </div>
                <div className='row-3'>
                    <div className='inputContainer SM'>
                        <label htmlFor='regimen_fiscal'>Regimen fiscal</label>
                        <input id='regimen_fiscal' type='text' {...register("regimen_fiscal")} defaultValue={state.data.regimen_fiscal} />
                    </div>
                    <div className='inputContainer M'>
                        <label htmlFor='industria'>Industria</label>
                        <input id='industria' type='text' {...register("industria")} defaultValue={state.data.industria} />
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

export default withRouter(FirstForm);
