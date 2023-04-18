'use strict'


  // Constructor function
 function Information (fullname, department, level,image) {
    this.fullname = fullname;
    this.department = department;
    this.id = 0 ;
    this.salary = 0;
    this.level = level;
    this.image = image;
  }

  
// prototype to generate salary
Information.prototype.minMaxSalary=function (){
          let max
          let min
          let x
          let total
      if(this.level === 'Junior'){
              max= 1000
              min = 500
              x =Math.round(Math.floor(Math.random() * (max - min + 1) ) + min);
        } if(this.level === 'Mid-Senior'){
              max= 1500
              min = 1000
               x= Math.round(Math.floor(Math.random() * (max - min + 1) ) + min);
               
            } if (this.level === 'Senior'){
              max= 2000
              min = 1500
               x= Math.round(Math.floor(Math.random() * (max - min + 1) ) + min);
               
            }
               total=Math.floor(x - (x*7.5/100))
            return total;
          }

  // prototype to generate an employee id number
  Information.prototype.uniqueIdNumber =  function (max, min){
    this.id = Math.round(Math.floor(Math.random() * (max - min + 1) ) + min);
} 


 // prototype to render the data

Information.prototype.render = function () {
    const employeeCard = document.getElementById('employeeCard');
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

// Adding new data from the dorm
   function addNewCard(e) {
    e.preventDefault();

    let fullname = (e.target.fullname.value);
    let department =(e.target.department.value);
    let level = (e.target.level.value);
    let image = (e.target.image.value);
    const newCard = new Information(fullname,department,level,image);
    newCard.uniqueIdNumber(1000, 9999)
    newCard.render();
    console.log(newCard)
  } 

    //event
   const employeeForm = document.getElementById('employee-form')
    employeeForm.addEventListener('submit', addNewCard)
        







      
     







