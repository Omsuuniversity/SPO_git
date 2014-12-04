function HashTable() {
	this.table = new Array(140);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
}

function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}
function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	print("Hash value: " + data + " -> " + total);
	return total % this.table.length;
}
function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i] != undefines) {
			printf(i + ": " + this.table[i]);
		}
	}
}