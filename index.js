const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
let list = []
const itemsFromLocalStorage = JSON.parse( localStorage.getItem("Einkaufsliste") )

if (itemsFromLocalStorage) {
    list = itemsFromLocalStorage
    render(list)
}


saveBtn.addEventListener("click", function(){
    list.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("Einkaufsliste", JSON.stringify(list))
    render(list)
})

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    list = []
    render(list)
})

function render(arr){
  let listItems = ""
  for (let i = 0; i < arr.length; i++) {
    listItems += `
    <li>${arr[i]}</li>
    `
  }
  listEl.innerHTML = listItems
}