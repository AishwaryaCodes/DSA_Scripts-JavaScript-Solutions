// Asteroid Collision

const findCollide = (asteroids) => {

    const stack = [];

    for(const a of asteroids) {

        let alive = true;

        while(alive && stack.length > 0 && stack[stack.length - 1] > 0 && a < 0) {

            const top = stack[stack.length - 1];

            if(Math.abs(top) < Math.abs(a)) {
                stack.pop();  // smaller explodes
                continue;   // keep checking
            }
            
            else if (Math.abs(top) === Math.abs(a)) {
                stack.pop(); // both explode
                alive = false;   
            }

            else alive = false;
        }

        if(alive) stack.push(a); // current explodes

    }

    return stack;

}

let asteroids = [5,10,-5];

console.log(findCollide(asteroids));


