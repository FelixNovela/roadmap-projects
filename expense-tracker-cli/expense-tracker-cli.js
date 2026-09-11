import fs from 'fs'

const myExpensesJsonFile = 'myExpensesList.json'

const readEspensesData = () => {
    if (!fs.existsSync(myExpensesJsonFile)) {
        return []
    }

    let myExpensesText = fs.readFileSync(myExpensesJsonFile, 'utf-8')

    return JSON.parse(myExpensesText)
}

const saveMyExpensesData = (expenses) => {
    const myExpensesJsonText = JSON.stringify(expenses, null, 2);

    fs.writeFileSync(myExpensesJsonFile, myExpensesJsonText, 'utf-8');
}

const generateExpenseId = (myExpensesData) => {

    let currentId = 1
    if (myExpensesData.length > 0) {
        return currentId = myExpensesData.at(-1).id + 1
    }
    return currentId
}

const findExpense = (expenseId, myEspenseData) => {
    for (let i = 0; i < myEspenseData.length; i++) {
        if (myEspenseData[i].id === expenseId) {
            return i
        }
    }
    return -1
}

const add = (expenseDescription, amount) => {
    if (!expenseDescription) {
        console.log("Description is required")
    } else if (!amount) {
        console.log("Amount is required")
    } else {
        let myExpensesData = readEspensesData()
        let expense = {
            id: generateExpenseId(myExpensesData),
            date: new Date(),
            description: expenseDescription,
            amount: amount
        }
        myExpensesData.push(expense)
        saveMyExpensesData(myExpensesData)
    }

}

const update = (expenseId, newDescription, newAmount) => {
    let myExpensesData = readEspensesData()
    let index = findExpense(expenseId, myExpensesData)
    if (index === -1) {
        console.log(`Expense with id ${expenseId} not found!`)
    } else if (!newDescription) {
        console.log("New description is required")
    } else if (!newAmount) {
        console.log("New amount is required")
    } else {
        myExpensesData[index].description = newDescription
        myExpensesData[index].amount = newAmount
        saveMyExpensesData(myExpensesData)
    }
}

const deleteExpense = (expenseId) => {
    let myExpensesData = readEspensesData()
    let index = findExpense(expenseId, myExpensesData)
    if (index === -1) {
        console.log(`Expense with id ${expenseId} not found!`)
    } else {
        myExpensesData.splice(index, 1)
        saveMyExpensesData(myExpensesData)
    }

}

const list = () => {
    let myExpensesData = readEspensesData()
    if (myExpensesData.length === 0) {
        console.log("Doesn't have any expense saved")
    } else {
        myExpensesData.forEach(element => {
            console.log(" id", element.id, "\n",
                "date: ", element.date, "\n",
                "description:", element.description, "\n",

                "amount: ", element.amount, "\n",
            )
        });
    }

}




const summary = () => {
    let myExpensesData = readEspensesData()
    let sum = myExpensesData.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
    console.log(sum)
}

const summaryMonth = (month) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let myExpensesData = readEspensesData()
    let monthFilter = myExpensesData.filter(monthCode => new Date(monthCode.date).getMonth() + 1 === month)
    let sum = monthFilter.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)

    console.log(`Total Expense for ${months[month - 1]}: ${sum}`)
}

const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case "add":
        add(args[1], Number(args[2]))
        break
    case "delete":
        deleteExpense(Number(args[1]))
        break
    case "list":
        list()
        break
    case "update":
        update(Number(args[1]), args[2], Number(args[3]))
        break
    case "summary":
        summary()
        break
    case "summaryMonth":
        summaryMonth(Number(args[1]))
        break
    default:
        console.log("Unknown command:", command)
}