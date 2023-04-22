'use strict'




let stringObj = localStorage.getItem('employee')
    let parseObj = JSON.parse(stringObj);


    function table (){
      let numberInAdministration = 0
      let totalSalaryAdministration = 0
      let avgAdministration = 0
      
      let numberInMarketing= 0
      let totalSalaryMarketing = 0
      let avgMarketing = 0

      let numberInDevelopment= 0
      let totalSalaryDevelopment = 0
      let avgDevelopment = 0

      let numberInFinance= 0
      let totalSalaryFinance = 0
      let avgFinance = 0

      for(let i=0 ; i<parseObj.length ; i++){
        if (parseObj[i].department === 'Administration'){
          
          numberInAdministration++;
          console.log(numberInAdministration)
          totalSalaryAdministration += parseObj[i].salary
          console.log(totalSalaryAdministration)
          avgAdministration = totalSalaryAdministration/numberInAdministration
          console.log(avgAdministration)
        
        } else if (parseObj[i].department === 'Marketing'){
          const MarketingInfo = document.getElementById('MarketingInfo');
          numberInMarketing++;
          totalSalaryMarketing += parseObj[i].salary
          avgMarketing = totalSalaryMarketing/numberInMarketing
        }else if (parseObj[i].department === 'Development'){
          const DevelopmentInfo = document.getElementById('DevelopmentInfo');
          numberInDevelopment++;
          totalSalaryDevelopment += parseObj[i].salary
          avgDevelopment = totalSalaryDevelopment/numberInDevelopment
        }else {
          const FinanceInfo = document.getElementById('FinanceInfo');
          numberInFinance++;
          totalSalaryFinance += parseObj[i].salary
          avgFinance = totalSalaryFinance/numberInFinance
        }
        
      }
      
      const AdminInfo = document.getElementById('AdminInfo');
      const tdAdd1 = document.createElement('td');
      AdminInfo.appendChild(tdAdd1);
      tdAdd1.textContent=numberInAdministration
      const tdAdd2 = document.createElement('td');
      AdminInfo.appendChild(tdAdd2);
      tdAdd2.textContent=totalSalaryAdministration
      const tdAdd3 = document.createElement('td');
      AdminInfo.appendChild(tdAdd3);
      tdAdd3.textContent=avgAdministration
 ///////////////////////////////////////////////////////

      const MarketingInfo = document.getElementById('MarketingInfo');
      const tdMar1 = document.createElement('td');
      MarketingInfo.appendChild(tdMar1);
      tdMar1.textContent=numberInMarketing
      const tdMar2 = document.createElement('td');
      MarketingInfo.appendChild(tdMar2);
      tdMar2.textContent=totalSalaryMarketing
      const tdMar3 = document.createElement('td');
      MarketingInfo.appendChild(tdMar3);
      tdMar3.textContent=avgMarketing
      /////////////////////////////////////////////////////
      const DevelopmentInfo = document.getElementById('DevelopmentInfo');
      const tdDev1 = document.createElement('td');
      DevelopmentInfo.appendChild(tdDev1);
      tdDev1.textContent=numberInDevelopment
      const tdDev2 = document.createElement('td');
      DevelopmentInfo.appendChild(tdDev2);
      tdDev2.textContent=totalSalaryDevelopment
      const tdDev3 = document.createElement('td');
      DevelopmentInfo.appendChild(tdDev3);
      tdDev3.textContent=avgDevelopment
      ////////////////////////////////////////////////////////////
      const FinanceInfo = document.getElementById('FinanceInfo');
      const tdFin1 = document.createElement('td');
      FinanceInfo.appendChild(tdFin1);
      tdFin1.textContent=numberInFinance
      const tdFin2 = document.createElement('td');
      FinanceInfo.appendChild(tdFin2);
      tdFin2.textContent=totalSalaryFinance
      const tdFin3 = document.createElement('td');
      FinanceInfo.appendChild(tdFin3);
      tdFin3.textContent=avgFinance
      ////////////////////////////////////////////////////////////
      const totalInfo = document.getElementById('totalInfo');
      const tdTotal1 = document.createElement('td');
      totalInfo.appendChild(tdTotal1);
      tdTotal1.textContent= parseObj.length
      const tdTotal2 = document.createElement('td');
      totalInfo.appendChild(tdTotal2);
      tdTotal2.textContent= totalSalaryAdministration + totalSalaryDevelopment+ totalSalaryFinance+ totalSalaryMarketing;
      const tdTotal3 = document.createElement('td');
      totalInfo.appendChild(tdTotal3);
      tdTotal3.textContent= (totalSalaryAdministration + totalSalaryDevelopment+ totalSalaryFinance+ totalSalaryMarketing)/ parseObj.length
    }
    table()
  
    

