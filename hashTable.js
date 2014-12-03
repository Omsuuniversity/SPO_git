function HashTable() {
	this.table = new Array(140);
	this.simpleHash = simpleHash;
}

function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}