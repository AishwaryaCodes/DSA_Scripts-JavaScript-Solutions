class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


const sumRootToLeaf = (root) => {

    function dfs(node, curr) {

        if(!node) return 0;

        curr = curr * 10 + node.val;

        if(!node.left && !node.right) return curr;

        return dfs(node.left, curr) + dfs(node.right, curr);

    }

    return dfs(root, 0);

}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(sumRootToLeaf(root));