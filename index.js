const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")

saveBtn.addEventListener("click", function(){
    listEl.innerHTML += `<li>${inputEl.value}</li>`
    inputEl.value = ""
})