// Serialize and Deserialize Binary Tree

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


const serialize = (root) => {

    let result = [];

    const dfs = (node) => {

        if(node === null) {
            result.push("null");
            return;
        }

        result.push(String(node.val));

        dfs(node.left);
        dfs(node.right);

    }

    dfs(root);

    return result.join(",");
}

const deserialize = (data) => {

    let arr = data.split(",");
    let i = 0;

    const dfs = () => {
        if(arr[i] === "null") {
            i++;
            return null;
        }

        const node = new TreeNode(parseInt(arr[i], 10));
        i++;

        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();

};