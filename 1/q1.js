	const user = {};
	function nameSetter(value) {
		return setterGenerator('name', value);
	}
	function setterGenerator(property, value) {
		return (user[property] = value);
	}
	nameSetter('jack');
	console.log('The "user" object :', user); 