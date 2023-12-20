function validEmail(str) {
  //your JS code here.
	if(!str)return false;

	let arr=str.split(".");

	let rate=arr[0];
	let sRate=arr[0].split("@");

	if(sRate.length!=2)return false;
	if(arr[0].charAt(0)==='@')return false;
	if(arr[0].charAt(arr[0].length-1)==='@')return false;

	//case .se end ho rha tb bhi..
	if(arr[arr.length-1].length===0)return false;

	return true;
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");

alert(validEmail(str));
