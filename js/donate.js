document.getElementById('btn-donate').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueId('input-add-money');
    
    const donateMoney = getTextValueId('total-donate');
    
    const totalDonateMoney = addMoney + donateMoney;
    const mainBalance = getTextValueId('main-balance');
   
    const totalMainBalance = mainBalance - addMoney;
    
   

    const totalDonateMoneyElement = document.getElementById('total-donate');
    totalDonateMoneyElement.innerText = totalDonateMoney;

    

    const totalMainBalanceElement = document.getElementById('main-balance');
    totalMainBalanceElement.innerText = totalMainBalance;

    
    
});



document.getElementById('btn-donates').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneys = getInputFieldValueId('input-add-moneys');
    
    const donateMoneys = getTextValueId('total-donates');
    
    const totalDonateMoneys = addMoneys + donateMoneys;

    const totalDonateMoneyElements = document.getElementById('total-donates');
    totalDonateMoneyElements.innerText = totalDonateMoneys;

 
});


document.getElementById('btn-donatess').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyss = getInputFieldValueId('input-add-moneyss');
    
    const donateMoneyss = getTextValueId('total-donatess');
    
    const totalDonateMoneyss = addMoneyss + donateMoneyss;
   
    const totalDonateMoneyElementss = document.getElementById('total-donatess');
    totalDonateMoneyElementss.innerText = totalDonateMoneyss;

  
    
});


document.getElementById('btn-blog').addEventListener('click',function(event){
    event.preventDefault()
    window.location.href = 'faq.html'
});

