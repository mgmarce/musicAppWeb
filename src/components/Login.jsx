import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from '../styles/Login.module.css'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
   
    return (
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
    );
};

export default Login;
