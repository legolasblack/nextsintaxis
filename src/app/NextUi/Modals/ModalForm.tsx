import React from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button
} from "@nextui-org/react";
import IncidenciaForm from './IncidenciaForm';
import stylemod from'./modal.module.css'


interface Props {
    isOpen: boolean;
    onOpenChange:(isOpen:boolean)=>void;
}

export default function ModalForm({isOpen, onOpenChange }: Props) {
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl' className={stylemod.customModal} backdrop='blur'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-white text-center">Registro de nueva incidencia</ModalHeader>
                            <ModalBody>
                                <IncidenciaForm/>
                                
                                {/* <Input type="email" label="Email" />
                                <Input type="email" label="Email" placeholder="Enter your email" />
                                <Input type="email" label="Email" />
                                <Input type="email" label="Email" placeholder="Enter your email" />
                                <Input type="email" label="Email" />
                                <Input type="email" label="Email" placeholder="Enter your email" />
                                <Input type="email" label="Email" />
                                <Input type="email" label="Email" placeholder="Enter your email" /> */}
                            </ModalBody>
                            <ModalFooter>
                                <Button color={'danger'} variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color={'primary'} onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}