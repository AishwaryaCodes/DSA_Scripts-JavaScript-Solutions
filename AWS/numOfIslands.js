// Number of Islands 

const countIslands = (grid) => {


    if(!grid || grid.lemgth === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;

    let island = 0;

    const dfs = (r, c) => {

        // boundary check
        if(r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") return;

        // mark visited
        grid[r][c] = "0"


        // explore neighbors
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };


    for(let  r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === "1") {
                island++;
                dfs(r, c);
            }
        }
    }

    return island;

};





let  grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

console.log(countIslands(grid)); //o/p = 1