function missingNumber (arr) {
  arr.sort();
		let missNum = 0;
		for(let i = arr[0]; i < arr[arr.length-1]; i++){
			if(arr.indexOf(i) == -1) {
				missNum++;
			}
		}
		return missNum;
}
