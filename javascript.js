
let globalTodo = [];


const printTodo = () => {
    let content = "";
    globalTodo.forEach((item) => {
        content = content + `<li>${item}</li>`
    })
    content = content + `<li><input type="text" onfocusout="addTodo(value)"></input></li>`
    document.querySelector('.todo').innerHTML = content;
}
const addTodo = (label) => {
    globalTodo.push(label)
    printTodo()
}
window.onload=printTodo;
