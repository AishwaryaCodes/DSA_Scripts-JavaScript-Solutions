const numsToWords = (nums) => {

    if(nums === 0) return "Zero";

    const below20 = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    const scales = [
        [1_000_000_000, "billion"],
        [1_000_000, "million"],
        [1_000, "thousand"],
        [1, ""],
    ];

    const chunkToWords = (n) => {
        const parts = [];

        if(n >= 100) {
            parts.push(below20[Math.floor(n / 100)] + " hundred");
            n %= 100;
        }

        if(n >= 20) {
            const t = Math.floor(n / 10);
            const ones = n % 10;
            if (ones === 0) parts.push(tens[t]);
            else parts.push(tens[t] + "-" + below20[ones]);
        }
        else if (n > 0) parts.push(below20[n]);

        return parts.join(" ");
    };

    const res = [];
    for(const [val, name] of scales) {
        if(nums >= val) {
            const chunk = Math.floor(nums/val);

            console.log(chunk);
            if(chunk > 0) {
                const words = chunkToWords(chunk);
                res.push(name ? `${words} ${name}` : words);
            }
            nums %= val;
        }
    }

    const sentence = res.join(" ").trim();
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);

}

console.log(numsToWords(11023579));