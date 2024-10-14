'use client'
import React from 'react'
import { Button } from '@nextui-org/button';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Input,
    Textarea,
    Select,
    SelectItem
} from "@nextui-org/react";
import CardIncidencia from '../cards/CardIncidencia';
/* Importaciones de toastify notificaciones */
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* Importaciones de toastify notificaciones */
import { animals, incidenciasList } from './catalogoIncidencias';


type PropsMainScreen = {}

export default function MainScreen({ }: PropsMainScreen) {
    console.log(animals);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const notify = () => toast.success("Wow so easy!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
    });
    const notifyincidenciaNew = () => toast.success("Incidencia agregada con exito!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
    });
    return (
        <>
            <ToastContainer />
            <div className="flex flex-col w-full ml-64">
                <div className='m-4'>
                    <Button className="bg-gradient-to-tr from-violet-600 to-red-600 text-white shadow-lg m-4" onPress={onOpen}>Registro de incidencia</Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='2xl'>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="">Registro de nueva incidencia</ModalHeader>
                                    <ModalBody>
                                        <Input type="text" label="Numero de guia" placeholder='Ingresa un numero de guia valido' className='mb-4'/>
                                        <Select
                                            label='Tipo de incidencia'
                                            placeholder='Selecciona la incidencia correspondiente'
                                            className='mb-4'>
                                            {incidenciasList.map((incidencia) => (
                                                <SelectItem key={incidencia.key}>
                                                    {incidencia.label}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                
                                        <Textarea required type='text' label="Comentarios" placeholder='Ingresa la descripcion detallada de la incidencia' className='mb-4' />
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={notifyincidenciaNew}>
                                            Register
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
                <div className='flex flex-row justify-between w-full'>
                    <div className='w-1/3 bg-gray-200 p-2 text-center m-2 rounded-md h-screen'>
                        <p className="text-2xl">
                            Incidencias Abiertas
                        </p>
                        <CardIncidencia></CardIncidencia>
                    </div>
                    <div className='w-1/3 bg-gray-200 p-2 text-center m-2 rounded-md h-screen'>
                        <p className="text-2xl">
                            Incidencias en Resolucion
                        </p>
                    </div>
                    <div className='w-1/3 bg-gray-200 p-2 text-center m-2 rounded-md h-screen'>
                        <p className="text-2xl">
                            Incidencias Cerradas
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}