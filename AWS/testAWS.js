function findPotentialWinners(initialRewards) {
    const n = initialRewards.length;

    let maxReward = Math.max(...initialRewards);
    let countMax = 0;

    for (let r of initialRewards) {
        if (r === maxReward) countMax++;
    }

    // If multiple have the same max reward, only those except one can be winners
    return countMax > 1 ? countMax - 1 : 1;
}
