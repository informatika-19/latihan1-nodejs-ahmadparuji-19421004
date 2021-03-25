// array

// const listNilai = ['A','B','c']
// console.log(listNilai[2])

const dataMahasiswa = [
    {
        nama: 'Ahmad Paruji',
        npm: '19421004',
        prodi:'informatika'
    },
    {
        nama: 'Ahmad',
        npm: '19421002',
        prodi:'informasi'  
    },
    {
        nama: 'Aaji',
        npm: '19421001',
        prodi:'informatika'
    }
]
// console.log(dataMahasiswa[0].nama)

for (let i in dataMahasiswa) {
    console.log(dataMahasiswa[i].nama + ' - ' + dataMahasiswa[i].prodi)
}