console.log("===========No1===========")
for(i = 1; i<=20; i++){
    if(i%2 == 0){
        console.log(i + "- I Love Coding")
    }
}


console.log("===========No2===========")
for(var i = 1; i<=20; i++){
    if(i%2 == 0){
        console.log(i  + "- Berkualitas");
    }
    if(i%3 == 0){
        console.log(i + "- I love Coding");
    }
    else if(i%2 == 1){
        console.log(i + "- Santai")
    }
}


console.log("===========No4===========")
var hasil ="";
for(var i=0; i<7; i++){
    for(var j=0; j<i; j++){
        hasil+="#"
    }
    console.log(hasil)
}