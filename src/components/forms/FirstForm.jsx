import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../utils/updateAction";
import Layout from '../layout/Layout';


const FirstForm = (props) => {
    const { register, handleSubmit,  getValues, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("/domicilio");
    };
    return (
    <Layout >
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='email'>Dato</label>
                <input id='email' type='text' {...register("dato1", { required: 'Es necesario introducir un correo electrónico'})} defaultValue={state.data.dato1} />
                <button type="submit" >Registro</button>
            </form>
        </div>
    </Layout>
    )
}

export default withRouter(FirstForm);
