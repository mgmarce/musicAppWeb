import React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import imgLogin from '../img/iniciar_sesion.png'
import Styles from '../styles/Login.module.css'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
   
    return (
        <>
        {/*
        <section className={Styles.contenedor}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Registrate</h2>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                    id="name"
                    {...register('name', { required: 'Este campo es requerido' })}
                />
                {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', {
                        required: 'Este campo es requerido',
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: 'Correo electrónico inválido',
                        },
                    })}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    id="password"
                    type="password"
                    {...register('password', {
                        required: 'Este campo es requerido',
                        minLength: {
                            value: 6,
                            message: 'La contraseña debe tener al menos 6 caracteres',
                        },
                    })}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
            </div>

            <button type="submit">Registrar</button>
        </form>
        </section>
        
        */}
        <section className={`${Styles.card_estilo}`}>
            <div className={`${Styles.card_body} card d-block mx-auto`}>
                <div className={Styles.card_linea}></div>
                <div className={`${Styles.card_contenido} card-body`}>
                    <img src={imgLogin} className='d-block mx-auto mb-3' alt="" />
                    <h4 className="card-title text-center">Inicia sesión</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input  className="form-control" 
                                    id="email"
                                    type="email"
                                    {...register('email', {
                                        required: 'Este campo es requerido',
                                        pattern: {
                                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                            message: 'Correo electrónico inválido',
                                        },
                                    })}
                            />{errors.email && <span className='form-text text-danger'>{errors.email.message}</span>}
                            {/** form-text */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input className="form-control" 
                                    id="password"
                                    type="password"
                                    {...register('password', {
                                    required: 'Este campo es requerido',
                                    minLength: {value: 6, message: 'La contraseña debe tener al menos 6 caracteres',},
                                    })}
                            />{errors.password && <span className='form-text text-danger'>{errors.password.message}</span>}
                        </div>
                        <button type="submit" className={`${Styles.card_button}`}>Ingresar</button>
                    </form>
                    <Link to="/" className="link">¿Aún no tienes cuenta? Regístrate</Link>
                </div>
                <div className={Styles.card_linea}></div>
            </div>
        </section>
        </>
    );
};

export default Login;
