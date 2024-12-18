//call() => Call metodu ile biz mevcut bir fonksiyonu istediğimiz bir obje üzerşnde çağırabiliyoruz...

const user = {
    firstname : "Akın",
    lastname : "Cengiz"
};
//const firstname = "Deneme";
function getFirstname(){
    //console.log(this);
    console.log(this.firstname);
}

const employee = {
    firstname : "EmployeeFirstName",
    lastname : "EmployeeLastName"
}

const manager = {
    firstname : "ManagerName",
    lastname : "ManagerLastname"
}


function getFullNameAndSalary(salary,department,x){
    console.log(`Firstname : ${this.firstname}\nLastname : ${this.lastname}\nSalary : ${salary}\nDepartment :  ${department}\n${x}`);
}


//getFirstname();
console.log(user);
getFirstname.call(user);
getFirstname.call(employee);

getFullNameAndSalary.call(manager,25000,"İnsan Kaynakları",null);
getFullNameAndSalary.call(employee,15000,"Üretim","Y");

//apply() => apply metodu ile biz mevcut bir fonksiyonu istediğimiz bir obje üzerinde çağırabiliyoruz. Ancak parametreleri dizi olarak gönderiyoruz...

getFullNameAndSalary.apply(manager,[]);
getFullNameAndSalary.apply(employee,[15000,"Üretim",null]);
console.log(employee);
console.log(manager)

//bind() => 

const employeegetFullNameAndSalary = getFullNameAndSalary.bind(employee);
const managergetFullNameAndSalary = getFullNameAndSalary.bind(manager);
console.log(employee);
console.log(manager);

employeegetFullNameAndSalary(15000,"Üretim");

managergetFullNameAndSalary(50000,"CEO")