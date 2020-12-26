const cetakPola = (n) => {
	for (let i = n; i >= 1; i--) {
		let str = " ".repeat(n - i);
		let str2 = " *".repeat(i * 2 - 1);
		console.log(str + str2);
	}
};

cetakPola(7);
