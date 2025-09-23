var compareVersion = function(version1, version2) {

    let v1 = version1.split(".");

    let v2 = version2.split(".");

    let n = Math.max(v1.length, v2.length);

    for(let i = 0; i < n; i ++) {

        let num1 = i < v1.length ? parseInt(v1[i], 10) : 0;
        let num2 = i < v2.length ? parseInt(v2[i], 10) : 0;

        if(num1 > num2) return 1;
        if(num1 < num2) return -1;

    }

    return 0;
};

version1 = "1", version2 = "1.10";



console.log(compareVersion(version1, version2));
