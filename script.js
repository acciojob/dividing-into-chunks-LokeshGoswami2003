const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0;
	let ans=[];
	let subAns=[];
	for(let i=0;i<arr.length;i++){
		let val=arr[i];
		if( ( val+sum) > n ){
			ans.push(subAns);
			subAns=[];
			sum=val;
			subAns.push(val);
			continue;
		}
		subAns.push(val);
		sum+=val; 
	}
	if(subAns.length!=0) ans.push(subAns);
	return ans;
};
 
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
