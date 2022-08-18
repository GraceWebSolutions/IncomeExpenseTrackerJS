import {incomeSummaryData, expenseSummaryData, incomeData, daysOfWeek, expenseData} from './expenseData.js'

const summaryExpenseStats = document.querySelector(".summary-stats.expense-stats")
const summaryIncomeStats = document.querySelector(".summary-stats.income-stats")
const incomeStats = document.querySelector("#income-template")
const expenseStats = document.querySelector("#expenses-template")

const showExpenseSummaryData = () => {
    const template = expenseSummaryData.map((dayData, index) => {
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

const showIncomeSummaryData = () => {
    const template = incomeSummaryData.map((dayData, index) => {
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


const showLatestIncome = () => {
    const template = incomeData.map((data, index) => {
        return `
                <li class="expenses-grid">
                    <div class="expense-item">
                        <div class="muted">Description</div>
                        <div>${data.description}</div>
                    </div>

                    <div class="expense-date">
                        <div class="muted">Date</div>
                        <div>${data.date}</div>
                    </div>
                    <div class="expense-value">
                        <div class="muted">Amount</div>
                        <div>£${data.amount}</div>
                    </div>
                    <div class="expense-actions">
                        <div class="expense-buttons-wrapper">
                            <div class="expense-button_wrapper__btn-holder">
                                <i class="bi-pencil"></i>
                            </div>
                            <div class="expense-button_wrapper__btn-holder">
                                <i class="bi-trash"></i>
                            </div>
                        </div>

                    </div>
                </li>
            `
    }).join('')   
    incomeStats.innerHTML = ""
    incomeStats.insertAdjacentHTML("beforeend", template)
}

const showLatestExpense = () => {
    const template = expenseData.map((data, index) => {
        return `
                <li class="expenses-grid">
                    <div class="expense-item">
                        <div class="muted">Description</div>
                        <div>${data.description}</div>
                    </div>

                    <div class="expense-date">
                        <div class="muted">Date</div>
                        <div>${data.date}</div>
                    </div>
                    <div class="expense-value">
                        <div class="muted">Amount</div>
                        <div>£${data.amount}</div>
                    </div>
                    <div class="expense-actions">
                        <div class="expense-buttons-wrapper">
                            <div class="expense-button_wrapper__btn-holder">
                                <i class="bi-pencil"></i>
                            </div>
                            <div class="expense-button_wrapper__btn-holder">
                                <i class="bi-trash"></i>
                            </div>
                        </div>

                    </div>
                </li>
            `
    }).join('')   
    expenseStats.innerHTML = ""
    expenseStats.insertAdjacentHTML("beforeend", template)
}

export {showIncomeSummaryData, showExpenseSummaryData, showLatestIncome, showLatestExpense}