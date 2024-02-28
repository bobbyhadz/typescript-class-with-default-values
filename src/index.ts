export {};

// EXAMPLE 1 - Set default values for Class properties in TypeScript

class Employee {
  id = 0;
  name = 'Bobby Hadz';
  country = 'Germany';
  tasks: string[] = [];

  vacation: {
    summer: boolean;
    winter: boolean;
  } = {
    summer: false,
    winter: false,
  };
}

const emp1 = new Employee();

emp1.id = 701;
emp1.name = 'Alice';
emp1.country = 'Austria';
emp1.tasks = ['web dev', 'design'];
emp1.vacation = {
  summer: true,
  winter: false,
};

// 👇️ {id: 701, name: 'Alice', country: 'Austria', ...}
console.log(emp1);

// ---------------------------------------------------

// // EXAMPLE 2 - Specifying default values in the constructor method

// class Employee {
//   constructor(
//     public id = 0,
//     public name = 'Bobby Hadz',
//     public tasks: string[] = [],
//   ) {
//     this.id = id;
//     this.name = name;
//     this.tasks = tasks;
//   }
// }

// const emp1 = new Employee(undefined, undefined, ['accounting']);

// emp1.id = 100;

// // 👇️ {id: 100, name: 'Bobby Hadz', tasks: ['accounting']}
// console.log(emp1);
