let str = "widget with id";
let result = ''; 

function checkString(str){
    for(let i = 0; i < str.length; i++){
        if(!str [i].includes('i')){
            result = result + str[i]
           // result += str[i]
        }
    }
    console.log(result)
}

checkString(str)


