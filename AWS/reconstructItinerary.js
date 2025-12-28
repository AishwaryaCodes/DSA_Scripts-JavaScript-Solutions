// Reconstruct Itinerary

const plan = (tickets) => {

    // build a graph
    const graph = new Map();
    for(const [from, to] of tickets) {
        if(!graph.has(from)) {
            graph.set(from, []);
        }

        graph.get(from).push(to);
    }

    console.log(graph);

    // Sort Dest
    for(const [from, list] of graph) {
        list.sort();
    }
     console.log(graph);

     let routes = [];

     // Hierholzer DFS
     function dfs(airport) {

        const destList = graph.get(airport) || [];

        while(destList.length > 0) {
            const next = destList.shift(); // smallest dest
            dfs(next);
        }

        routes.push(airport);
     }

     dfs("JFK");


     return routes.reverse();

}

let t = [["JFK", "SFO"], ["JFK", "ATL"], ["JFK", "LAX"]];

//Map(1) { 'JFK' => [ 'ATL', 'LAX', 'SFO' ] }


let tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]];

console.log(plan(t));