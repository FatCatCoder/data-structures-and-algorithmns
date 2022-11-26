function twoSum(nums: number[], target: number): number[] {
    let solution: number[] = [];
    
    nums.forEach((ax, ay) => {
        nums.forEach((bx, by) => {
            if(ay > by && (ax + bx === target)){
                solution = [ay, by];
            }
        })
    })

    return solution;
};

export default twoSum;
