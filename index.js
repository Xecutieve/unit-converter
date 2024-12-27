/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btnEl = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-field")
const lenghtOut = document.getElementById("lenght-output")
const volumeOut = document.getElementById("volume-output")
const massOut = document.getElementById("mass-output")

let inputVal = 20

inputEl.addEventListener("change", () => {
    inputVal = inputEl.value
})

btnEl.addEventListener("click", () => {
    render()
})



function render() {
    lenghtOut.textContent = `${inputVal} meters = ${(inputVal * 3.281).toFixed(3)} feet | ${inputVal} feet = ${(inputVal / 3.281).toFixed(3)} meters`
    
    volumeOut.textContent = `${inputVal} liters = ${(inputVal * 0.264).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal / 0.264).toFixed(3)} liters`
    
    massOut.textContent = `${inputVal} kilos = ${(inputVal * 2.204).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal / 2.204).toFixed(3)} kilos`
}