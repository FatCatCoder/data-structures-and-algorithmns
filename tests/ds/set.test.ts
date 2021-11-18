// Collection of unique items with various RW methods
const set = require('../../data-structures/set');

describe('Set', () =>{
    it('const newSet = new Set()', () => {
        const mySet = new set();
        expect(mySet).not.toBeNull();
        expect(mySet.dictionary).not.toBeNull()
      });

    it('Set.add() - Adds unique items, failing on the duplicate', () => {
        const mySet = new set();
        expect(mySet.add('a')).toBeTruthy()
        expect(mySet.add('b')).toBeTruthy()
        expect(mySet.add('a')).toBeFalsy()
    })

    it('Set.has() - Checks for existence of item then returns boolean', () => {
        const mySet = new set();
        expect(mySet.add('a')).toBeTruthy()
        expect(mySet.add('b')).toBeTruthy()

        expect(mySet.has('a')).toBeTruthy()
        expect(mySet.has('b')).toBeTruthy()
        expect(mySet.has('c')).toBeFalsy()
    })

    it('Set.remove() - Removes an item & sets length - 1', () => {
        const mySet = new set();
        expect(mySet.add('a')).toBeTruthy();
        expect(mySet.add('b')).toBeTruthy();

        // test length before and after, remove item, check if item was removed 
        expect(mySet.length).toBe(2)
        expect(mySet.remove('a')).toBeTruthy();
        expect(mySet.length).toBe(1);
        expect(mySet.has('a')).toBeFalsy()

        expect(mySet.has('b')).toBeTruthy()
    })

    it('Set.values() - Shows current values of set', () => {
        const mySet = new set();
        expect(mySet.add('a')).toBeTruthy()
        expect(mySet.add('b')).toBeTruthy()

        expect(mySet.values()).toEqual(['a', 'b'])
    })

    it('Set.size() - returns size of set', () => {
        const mySet = new set();
        expect(mySet.size()).toBe(0)
        expect(mySet.add('a')).toBeTruthy()
        expect(mySet.size()).toBe(1)
        expect(mySet.add('b')).toBeTruthy()
        expect(mySet.size()).toBe(2)
    })
    
})
