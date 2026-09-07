
import fs from 'fs'

const myTasksJson = 'myTasks.json'


const statusTask = ["todo","in progress","done"]
const generateId = (myTasks) => {
    let currentId = 1
    if (myTasks.length > 0) {
        currentId = myTasks.at(-1).id + 1
        return currentId
    }
    return currentId

}

const findTask = (myTasks,taskId) => {
    if (myTasks.length > 0) {
        for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i].id === taskId) {
                return i
                
            }
        } 
    }
    return -1
}

const readTasksData = () => {

    if (!fs.existsSync(myTasksJson)) {
        return [];
    }
    
    const myTasksText = fs.readFileSync(myTasksJson, 'utf-8');
    
    return JSON.parse(myTasksText);
}

const saveTasksData = (myTasks) => {

    const jsonText = JSON.stringify(myTasks, null, 2);
    
    fs.writeFileSync(myTasksJson, jsonText, 'utf-8');
    
}

const add = (taskDescription) => {
    
    let myTasks = readTasksData()
    let task = {
        id: generateId(myTasks),
        description: taskDescription,
        status: statusTask[0],
        createdAt: new Date(),
        updatedAt: new Date()
    }
    myTasks.push(task)
    saveTasksData(myTasks)
    
}

const deleteTask = (taskId) => {
    let myTasks = readTasksData()
    let index = findTask(myTasks,taskId)
   
    if (index !== -1) {
        myTasks.splice(index,1)
        saveTasksData(myTasks)
    }
}

const updateTask = (taskId, newTaskDescription) => {
    let myTasks = readTasksData()
    let index = findTask(myTasks, taskId)
    if (index !== -1) {
        myTasks[index].description = newTaskDescription
        myTasks[index].updatedAt = new Date()
        saveTasksData(myTasks)
    }
}

const markInProgress = (taskId) => {
    let myTasks = readTasksData()
    let index = findTask(myTasks, taskId)
    if (index !== -1) {
        myTasks[index].status = statusTask[1]
        myTasks[index].updatedAt = new Date()
        saveTasksData(myTasks)
    }
}

const markDone = (taskId) => {
    let myTasks = readTasksData()
    let index = findTask(myTasks, taskId)
    if (index !== -1) {
        myTasks[index].status = statusTask[2]
        myTasks[index].updatedAt = new Date()
        saveTasksData(myTasks)

    }
}

const list = () => {
    let myTasks = readTasksData()
    myTasks.forEach(element => {
        console.log(" id", element.id, "\n",
            "description:", element.description, "\n",
            "Status: ", element.status, "\n",
            "Created At: ", element.createdAt, "\n",
            "updatedAt At: ", element.updatedAt, "\n"
        )
    });
}
const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    case "add":
        add(args[1])
        break
    case "delete":
        deleteTask(Number(args[1]))
        break
    case "update":
        updateTask(Number(args[1]), args[2])
        break
    case "mark-in-progress":
        markInProgress(Number(args[1]))
        break
    case "mark-done":
        markDone(Number(args[1]))
        break
    case "list":
        list()
        break
    default:
        console.log("Unknown command:", command)
}
