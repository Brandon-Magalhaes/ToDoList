function addTask(){
    const taskTitle = document.querySelector("#task-title").value;//input

    if(taskTitle){
        const template = document.querySelector(".template");//li

        const newTask = template.cloneNode(true);//clonando linha

        newTask.querySelector(".task-title").textContent = taskTitle;//adicionando titulo
        
        newTask.classList.remove("template");//remove as classes
        newTask.classList.remove("hide");

        const list = document.querySelector("#task-list")//ul
        list.appendChild(newTask);//cria o filho adicionando
        
        //ion-icon o icone de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click",function(){
            removeTask(this);//esta apontando para ion-icon
        });
    //ion-icon o icone de completo
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click",function(){
            completeTask(this);
        });

        document.querySelector("#task-title").value = "";//limpando o texto
    }
}

function removeTask(task){//remove a tarefa
    task.parentNode.remove(true);
}

function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done")//se tiver com done ele tira, se não tiver ele coloca o done - toggle
    //toggle pode ser usado no lugar de if else
}


const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener('click', function(e){

    e.preventDefault();

    addTask();
});