
// event listener for calculation
document.getElementById('calculate-btn').addEventListener('click', function () {

    let incomeInput = document.getElementById('income-input')
    let foodInput = document.getElementById('food-input')
    let rentInput = document.getElementById('rent-input')
    let clothInput = document.getElementById('cloth-input')
    calculateAmount(foodInput, rentInput, clothInput)
})
// calculation function
function calculateAmount(num1, num2, num3) {
    let balance = document.getElementById('balance')

    let incomeInput = document.getElementById('income-input')
    let totalExpense = document.getElementById('total-expense')
    let expenses = parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value)

    // validation for only valid input wihtout minus value
    if (isNaN(expenses) || expenses < 0) {
        expenses = ''
        return alert('input a valid number')
    }
    if (incomeInput.value < expenses) {
        return alert('expense cant be more than income')
    }
    // calculate balance and total expense
    totalExpense.innerText = expenses
    balance.innerText = incomeInput.value - expenses

}

// event listener for save amount
document.getElementById('save-button').addEventListener('click', function () {

    let saveAmount = document.getElementById('save-amount')
    let incomeInput = document.getElementById('income-input')
    let saveInput = document.getElementById('save-input')
    let remainBalance = document.getElementById('remaining-balance')

    // validation for only valid input wihtout minus value
    if (isNaN(saveInput.value) || saveInput.value < 0) {
        saveInput.value = ''
        return alert('input a valid number')
    }

    // remain balance save balace remain balance calculation
    saveAmount.innerText = incomeInput.value * saveInput.value / 100
    remainBalance.innerText = balance.innerText - saveAmount.innerText

    // validation for save a valid amount 
    if (saveAmount.innerText > remainBalance.innerText) {
        saveInput.value = ''
        remainBalance.innerText = 0
        saveAmount.innerText = 0
        return alert("can't save more then Remain Balance")
    }
    saveInput.value = ''

})


