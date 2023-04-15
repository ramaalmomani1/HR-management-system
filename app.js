'use strict'




function Employee (EmployeeId, fullName, department, level,image,salary){
    this.EmployeeId = EmployeeId;
    this.fullName = fullName;
    this.department = department;
    this.level =level;
    this.image = image;
    this.salary=salary;
};


Employee.prototype.minMaxSalary=function (){
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

        Employee.prototype.render=function (){
            document.write(`Name: ${this.fullName} Salary:${this.minMaxSalary()}`)
            document.write('</br>')
        }

        let Ghazi  =   new Employee(1000,"ghazi samer","Administration","Senior","");
        let Lana   =   new Employee(1001,"Lana Ali","Finance","Senior","");
        let Tamara =   new Employee(1002,"Tamara Ayoub","Markete","Senior","");
        let Safi   =   new Employee(1003,"Safi Walid","Administration","Mid-Senior","");
        let Omar   =   new Employee(1004,"Omar Zaid ","Development","Senior","");
        let Rana   =   new Employee(1005,"Rana Saleh  ","Development","Junior","");
        let Hadi   =   new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","");
       
        
        Ghazi.render()
        Lana.render()
        Tamara.render()
        Safi.render()  
        Omar.render()  
        Rana.render()  
        Hadi.render()  

        







      
     







