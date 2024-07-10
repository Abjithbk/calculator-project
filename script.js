function buttonClick(val) {
    document.getElementById("screen").value+=val
}

function clearDisplay() {
    document.getElementById("screen").value=""

}
function equalTo() {
    const text=document.getElementById("screen").value
    const result=eval(text)
    document.getElementById("screen").value=result
}