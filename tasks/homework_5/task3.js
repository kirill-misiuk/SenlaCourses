function SumMatrix(matrixA,matrixB)
{
    let m = matrixA.length,
        n = matrixA[0].length,
        matrixC = [];
    for (let i = 0; i < m; i++)
    { matrixC[i] = [];
        for (let j = 0; j < n; j++)
            matrixC[i][j] = matrixA[i][j] + matrixB[i][j];
    }
    return matrixC;
}
console.log(SumMatrix([[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]]));