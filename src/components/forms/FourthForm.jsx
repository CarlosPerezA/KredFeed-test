import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../utils/updateAction";
import Layout from '../layout/Layout';
import HeaderForms from '../headerForms/HeaderForms';
import ProgressIndicator from '../progressIndicator/progressIndicator';
import '../../styles/forms/FirstForm.scss';

const FourthForm = (props) => {
    const { register, handleSubmit,  getValues, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("/resultados");
    };
    return (
        <Layout >
        <div className="Form--container">
            <HeaderForms />
            <ProgressIndicator step1={true} step2={true} step3={true} step4={true} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row-1'>
                    <div className='inputContainer XXL'>
                        <label htmlFor='clabe'>CLABE</label>
                        <input id='clabe' type='text' {...register("clabe")} defaultValue={state.data.clabe} />
                    </div>
                    <div className='inputContainer M'>
                        <label htmlFor='banco'>Entidad financiera o Banco</label>
                        <input id='banco' type='text' {...register("banco")} defaultValue={state.data.banco} />
                    </div>
                </div>
                <div className='row-2'>
                    <div className='checkbox'>
                        <input
                            type="radio"
                            value="Yes"
                            {...register("acepto_condiciones", { required: true })}
                            />
                        <label>Acepto los terminos y condiciones</label>
                    </div>
                </div>
                <div className='error--container'>
                {errors.acepto_condiciones &&  <p>Es necesario aceptar los terminos y condiciones</p> }
                </div>
                <div className='buttonContainer'>
                    <button type="submit" >Finalizar</button>
                </div>
            </form>
        </div>
    </Layout>
    )
}

export default withRouter(FourthForm);
