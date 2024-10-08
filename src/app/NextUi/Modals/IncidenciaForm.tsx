

/* Este formulario ejemplificara las funciones necesarias para amnipular react hook form
y cada uno de los pasos necesarios para utilizar la libreria */


/* Paso 1.- Necesitamos instalar la dependencia por medio de Npm con el comando 'npm install react-hook-form' */
/* Paso 2.- Necesitamos importar la dependencia 'import { useForm } from 'react-hook-form';' en esta ocasion de documentacion solo 
utilizaremos el hook useForm dentro de la documentacion oficial es posible utilizar diferentes hooks */
import { Input } from "@nextui-org/react"
import { color } from "framer-motion";
import { span } from "framer-motion/client";
import { Span } from "next/dist/trace";
import { useForm } from 'react-hook-form';
import style from './IncidenciaForm.module.css'

interface props {
    classname?: string,
}

export default function IncidenciaForm() {

    /*Paso 3.- Utilizamos una constante y creamos el useForm, dentro de la constante vamos a desestrcuturar 
    los componentes que vamos a utilizar
    register: sirve apra crear el Alta de cada input que vamos a controlar en el hook
    handleSubmit: es una funcion que controlara la peticion submit dentro ella podemos encontrar todo lo que 
    se esjecutara para el formulario
    formState: tiene a su vez diferentes propiedades una de ellas es errors
    errors: errors registra todos los errores dentro de un formulario para poder hacerlos identificables y poder 
    manejar los estados de erros mas abajo se ejemplicara
    */
    const { register, handleSubmit, formState: { errors } } = useForm();

    /* Paso 4.- Creamos una funcion handlesubmit igualada al onSubmit para poder controlar todo lo que que va a suceder 
    al momento de enviar el formulario, es importante siempre en el handle submit mandarle la variable data que contendra
    el registro del formualrio */
    const onSubmit = handleSubmit((data) => {

        /* Imprimiremos cada uno de los estados para describirlos en comentarios y verlos los resultados por consola
        data: contiene cada uno de los inputs del formulario que hemos registrado con register
        */
        console.log(data)

    })

    console.log('Errores: ', errors)
    const errorRequerido: string = 'Este campo es obligatorio';
    const errorMinLength: string = 'Este campo es obligatorio  con un minimo de 2 caracteres';

    return (
        <div className="md:w-2/3">
            {/*  <p className="text-lg text-center mb-10">
                <span className="text-white font-bold">Registro de incidencias </span>
            </p> */}

            <form onSubmit={onSubmit} className={style.overflow}>
                <Input
                    type="text"
                    label="Email"
                    className="mb-5"
                    color={errors?.emailNextUi?.type && "danger"} 
                    placeholder={errors.emailNextUi?.type && "Este campo es Obligatorio"} 
                    {...register('emailNextUi',
                        {required:true}
                    )}/>
                <Input type="email" label="Email" placeholder="Enter your email" className="mb-5" />
                <div className="">

                    {/*input Nombre  */}
                    <label htmlFor="name" className="text-sm  font-bold text-white">
                        Nombre del responsable
                    </label>

                    {/* Paso 5.- necesitamos utilizar el register para darle un nombre al input 
                    y esto se consigue 
                    en esta tomaremos tres propiedades para ejemplificar los tipos de error  existen dos maneras 
                    de registrar los errores dentro de la misma propiedad y fuera vamos a ejemplicficcar con nombre y apellido 
                    siendo mas utilizado y mas limpio la manera de apellido 
                    La primer manera consiste en solo declarar dentro del objeto para el register las restricciones que 
                    necesitamos y leerlas directamente del objeto error
                    */}
                    <input
                        id="name"
                        className={(errors?.name?.type) ? "w-full p-3 text-white border border-red-500 mb-1" : "w-full p-3 text-white border border-gray-100"}
                        type="text"
                        placeholder="Nombre"
                        {...register('name',
                            {
                                required: true,
                                minLength: 2,
                                maxLength: 20
                            }
                        )}
                    />
                    {errors?.name?.type == "required" && <span className="text-white bg-red-500 rounded-md px-2">{errorRequerido}</span>}
                    {errors?.name?.type == "minLength" && <span className="text-white bg-red-500 rounded-md px-2">{errorMinLength}</span>}
                    {errors?.name?.type == "maxLength" && <span className="text-white bg-red-500 rounded-md px-2">{errorMinLength}</span>}
                </div>
                <div className="">

                    {/*input Apellido */}
                    <label htmlFor="lastname" className="text-sm  font-bold text-white">
                        Apellido
                    </label>

                    {/*  */}
                    <input
                        id="lastname"
                        className="w-full p-3 text-white border border-gray-100"
                        type="text"
                        placeholder="Nombre"
                        {...register('lastname',
                            {
                                required: true,
                                minLength: 2,
                                maxLength: 20
                            }
                        )}
                    />
                </div>


                {/* input Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="text-sm text-white font-bold">
                        Correo
                    </label>
                    <input
                        id="email"
                        className="w-full p-3 text-white border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register('email')}
                    />
                </div>

                {/* input password  */}
                <div className="mb-3">
                    <label htmlFor="pass" className="text-sm text-white font-bold">
                        Passwod
                    </label>
                    <input
                        id="pass"
                        className="w-full p-3 text-white border border-gray-100"
                        type="password"
                        placeholder="Ingresa tu Password"
                        {...register('password')}
                    />
                </div>


                {/* input confirmacion de password  */}
                <div className="mb-3">
                    <label htmlFor="confirmarpass" className="text-sm text-white font-bold">
                        Passwod
                    </label>
                    <input
                        id="confirmarpass"
                        className="w-full p-3 text-white border border-gray-100"
                        type="password"
                        placeholder="Ingresa tu Password"
                        {...register('confirmarpassword')}
                    />
                </div>

                {/* input fecha de alta*/}
                <div className="mb-3">
                    <label htmlFor="date" className="text-sm text-white font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100 text-white"
                        type="date"
                        {...register('fechaAlta')
                        }
                    />
                </div>

                {/* input select*/}
                <div className="mb-3">
                    <label htmlFor="tipo" className="text-sm text-white font-bold">
                        Selecciona el tipo de Insidencia
                    </label>
                    <select
                        id="tipo"
                        className="w-full p-3  border border-gray-100 text-white"
                        {...register('tipoIncidencia')}

                    >
                        <option value="option1" className="text-white">Faltante de Etiqueta</option>
                        <option value="option2" className="text-white">Mercancia incompleta </option>
                        <option value="option3" className="text-white">Mercancia mal ubicada</option>
                    </select>
                </div>

                {/* input imagenes*/}
                <div className="mb-3">
                    <label htmlFor="img" className="text-sm text-white font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="img"
                        className="w-full p-3  border border-gray-100 text-white"
                        type="file"
                        {...register('pathImage')}
                    />
                </div>


                {/*  <button
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                /> */}
                <button
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                >
                    Envio de Incidencia
                </button>
            </form>
        </div>
    )
}