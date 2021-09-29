import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../utils/updateAction";
import Layout from '../layout/Layout';

const SecondForm = (props) => {
    const { register, handleSubmit,  getValues, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push("/representante-legal");
    };
    return (
        <Layout >
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='email'>Correo electronico</label>
                <input id='email' type='email' {...register("email", { required: 'Es necesario introducir un correo electrónico'})} defaultValue={state.data.email}/>
                <label htmlFor='password'>Contraseña</label>
                <input id='password' type='password' {...register("password",{ validate: (value) => value.length >= 8 })} defaultValue={state.data.password} />
                {errors.password && <p>Tu contraseña debe ser de al menos 8 caracteres</p>}
                <button type="submit" >Registro</button>
            </form>
        </div>
    </Layout>
    )
}

export default withRouter(SecondForm);
