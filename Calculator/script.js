function clicked(val){
    document.getElementById("screen").value+=val
}
function clearno(){
    document.getElementById("screen").value=''
}
function resultequals(){
    var text=document.getElementById("screen").value
    var foundresult=eval(text)
    document.getElementById("screen").value=foundresult
}