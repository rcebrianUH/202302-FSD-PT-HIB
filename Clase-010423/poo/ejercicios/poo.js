// Crea dos clases en JavaScript, una llamada Student (estudiante)
// y otra llamada Teacher (profesor). Ambas clases deben tener las
// siguientes propiedades:
// name: El nombre de la persona.
// age: La edad de la persona.

// La clase Student también debe tener la propiedad grade (nota).

// La clase Teacher también debe tener la propiedad subject (materia).
// Ambas clases deben tener un método llamado bio que imprima en la consola
// una descripción de la persona con el siguiente formato:

// Mi nombre es [name], tengo [age] años y soy [student/teacher].

// Para la clase Student, la descripción debe incluir también la nota:

// Mi nombre es [name], tengo [age] años, soy un estudiante y mi nota es [grade].
// Para la clase Teacher, la descripción debe incluir también la materia que enseña:

// Mi nombre es [name], tengo [age] años, soy un profesor y enseño [subject].

// Por último, crea un objeto de cada clase y llama al
// método bio() en cada uno de ellos para verificar que funciona correctamente.

class Person {
  age;
  name;
  occupation;

  constructor(name, occupation, age) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
  aplaude() {
    console.log("Plas, plas, plas");
  }
}

class Teacher extends Person {
  subject;
  constructor(age, name, subject) {
    super(name, "profesor", age);
    this.subject = subject;
  }
  bio() {
    console.log(
      `Mi nombre es ${this.name}, tengo ${this.age} años, soy ${this.occupation} y enseño ${this.subject}.`
    );
  }
}

class Student extends Person {
  grade;
  constructor(age, name, grade) {
    super(name, "alumno", age);
    this.grade = grade;
  }
  bio() {
    console.log(
      `Mi nombre es ${this.name}, tengo ${this.age} años, soy ${this.occupation} y mi nota es ${this.grade}.`
    );
  }
}

const personaNormal = new Person(35, "Juanito", "No se sabe");
// console.log(personaNormal);

const profesorMates = new Teacher(55, "Paquito", "matemáticas");
// console.log(profesorMates);
profesorMates.bio();
profesorMates.aplaude();

const alumno = new Student(15, "Menganito", 3);
// console.log(alumno);
alumno.bio();
alumno.aplaude();

