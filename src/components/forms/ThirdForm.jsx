import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../utils/updateAction";
import Layout from '../layout/Layout';
import HeaderForms from '../headerForms/HeaderForms';
import ProgressIndicator from '../progressIndicator/progressIndicator';
import '../../styles/forms/FirstForm.scss';

const ThirdForm = (props) => {
    const { register, handleSubmit,  getValues, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("/datos-bancarios");
    };
    return (
        <Layout >
        <div className="Form--container">
            <HeaderForms />
            <ProgressIndicator step1={true} step2={true} step3={true} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row-1'>
                    <div className='inputContainer XL'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input id='nombre' type='text' {...register("nombre")} defaultValue={state.data.nombre} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='genero'>Genero</label>
                        <input id='genero' type='text' {...register("genero")} defaultValue={state.data.genero} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='numero_interior'>Fecha de nacimiento</label>
                        <input id='numero_interior' type='date' {...register("numero_interior")} defaultValue={state.data.numero_interior} />
                    </div>
                </div>
                <div className='row-2'>
                    <div className='inputContainer XL'>
                        <label htmlFor='entidad_federativa_nacimiento'>Entidad federativa de nacimiento</label>
                        <input id='entidad_federativa_nacimiento' type='text' {...register("entidad_federativa_nacimiento")} defaultValue={state.data.entidad_federativa_nacimiento} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='pais_nacimiento'>País de nacimiento</label>
                        <input id='pais_nacimiento' type='text' {...register("pais_nacimiento")} defaultValue={state.data.pais_nacimiento} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='nacionalidad'>Nacionalidad</label>
                        <input id='nacionalidad' type='text' {...register("nacionalidad")} defaultValue={state.data.nacionalidad} />
                    </div>
                </div>
                <div className='row-3'>
                    <div className='inputContainer M'>
                        <label htmlFor='curp'>CURP</label>
                        <input id='curp' type='text' {...register("curp")} defaultValue={state.data.curp} />
                    </div>
                    <div className='inputContainer M'>
                        <label htmlFor='rfc'>RFC</label>
                        <input id='rfc' type='text' {...register("rfc")} defaultValue={state.data.rfc} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='estado_civil'>Estado civil</label>
                        <input id='estado_civil' type='text' {...register("estado_civil")} defaultValue={state.data.estado_civil} />
                    </div>
                </div>
                <div className='row-4'>
                    <div className='inputContainer M'>
                        <label htmlFor='domicilio'>Domicilio</label>
                        <input id='domicilio' type='text' {...register("domicilio")} defaultValue={state.data.domicilio} />
                    </div>
                    <div className='inputContainer M'>
                        <label htmlFor='telefono'>Telefono</label>
                        <input id='domicilio' type='text' {...register("domicilio")} defaultValue={state.data.domicilio} />
                    </div>
                    <div className='inputContainer SM'>
                        <label htmlFor='correo_electronico_representante'>Correo electrónico</label>
                        <input id='correo_electronico_representante' type='email' {...register("correo_electronico_representante")} defaultValue={state.data.correo_electronico_representante} />
                    </div>
                </div>
                <div className='row-5'>
                    <div className='file-upload-2'>
                        <input className='custom-file-input-2' value='' id='documento_identificacion' type='file' {...register("documento_identificacion")} defaultValue={state.data.documento_identificacion} />
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

export default withRouter(ThirdForm);
