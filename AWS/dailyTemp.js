// Daily Temperatures

const findTemp = (temp) => {

    let n = temp.length;

    let result = new Array(n).fill(0);

    const stack = [];

    for(let i = 0; i < n; i++) {

    //console.log( temp[stack[stack.length -1]]);

      while(stack.length > 0 && temp[i] > temp[stack[stack.length -1]]) {
        const prev = stack.pop();
        result[prev] = i - prev;
      }

      stack.push(i);

    }

    return result;

}

let temp = [73,74,75,71,69,72,76,73];

console.log(findTemp(temp));