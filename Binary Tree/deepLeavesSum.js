const deepSum = (root) => {

    let maxDepth = 0;
    let sum = 0;

    function dfs(node, depth) {

        if(!node) return 0;

        if(depth > maxDepth) {
            maxDepth = depth;
            sum = node.value;
        }

        else if(depth === maxDepth) {
            sum += node.val;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 1);
    return sum;
}