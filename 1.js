const hitungGaji = (nama, gaji, bulan, isTunjangan) => {
	let bpjs = 0.03 * gaji;
	let pajak = 0.05 * gaji;
	let tunjangan = 0;
	tunjangan = isTunjangan ? (tunjangan = 500000) : (tunjangan = 0);
	let gajiBersih = gaji + tunjangan - (bpjs + pajak);
	let total = gajiBersih * bulan;

	console.log("========================");
	console.log(`Nama: ${nama}`);
	console.log(`Gaji Pokok: ${gaji.toLocaleString()}`);
	console.log(`Tunjangan: ${tunjangan.toLocaleString()}`);
	console.log(`BPJS: ${bpjs.toLocaleString()}`);
	console.log(`Pajak: ${pajak.toLocaleString()}`);
	console.log("========================");
	console.log(`Gaji bersih: ${gajiBersih.toLocaleString()}`);
	console.log("========================");
	console.log(`Total Gaji: ${total.toLocaleString()}`);
}

hitungGaji("Andi", 1500000, 3, true);
