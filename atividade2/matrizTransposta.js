
function transporMatriz(A) {
    console.log("Matriz Original:");
    console.table(A);

    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));

    console.log("Matriz Transposta:");
    console.table(transposta);

    return transposta;
}


const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizExemplo);
