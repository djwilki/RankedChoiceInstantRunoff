function instantRunoff(arr) {
    let candidates = new Set(arr.flat(1));
    let losers = new Set();
    while ([...candidates].length > 1) {
        let tally = {}
        arr.map((ele) => {
            if (ele.length > 0) {
                while (losers.has(ele[0])) {
                    ele[0].shift()
                }
                if (ele.length > 0) {
                    if (tally[ele[0]]) {
                        tally[ele[0]] = tally[ele[0]] + 1
                    } else {
                        tally[ele[0]] = 1
                    }
                }
            }
        }
        )
        if (Object.values(tally).every(ele => ele === Object.values(tally)[0])){ return Object.keys(tally)}
        let min = Infinity;
        let minCandidate = null;
        candidates.forEach((candidate) => {


            if (tally[candidate] < min){
                min = tally[candidate];
                minCandidate = candidate
            } else if (!tally[candidate]){
                tally[candidate] = 0;
                min = tally[candidate];
                minCandidate = candidate
            }
        });
        candidates.delete(minCandidate);
        losers.add(minCandidate)
    }
    return candidates
}

let testArr = [['A', 'B', 'C'], ['B', 'A', 'C'], ['B', 'C', 'A'], ['A', 'C', 'B']];


console.log(instantRunoff(testArr))
