const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addTurno = (obj, addKey, value) => {
  Object.assign = (obj, lesson2);
  addKey = lesson2.value = "manhã";

  obj.addKey = value;
  console.log(obj);
};
