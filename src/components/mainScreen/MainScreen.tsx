import React from 'react'
import { Button } from '@nextui-org/button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@nextui-org/react";
import CardIncidencia from '../cards/CardIncidencia';



type PropsMainScreen = {}

export default function MainScreen({ }: PropsMainScreen) {
    return (
        <>
            <div className="flex flex-col w-full ml-64">
                <div className='m-4'>
                    <Button className="bg-gradient-to-tr from-violet-600 to-red-600 text-white shadow-lg m-4">Registro de incidencia</Button>
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