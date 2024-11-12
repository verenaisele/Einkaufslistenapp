const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
let list = []

saveBtn.addEventListener("click", function(){
    list.push(inputEl.value)
    renderList()
    inputEl.value = ""
})

deleteBtn.addEventListener('dblclick', function(){
    
})

function renderList(){
  let listItems = ""
  for (let i = 0; i < list.length; i++) {
    listItems += `
    <li>${list[i]}</li>
    `
  }
  listEl.innerHTML = listItems
}