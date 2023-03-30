// Utilizando los métodos que hemos aprendido, obtener la empresa con más empleados y una lista de aquellas que tienen más de 12 empleados

const empresas = [
  { nombre: "Empresa A", empleados: 10 },
  { nombre: "Empresa B", empleados: 20 },
  { nombre: "Empresa C", empleados: 30 },
  { nombre: "Empresa D", empleados: 15 },
];

// let listaEmpleados = empresas.map((emp) => emp.empleados);

let maxEmpleados = Math.max(...empresas.map((emp) => emp.empleados));

const mayorEmpresa = empresas.find(
  (empresa) => empresa.empleados === maxEmpleados
);

const mayorEmpresa2 = empresas.find(
  (empresa) =>
    empresa.empleados === Math.max(...empresas.map((emp) => emp.empleados))
);

const grandesEmpresas = empresas.filter((empresa) => empresa.empleados > 12);

console.log(mayorEmpresa);
console.log(grandesEmpresas);
