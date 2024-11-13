const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
let list = []
const itemsFromLocalStorage = JSON.parse( localStorage.getItem("Einkaufsliste") )

if (itemsFromLocalStorage) {
    list = itemsFromLocalStorage
    renderList()
}


saveBtn.addEventListener("click", function(){
    list.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("Einkaufsliste", JSON.stringify(list))
    renderList()
})

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    list = []
    renderList()
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