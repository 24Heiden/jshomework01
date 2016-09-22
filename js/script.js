function pow(){
var num = prompt ('Укажите число', '');
var degr = prompt ('Укажите степень', '');

var result = 1;
var a=1;
var negatDegr;
if (degr>0){
	while(a<=degr ){
		result=result*num;
		console.log(result);
		a++;
		}
	
} 
else  {
	
		
		for(a=1; a<Math.abs(degr); a++){
			result=result*num;
			console.log(result)

		}
		var c=1/result;

		console.log(c);
		

		

	}

	
}
pow();

