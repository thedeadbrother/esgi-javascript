function ucfirst(val){
	let tab = val.toLowerCase().split('');
	tab[0] = tab[0].toUpperCase();
	return tab.join('');
}

function capitalize(val){
	let tab = val.split(' ');
	for (let index = 0; index<tab.length; index++ ){
		tab[index] = ucfirst(tab[index])
	}
	return tab.join(' ');
}

function camelCase(val){
	let tab = val.split(' ');
	for (let index = 0; index<tab.length; index++ ){
		tab[index] = ucfirst(tab[index])
	}
	return tab.join('');
}

function snake_case(val){
	return val.split(' ').join('_');
}

function prop_access(objectExplore, accessString){
	var attributesTab = accessString.split('.');
	var temp = objectExplore;
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

function leet(val){
	tableConv = {a:'4',e:'3',i:'1',o:'0', u:'(_)', y:'7'};
	tab = val.split('')
	for(letterIndex = 0; letterIndex < tab.length; letterIndex++ ){
		if( tableConv[tab[letterIndex].toLowerCase()] ) {
			tab[letterIndex] = tableConv[tab[letterIndex].toLowerCase()];
		}
	}
	return tab.join('');
}

function verlan(val){
	let tab = val.split(' ');
	for(let i = 0; i<tab.length; i++ ){
		tab[i] = tab[i].split('').reverse().join('');
	}
	return tab.join(' ');
}

function yoda(val){
	return val.split(' ').reverse().join(' ');
}

function vig(val, cle){
	let a = 'a'.charCodeAt(0);
	let z = 'z'.charCodeAt(0);
	
	let aCap = 'A'.charCodeAt(0);
	let zCap = 'Z'.charCodeAt(0);
	
	let tab = val.split('');
	let cleExt = cle.toLowerCase();
	while(tab.length > cleExt.length){
		cleExt += cle.toLowerCase();
	}
	//console.log("b", a);
	let cleIndex =0;
	for (let i = 0 ; i < tab.length; i++ ){
		/*console.log((cleExt[cleIndex].charCodeAt(0) - a), 
		(tab[i].toLowerCase().charCodeAt(0) - a )%26, 
		(a + ((cleExt[cleIndex].charCodeAt(0) - a) + (tab[i].toLowerCase().charCodeAt(0) - a ))%26), 
		String.fromCharCode( a + ((cleExt[cleIndex].charCodeAt(0) - a) + (tab[i].toLowerCase().charCodeAt(0) - a ))%26));*/
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

/* var object_test = { animal : {type: {name:"chien"}}}
var test = 'The quick brown fox jumps over the lazy dog';
console.log(vig("j'adore ecouter la radio toute la journee","MUSIQUE")); */
//console.log(object_test, prop_access(object_test, "animal.type.name"));
