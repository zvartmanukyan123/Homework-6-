function acronym (str){
    let array = str.split(" ");
    let final = "";
    for(let i = 0; i < array.length; i++){
      final += array[i].substring(1,0).toUpperCase();
    }
    return final;
}
