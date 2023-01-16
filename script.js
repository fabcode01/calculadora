var res = document.getElementById('res')

function insert(num){
    if (res.innerHTML.length == 0 && num == '/'){
        alert('value [ / ] and [ * ], cannot be added first')
    }else if (res.innerHTML.length == 0 && num == '*'){
        alert('value [ / ] and [ * ], cannot be added first')}
    
    else {res.innerHTML += num}
    
    if (res.innerHTML.length > 10){
        res.style.fontSize = '15px'
    }}
    


function limparAll(){
    res.innerHTML = ""
}
function Del(){
    var back = res.innerHTML;
    res.innerHTML = back.substring(0, back.length -1)

    if(res.innerHTML.length <= 10){
        res.style.fontSize = '3.7em'
    }
}

function calcular(){


    if (res.innerHTML.length > 0){
        res.innerHTML = eval(res.innerHTML)
    }
    
    
}
