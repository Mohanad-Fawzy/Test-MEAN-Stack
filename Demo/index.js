function power(number , power){
    let y 
    for(i = 0 ; i <= power ; i++ ){
         y = number*number
    }
    return y
}
setTimeout(() => console.log(power(5,2)),2000)
