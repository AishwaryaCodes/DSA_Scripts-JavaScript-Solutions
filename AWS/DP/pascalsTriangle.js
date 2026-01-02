// Pascal’s Triangle

const formTraingle = (row) => {

    const res = [];


    for(let i = 0; i < row; i++) {

        const r = new Array(i + 1).fill(1);

        for(let j = 1; j < i; j++) {
            r[j] = res[i - 1][j - 1] + res[i - 1][j];
        }

        res.push(r);

    }

    return res;

}

let row  = 5;

console.log(formTraingle(row));