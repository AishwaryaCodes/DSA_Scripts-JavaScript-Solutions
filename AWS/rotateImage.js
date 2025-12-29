// Rotate Image

const rotateImg = (matrix) => {

    let n = matrix.length;

    for(let i = 0; i < n; i++) {

        for(let j = i + 1; j < n; j++) {

           [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];

        }
    } 

    
    console.log(matrix);

    for(let i = 0; i < n; i++) {
        matrix[i].reverse();
    }


    console.log(matrix);

}


let matrix = [[1,2,3],[4,5,6],[7,8,9]]; // [[7,4,1],[8,5,2],[9,6,3]]

console.log(rotateImg(matrix));