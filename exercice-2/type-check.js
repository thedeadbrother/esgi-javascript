function type_check_v1(arg1, arg2){
	return typeof arg1.valueOf() == arg2;
}

function type_check_v2(arg1, arg2){
	let typeConformity = typeof arg1.valueOf() == arg2.type;
	let valueConformity = false;
	if(typeConformity){
		if( arg2.enum ) {
			for (val in arg2.enum){
				if(arg1 == val){
					   valueConformity = true
				}
			}
		}else if( arg2.value){
			if(arg2.value)
				valueConformity = arg1 == arg2.value
		}
	}
	return typeConformity && valueConformity;
}

function type_check(){
	
}

console.log(type_check_v2(4, {type:"String", enum :[3,4,6] }));