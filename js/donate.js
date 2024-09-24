document.getElementById('btn-donate').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueId('input-add-money');
    const donateMoney = getTextValueId('total-donate');
    const totalDonateMoney = addMoney + donateMoney;
    const mainBalance = getTextValueId('main-balance');
    const totalMainBalance = mainBalance - addMoney;
   console.log(totalMainBalance)

    const totalDonateMoneyElement = document.getElementById('total-donate');
    totalDonateMoneyElement.innerText = totalDonateMoney;


    const totalMainBalanceElement = document.getElementById('main-balance');
    totalMainBalanceElement.innerText = totalMainBalance;
    
})

