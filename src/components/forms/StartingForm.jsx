import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../../utils/updateAction';
import Layout from '../layout/Layout';
import '../../styles/forms/StartingForm.scss';
import kredFeedLogo from '../../assets/static/logo-black.png';

const StartingForm = (props) => {
    const { register, handleSubmit,  getValues, formState: { errors } } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        actions.updateAction(data);
        props.history.push('/informacion-general');
    };
    return (
        <Layout >
            <div className='startingForm--Container'>
                <div className='startingForm--Container__header'>
                    <h4 className='title'>Bienvenido a</h4>
                    <img src={kredFeedLogo} width={312} height={47} alt='KredFeed Logo' />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputContainer medium'>
                        <label htmlFor='email'>Correo electrónico</label>
                        <input id='email' type='email' {...register('email', { required: 'Es necesario introducir un correo electrónico'})} defaultValue={state.data.email}/>
                    </div>
                    <div className='inputContainer medium'>
                        <label htmlFor='password'>Contraseña</label>
                        <input id='password' type='password' {...register('password',{ validate: (value) => value.length >= 8 })} defaultValue={state.data.password}/>
                        {errors.password && <p>Tu contraseña debe contener minimo 8 caracteres</p>}
                    </div>
                    <div className='inputContainer medium'>
                        <label htmlFor='passwordRequired'>Confirma tu contraseña</label>
                        <input id='passwordRequired' type='password'
                            {...register('passwordConfirmation', {
                                validate: {
                                matchesPreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || 'Las contraseñas no coinciden';
                                    }
                                }
                                
                            })}
                            defaultValue={state.data.passwordConfirmation}
                        />
                        {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
                    </div>
                    <div className='buttonContainer'>
                        <button className='button' type='submit' >Registrate</button>
                    </div>
                </form>
                <div className='startingForm--Container__footer'>
                    <p>¿Ya tienes cuenta? <a href="">Inicia sesión</a></p>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(StartingForm);
