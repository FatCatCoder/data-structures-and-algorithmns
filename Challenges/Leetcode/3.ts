function lengthOfLongestSubstring(s: string): number {
    if(s.length === 0) return 0;
    
    let StringAsArr = [...s];
    let UniqueCountCache: number[] = [];

    StringAsArr.forEach((x, y) => {
        let UniqueLetters: string[] = [];

        let spliced = y === 0? StringAsArr: StringAsArr.slice(y);
        for(let l of spliced){
            if(UniqueLetters.includes(l)){
                break;
            }
            else{
                UniqueLetters.push(l);
            }
        }

        UniqueCountCache.push(UniqueLetters.length)
    })

    return Math.max(...UniqueCountCache)
};