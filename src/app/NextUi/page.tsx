/*Page main NextUi */
'use client'
import {Button} from '@nextui-org/button';
import {useDisclosure} from "@nextui-org/react";

import React from 'react';
import ModalForm from './Modals/ModalForm';

export default function Page() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
   <>
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <p className="text-white text-2xl font-semibold">Implementación de NextUI</p>
      <div>
        <Button className="bg-gradient-to-tr from-red-600 to-yellow-500 text-white shadow-lg" onPress={onOpen}>Registro de incidencias</Button>
        <ModalForm isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </div>   
   </>
  );
}




// dejo aqui una guia de como masomenos debe de ir el modal con el manejo del formulario

  /* import { useState } from 'react';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Aquí va la lógica de validación
    return formData.field1 && formData.field2; // Ejemplo simple
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/incidencias', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Manejo de respuesta exitosa
          onClose(); // Cerrar modal
        }
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    } else {
      // Manejo de errores de validación
      alert('Por favor, complete todos los campos requeridos.');
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" name="field1" value={formData.field1} onChange={handleChange} />
        <input type="text" name="field2" value={formData.field2} onChange={handleChange} />
        <input type="text" name="field3" value={formData.field3} onChange={handleChange} />
        <input type="text" name="field4" value={formData.field4} onChange={handleChange} />
        <button type="submit">Enviar</button>
        <button type="button" onClick={onClose}>Cerrar</button>
      </form>
    </div>
  );
};

export default Modal; */