
const taskList = []

const generateId = () => {
    let currentId = 1
    if (taskList.length > 0) {
        currentId = taskList.at(-1).id + 1
        return currentId
    }
    return currentId

}

const findTask = (taskId) => {
    if (taskList.length > 0) {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].id === taskId) {
                return i
                
            }
        } 
    }
    return -1
}

const add = (taskDescription) => {
    task = {
        id: generateId(),
        description: taskDescription,
        status: "todo",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    taskList.push(task)
}

const deleteTask = (taskId) => {
    let index = findTask(taskId)
    if (index !== -1) {
        taskList.splice(index,1)
    }
}

const updateTask = (taskId, newTaskDescription) => {
    let index = findTask(taskId)
    if (index !== -1) {
        taskList[index].description = newTaskDescription
        taskList[index].updatedAt = new Date()
    }
}
const list = () => {
    taskList.forEach(element => {
        console.log(" id", element.id, "\n",
            "description:", element.description, "\n",
            "Status: ", element.status, "\n",
            "Created At: ", element.createdAt, "\n",
            "updatedAt At: ", element.updatedAt, "\n"
        )
    });
}
add("Task 1")

add("Task 2")

add("Task 3")

list()
updateTask(3,"Task Atualizada")
list()

