class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

 export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let stackOfOne = []
    let stackOfTwo = []

    let node: ListNode | null | undefined = l1;
    while(node !== null || node !== undefined){
        if(node?.next !== null ) stackOfOne.unshift(node?.val)
        node = node?.next
        if(node == null || node == undefined){
            break;
        }
    }

    node = l2;
    while(node !== null){
        if(node?.next !== null ) stackOfTwo.unshift(node?.val)
        node = node?.next
        if(node == null || node == undefined){
            break;
        }
    }

    let LL = new ListNode();
    let LLNode = LL;

    let one = "";
    stackOfOne.forEach(x => one += x)
    let two = "";
    stackOfTwo.forEach(x => two += x)

    let calc : number = parseInt(one) + parseInt(two);
    console.log(calc);
    let calcArr = [...calc.toString()];
    calcArr.reverse().forEach((x, y) => {
        LLNode.val = x as unknown as number;
        if(calcArr.length-1 !== y){
            LLNode.next = new ListNode();
            LLNode = LLNode.next;
        }
    })

    console.log(LL)
    return LL;
};

// let LL1 = new ListNode();
// let LL1N = LL1;
// [9,9,9,9,9,9,9].forEach(x => {
//     LL1N.val = x;
//     LL1N.next = new ListNode()
//     LL1N = LL1N.next;
// })

// let LL2 = new ListNode();
// let LL2N = LL2;
// [9,9,9,9].forEach(x => {
//     LL2N.val = x;
//     LL2N.next = new ListNode()
//     LL2N = LL2N.next;
// })
// // Output: [8,9,9,9,0,0,0,1]

let LL1 = new ListNode();
let LL1N = LL1;
[2,4,3].forEach(x => {
    LL1N.val = x;
    LL1N.next = new ListNode()
    LL1N = LL1N.next;
})

let LL2 = new ListNode();
let LL2N = LL2;
[5,6,4].forEach(x => {
    LL2N.val = x;
    LL2N.next = new ListNode()
    LL2N = LL2N.next;
})
Output: [7,0,8]

addTwoNumbers(LL1, LL2)

