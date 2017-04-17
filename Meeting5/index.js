console.log("Hello World");

var printName = function(a){
	console.log("My name is "+a);
}

const sum = function(a, b){
	var sum=0;
	for (var i = a+1; i <b; i++) {
		sum = sum+i;
	}
	console.log(sum);

}

var array = [10,12,14,16,17,18];
for (var i = 0; i <array.length ; i++) {
	if (array[i]%2 ==0) {
		console.log('true');
	}
	else{
		console.log('false');
	}
	
}


sum(2,5);
printName("Sayo");

var string = 'Sayo';
console.log(string.split(''));
var reversed = string.split("").reverse().join("");
console.log(reversed);