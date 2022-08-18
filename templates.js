import {incomeData, expenseData, daysOfWeek} from './expenseData.js'

const getExpenseSummaryData = () => {
    const template = expenseData.map((dayData, index) => {
        return `
            <div class="bar-container">
                <div class="bar">
                    <div class="bar-value" style="height: ${dayData}%;"></div>
                </div>
                <div class="stats-day">${daysOfWeek[index]}</div>
            </div>
            `
    }).join('')  
    summaryExpenseStats.innerHTML = ""
    summaryExpenseStats.insertAdjacentHTML("beforeend", template)
}

const getIncomeSummaryData = () => {
    const template = incomeData.map((dayData, index) => {
        return `
            <div class="bar-container">
                <div class="bar">
                    <div class="bar-value" style="height: ${dayData}%;"></div>
                </div>
                <div class="stats-day">${daysOfWeek[index]}</div>
            </div>
            `
    }).join('')   
    summaryIncomeStats.innerHTML = ""
    summaryIncomeStats.insertAdjacentHTML("beforeend", template)
}

// getIncomeSummaryData()
// getExpenseSummaryData()