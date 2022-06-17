const input = document.querySelector('.inputField input')
const addBtn = document.querySelector('.inputField button')
const todolist = document.querySelector('.todolist')
const delBtn = document.querySelector(".todolist button")
const delAll = document.querySelector(".footer button")

listforEach()

addBtn.onclick = () =>{
  let userTypedValue = input.value
  let getLocalStorage = localStorage.getItem("Todo List")

  if(input.value.trim() == 0){
    alert('你需要輸入事項!')
    return false
  }

  if(getLocalStorage == null){
    listArray = []
  }else {
    listArray = JSON.parse(getLocalStorage)
  }
  listArray.push(userTypedValue)
  localStorage.setItem("Todo List" , JSON.stringify(listArray));
  input.value = ""
  listforEach()
}

function listforEach () {
  let getLocalStorage = localStorage.getItem("Todo List")
  
  if(getLocalStorage == null) {
    listArray = []
  }else {
    listArray = JSON.parse(getLocalStorage)
  }
  let itemNum = document.querySelector('.itemNum')
  itemNum.textContent = listArray.length
  let newLi = ""
  listArray.forEach((item , index)=> {
    newLi += ` <li>${item}<span onclick="deleteTodo(${index})"><i class="fa-solid fa-square-minus"></i></span></li>`
  })
  todolist.innerHTML = newLi
}

function deleteTodo (index) {
  let getLocalStorage = localStorage.getItem("Todo List")
  let listArray = JSON.parse(getLocalStorage)

  listArray.splice(index , 1)
  localStorage.setItem("Todo List" , JSON.stringify(listArray))
  listforEach()
}

delAll.onclick = () => {
  let getLocalStorage = localStorage.getItem("Todo List")
  let listArray = JSON.parse(getLocalStorage)
  listArray = []
  localStorage.setItem("Todo List" , JSON.stringify(listArray))
  listforEach()
}