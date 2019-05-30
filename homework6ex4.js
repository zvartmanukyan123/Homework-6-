//Given a string of digits, output all the contiguous substrings of length n in that string.


function returnNItem(str, n){
    let arr = [];
    for(let i = 0;i < str.length; i++){
        let temp = str.slice(i,n +i)
            if(temp.length != n){
                break;
            } else {
                arr.push(temp);
            }
        }
        return arr;
    }
