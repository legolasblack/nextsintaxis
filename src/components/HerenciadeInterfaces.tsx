//solo las interfaces puede ser heredables a diferencia de los type

interface User {
    name: string;
    age: number;
  }
  
  // Extensión de la interfaz
  interface Admin extends User {
    role: string;
  }
  
  const admin: Admin = {
    name: "Bob",
    age: 40,
    role: "admin",
  };