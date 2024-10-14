interface PatientData {
    personalDetails: {
        name: string;
        age: number;
    };
    contactDetails: {
        email: string;
        phone: string;
    };
    address: {
        street: string;
        city: string;
        zip: string;
    };
    workHistory: Array<{
        company: string;
        position: string;
        startDate: string;
        endDate: string;
    }>;
}

function isValidPatientData(data: any): data is PatientData {
    return (
        data &&
        typeof data.personalDetails === 'object' &&
        typeof data.contactDetails === 'object' &&
        typeof data.address === 'object' &&
        Array.isArray(data.workHistory) &&
        // Validaciones para los campos requeridos
        typeof data.personalDetails.name === 'string' &&
        typeof data.personalDetails.age === 'number' &&
        typeof data.contactDetails.email === 'string' &&
        typeof data.contactDetails.phone === 'string' &&
        typeof data.address.street === 'string' &&
        typeof data.address.city === 'string' &&
        typeof data.address.zip === 'string'
    );
}

async function fetchPatientData(url: string): Promise<PatientData> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(`Error: ${response.status} - ${errorResponse.message || 'Error desconocido'}`);
        }

        const data = await response.json();

        // Validar los datos antes de usarlos
        if (!isValidPatientData(data)) {
            throw new Error('Datos del paciente incompletos o inválidos');
        }

        return data;
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
        throw error; // Re-lanzar el error para manejarlo más adelante si es necesario
    }
}

// Uso de la función
fetchPatientData('https://api.example.com/patient/1')
    .then(data => {
        console.log('Datos del paciente obtenidos:', data);
    })
    .catch(error => {
        console.error('Error al obtener los datos del paciente:', error);
    });