let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (typeof nilaiAwal == 'number' && typeof nilaiAkhir == 'number' && Array.isArray(dataArray) && dataArray.length > 5){
        if (nilaiAwal > nilaiAkhir){
            return 'Nilai akhir harus lebih besar dari nilai awal'
        } else {
            let tampungArray = []
            for (let i = 0; i <= dataArray.length-1; i++){
                if(dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir) {
                    tampungArray.push(dataArray[i])
                }
            }
    
            if (tampungArray.length > 0) {
                return tampungArray.sort((a, b) => a - b)
            } else {
                return 'Jumlah angka dalam dataArray tidak ada'
            }
        }
    } else {
        return 'masukan parameter dengan tipe data yang benar (number, number, array) \ncatatan : data dalam array harus lebih dari 5'
    }
}

let hasil = seleksiNilai(1,10,[1,33,100,990,3,6,2,9,8])
console.log(hasil)

