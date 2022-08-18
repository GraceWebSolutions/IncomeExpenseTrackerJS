

const fab = document.querySelector(".fab")
const fabWrapper = document.querySelector(".fab-wrapper")
const summaryExpenseStats = document.querySelector(".summary-stats.expense-stats")
const summaryIncomeStats = document.querySelector(".summary-stats.income-stats")

const modeSelector = document.querySelector("[data-mode]")


fab.addEventListener("click", (e) => {
    e.stopPropagation()
    fabWrapper.classList.toggle("active")
})

modeSelector.addEventListener("click", (e) => {
    e.stopPropagation()
    const currentMode = modeSelector.dataset.mode
    const icon = modeSelector.querySelector("i")
    const text = modeSelector.querySelector(".menu-text")
    if (currentMode == "light") {
        text.textContent = "Light"
        icon.classList.remove("bi-cloud-moon")
        icon.classList.add("bi-sun")
        modeSelector.dataset.mode = "dark"
    }
    else {
        text.textContent = "Dark"
        icon.classList.remove("bi-sun")
        icon.classList.add("bi-cloud-moon")
        modeSelector.dataset.mode = "light"
    }
    document.body.classList.toggle("dark-theme");
    
})






