// N-Queens

const placeQweens = (n) => {

    const res = [];
    const board = Array.from({length: n}, () => Array(n).fill('.'));

    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    const backTrack = (row) => {

        if(row === n) {
            res.push(board.map(r => r.join('')));
            return;
        }

        for(let col = 0; col < n; col++) {

              if(cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

              board[row][col] = 'Q';
              cols.add(col);
              diag1.add(row - col);
              diag2.add(row + col);

              backTrack(row + 1);

              
              board[row][col] = '.';
              cols.delete(col);
              diag1.delete(row - col);
              diag2.delete(row + col);

        }
    }

    backTrack(0);

    return res;
}

let n = 4;

console.log(placeQweens(n));