function getInputFieldValueId(id){
    const donateMoney = parseFloat(document.getElementById(id).value);
    // console.log(id,addMoney)
    return donateMoney;
}

function getTextValueId(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}