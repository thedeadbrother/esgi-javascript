String.prototype.ucfirst =  function (){
	let tab = this.toLowerCase().split('');
	tab[0] = tab[0].toUpperCase();
	return tab.join('');
}

String.prototype.capitalize = function (){
	let tab = this.split(' ');
	for (let index = 0; index<tab.length; index++ ){
		tab[index] = tab[index].ucfirst();
	}
	return tab.join(' ');
}

String.prototype.camelCase =  function (){
	let tab = this.split(' ');
	for (let index = 0; index<tab.length; index++ ){
		tab[index] = tab[index].ucfirst();
	}
	return tab.join('');
}

String.prototype.snake_case = function(){
	return this.split(' ').join('_');
}

Object.prototype.prop_access = function(accessString){
	var attributesTab = accessString.split('.');
	var temp = this;
	for (let index=0; index<attributesTab.length; index++ ){
		let word = attributesTab[index];
		if(temp[word] != null){
			temp = temp[word];
		}else{
			return null;
		}
	}
	return temp;
}

String.prototype.leet = function(){
	tableConv = {a:'4',e:'3',i:'1',o:'0', u:'(_)', y:'7'};
	tab = this.split('')
	for(letterIndex = 0; letterIndex < tab.length; letterIndex++ ){
		if( tableConv[tab[letterIndex].toLowerCase()] ) {
			tab[letterIndex] = tableConv[tab[letterIndex].toLowerCase()];
		}
	}
	return tab.join('');
}

String.prototype.verlan = function(){
	let tab = this.split(' ');
	for(let i = 0; i<tab.length; i++ ){
		tab[i] = tab[i].split('').reverse().join('');
	}
	return tab.join(' ');
}

String.prototype.yoda = function(){
	return this.split(' ').reverse().join(' ');
}

String.prototype.vig = function(cle){
	let a = 'a'.charCodeAt(0);
	let z = 'z'.charCodeAt(0);
	
	let aCap = 'A'.charCodeAt(0);
	let zCap = 'Z'.charCodeAt(0);
	
	let tab = this.split('');
	let cleExt = cle.toLowerCase();
	while(tab.length > cleExt.length){
		cleExt += cle.toLowerCase();
	}
	let cleIndex =0;
	for (let i = 0 ; i < tab.length; i++ ){
		if(tab[i].toLowerCase().charCodeAt(0)>= a && tab[i].toLowerCase().charCodeAt(0)<= z){
			tab[i] = String.fromCharCode(a + ((cleExt[cleIndex].charCodeAt(0) - a) + (tab[i].toLowerCase().charCodeAt(0) - a )+26)%26);
			cleIndex++;
		}else if(tab[i].toLowerCase().charCodeAt(0)>= aCap && tab[i].toLowerCase().charCodeAt(0)<= zCap){
			tab[i] = String.fromCharCode( aCap + (((cleExt[cleIndex].charCodeAt(0) - a) + (tab[i].toLowerCase().charCodeAt(0) - aCap ) +26)%26));
			cleIndex++;
		}
	}
	return tab.join('');
}

//var test_object = {test1 : { test2 : { value : 'Fuck yes !' } }}

//console.log("j'adore ecouter la radio toute la journee".vig("MUSIQUE"));
//console.log(test_object.prop_access("test1.test2.value"));