const isiArray = (row, col) => {
	const grid = [];
	let count = 2;

	for (let i = 0; i < row; i++) {
		grid[i] = [];

		for (let j = 0; j < col; j++) {
			grid[i][j] = count;
			count += 6;
		}
	}

	console.table(grid);
};

isiArray(3, 5);
