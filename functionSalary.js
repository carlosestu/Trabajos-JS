function calculateSalary(role) {
    switch (role) {
        case "ceo":
            return "El salario es de 2200€";
        case "manager":
            return "El salario es de 1800€";
        case "cto":
            return "El salario es de 1800€";
        case "developer":
            return "El salario es de 1500€";
            return;
        case "other":
            return "El salario es de 1000€";
    }
  }
  
  const ceoSalary = calculateSalary('ceo');
  const managerSalary = calculateSalary('manager');
  const ctoSalary = calculateSalary('cto');
  const developerSalary = calculateSalary('developer');
  const otherSalary = calculateSalary('other');
  
  console.log(ceoSalary);
  console.log(managerSalary);
  console.log(ctoSalary);
  console.log(developerSalary);
  console.log(otherSalary);