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
const add = (expenseDescription, amount) => {
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

const list = () => {
    let myExpensesData = readEspensesData()
    myExpensesData.forEach(element => {
        console.log(" id", element.id, "\n",
            "date: ",element.date,"\n",
            "description:", element.description, "\n",
           
            "amount: ", element.amount, "\n",
        )
    });
}
const findExpense = (expenseId, myEspenseData) => {
    return myEspenseData.find(expense => expense.id === expenseId)
}
const update = (expenseId, newDescription, newAmount) => {
    let myExpensesData = readEspensesData()
    let expense = findExpense(expenseId, myExpensesData)
    expense.description = newDescription
    expense.amount = newAmount
    saveMyExpensesData(myExpensesData)
    
}

const summary = () => {
    let myExpensesData = readEspensesData()
    let result = myExpensesData.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
    console.log(result)
}

const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case "add":
        add(args[1], Number(args[2]))
        break
    case "list":
        list()
        break
    case "update":
        update(Number(args[1]),args[2], Number(args[3]))
        break
    case "summary":
        summary()
        break
    default:
        console.log("Unknown command:", command)
}