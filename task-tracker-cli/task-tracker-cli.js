
const taskList = []

const generateId = () => {
    let currentId = 1
    if(taskList.length > 0){
        currentId = taskList.at(-1).id + 1
        return currentId
    }
    return currentId
    
}



const add = (taskDescription) => {
    task = {
        id:  generateId(),
        description: taskDescription,
        status: "todo",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    taskList.push(task)
}

const list = () => {
    taskList.forEach(element => {
        console.log(" id",element.id,"\n",
            "description:",element.description,"\n",
            "Status: ",element.status,"\n",
            "Created At: ",element.createdAt,"\n",
            "Created At: ",element.createdAt,"\n"
        )
    });
}
add("Task 1")

add("Task 2")

add("Task 3")
list()

