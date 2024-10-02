/*Page main NextUi */
'use client'
import {Button} from '@nextui-org/button';
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure, Input} from "@nextui-org/react";

import React from 'react';

export default function Page() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
   <>
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <p className="text-white text-2xl font-semibold">Implementación de NextUI</p>
      <div>
        <Button className="bg-gradient-to-tr from-red-600 to-yellow-500 text-white shadow-lg" onPress={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="">Registro de nueva incidencia</ModalHeader>
              <ModalBody>
              <Input type="email" label="Email" />
              <Input type="email" label="Email" placeholder="Enter your email" />
              <Input type="email" label="Email" />
              <Input type="email" label="Email" placeholder="Enter your email" />
              <Input type="email" label="Email" />
              <Input type="email" label="Email" placeholder="Enter your email" />
              <Input type="email" label="Email" />
              <Input type="email" label="Email" placeholder="Enter your email" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
    </div>   
   </>
  );
}



/* import React from 'react'

export default function page() {
  return (
    <div>
        <p className=''>implementacion de NextUi</p>
    </div>
  )
} */
