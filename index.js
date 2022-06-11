// code your solution here
function superbowlWin(record) {
    let result = record.find((season) => season.result === 'W');
    return result ? result.year : undefined;
} 