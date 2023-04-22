'use strict'


  // Constructor function
 function Information (fullname, department, level,image,id = 0, salary=0) {
    this.fullname = fullname;
    this.department = department;
    this.id = id ;
    this.salary = salary;
    this.level = level;
    this.image = image;
    Information.allEmployee.push(this)
  }
  Information.allEmployee = [];

  
// prototype to generate salary
Information.prototype.minMaxSalary=function (){
          let max
          let min
          let x
          let total
      if(this.level === 'Junior'){
              max= 1000
              min = 500
              this.salary =Math.round(Math.floor(Math.random() * (max - min + 1) ) + min); 
        } if(this.level === 'Mid-Senior'){
              max= 1500
              min = 1000
              this.salary = Math.round(Math.floor(Math.random() * (max - min + 1) ) + min);
               
            } if (this.level === 'Senior'){
              max= 2000
              min = 1500
              this.salary= Math.round(Math.floor(Math.random() * (max - min + 1) ) + min);
               
            }
               total=Math.floor(this.salary - (this.salary*7.5/100))
               total=this.salary
              //  console.log(total)
            return total;
           
          }

  // prototype to generate an employee id number
  Information.prototype.uniqueIdNumber =  function (max, min){
    this.id = Math.round(Math.floor(Math.random() * (max - min + 1) ) + min);
} 


 // prototype to render the data

// const employeeCard = document.getElementById('employeeCard');
// console.log(employeeCard)
// const admin = document.getElementById('Administration');
// console.log(admin)

Information.prototype.render = function () {
  const employeeCard = document.getElementById('employeeCard');
  for (let i =0 ; i<Information.allEmployee.length ; i++){
    // console.log(Information.allEmployee[i])
  }
  if(this.department === 'Administration'){
    const employeeCard = document.getElementById('Administration');
    const imgEl = document.createElement('img');
    const imgdiv=document.createElement('div');
    imgdiv.setAttribute('class','img-content');
    employeeCard.appendChild(imgdiv);
   imgdiv.appendChild(imgEl);
  imgEl.src =this.image;

    const divEle = document.createElement('div');
    employeeCard.appendChild(divEle);

    const para = document.createElement('p')
    para.textContent = `Name: ${this.fullname} - ID: ${this.id}`
    divEle.appendChild(para);

    const para1 = document.createElement('p')
    para1.textContent = `Department: ${this.department} - Level: ${this.level}`
    divEle.appendChild(para1);

    const para2 = document.createElement('p')
    para2.textContent = this.minMaxSalary()
    divEle.appendChild(para2);
  }

  if(this.department === 'Marketing'){
    const employeeCard = document.getElementById('Marketing');
    const imgEl = document.createElement('img');
    const imgdiv=document.createElement('div');
    imgdiv.setAttribute('class','img-content');
    employeeCard.appendChild(imgdiv);
   imgdiv.appendChild(imgEl);
  imgEl.src =this.image;

    const divEle = document.createElement('div');
    employeeCard.appendChild(divEle);

    const para = document.createElement('p')
    para.textContent = `Name: ${this.fullname} - ID: ${this.id}`
    divEle.appendChild(para);

    const para1 = document.createElement('p')
    para1.textContent = `Department: ${this.department} - Level: ${this.level}`
    divEle.appendChild(para1);

    const para2 = document.createElement('p')
    para2.textContent = this.minMaxSalary()
    divEle.appendChild(para2);
  }

  if(this.department === 'Development'){
    const employeeCard = document.getElementById('Development');
    const imgEl = document.createElement('img');
    const imgdiv=document.createElement('div');
    imgdiv.setAttribute('class','img-content');
    employeeCard.appendChild(imgdiv);
   imgdiv.appendChild(imgEl);
  imgEl.src =this.image;

    const divEle = document.createElement('div');
    employeeCard.appendChild(divEle);

    const para = document.createElement('p')
    para.textContent = `Name: ${this.fullname} - ID: ${this.id}`
    divEle.appendChild(para);

    const para1 = document.createElement('p')
    para1.textContent = `Department: ${this.department} - Level: ${this.level}`
    divEle.appendChild(para1);

    const para2 = document.createElement('p')
    para2.textContent = this.minMaxSalary()
    divEle.appendChild(para2);
  }

  if(this.department === 'Finance'){
    const employeeCard = document.getElementById('Finance');
    const imgEl = document.createElement('img');
    const imgdiv=document.createElement('div');
    imgdiv.setAttribute('class','img-content');
    employeeCard.appendChild(imgdiv);
   imgdiv.appendChild(imgEl);
  imgEl.src =this.image;

    const divEle = document.createElement('div');
    employeeCard.appendChild(divEle);

    const para = document.createElement('p')
    para.textContent = `Name: ${this.fullname} - ID: ${this.id}`
    divEle.appendChild(para);

    const para1 = document.createElement('p')
    para1.textContent = `Department: ${this.department} - Level: ${this.level}`
    divEle.appendChild(para1);

    const para2 = document.createElement('p')
    para2.textContent = this.minMaxSalary()
    divEle.appendChild(para2);
  }
}
// }

// Adding new data from the form
   function addNewCard(e) {
    e.preventDefault();
// console.log(e.target.department.value)
    let fullname = (e.target.fullname.value);
    let department =(e.target.department.value);
    let level = (e.target.level.value);
    let image = (e.target.image.value);
    const newCard = new Information(fullname,department,level,image);
    newCard.uniqueIdNumber(1000, 9999)
    newCard.render();
    // console.log(newCard)
    // localStorage.setItem('employee', JSON.stringify(newCard))
        // console.log( Information.allEmployee)

    saveData();
  } 

  //Saving the data inside the localStorge
  function saveData(){
    let data = JSON.stringify(Information.allEmployee)
    // console.log(data)
    localStorage.setItem('employee' , data )
  }

 //Gitting the data from the localStorage
  function getData(){
    let stringObj = localStorage.getItem('employee')
    let parseObj = JSON.parse(stringObj);
    if (parseObj !== null ){
      for(let i = 0; i < parseObj.length; i++) {
      // Information.allEmployee = parseObj;
      new Information (parseObj[i].fullname, parseObj[i].department, parseObj[i].level, parseObj[i].image, parseObj[i].id, parseObj[i].salary).render()
      // console.log(parseObj[i].salary)
    }
    // Information.allEmployee[0].render();
  }
  }

    //event
   const employeeForm = document.getElementById('employee-form')
    employeeForm.addEventListener('submit', addNewCard)
    getData();   



      
     







