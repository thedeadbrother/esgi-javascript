Object.prototype.prop_access = function(accessString){
	var attributesTab = accessString.split('.');
	var temp = this;
	for (let index=0; index<attributesTab.length; index++ ){
		let word = attributesTab[index];
		if(temp[word] != null){
			temp = temp[word];
		}else{
			throw new UndefinedPropertyError(accessString,word,temp);
		}
	}
	return temp;
}

function UndefinedPropertyError(path, property, object) {
	var allProperty = Object.keys(object);
	this.message = "Property '"+property+"' not exist for path '"+path+"', expected one of : ["+allProperty.join(",")+"]";
	this.name = "UndefinedPropertyError";
}

function test(){
	try(
		var object_test = { animal : {type: {name:"chien", tattoo:"123456"}}};
		return object_test.prop_access("animal.gender");
	)catch(e){
		console.log(e.message);
	}
}

test();