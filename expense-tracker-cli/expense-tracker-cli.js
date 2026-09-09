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
            "date: ",element.date,
            "description:", element.description, "\n",
           
            "amount: ", element.amount, "\n",
        )
    });
}

const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case "add":
        add(args[1], Number(args[2]))
        break
    case "list":
        list((args[1]))
        break
    default:
        console.log("Unknown command:", command)
}