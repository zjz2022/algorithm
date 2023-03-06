const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a;
while (p) {
    console.log(p.val);
    p = p.next;
}

// 插入
console.log("插入了e");

const e = { val: 'e' };
c.next = e;
e.next = d;

let p1 = a;
while (p1) {
    console.log(p1.val);
    p1 = p1.next;
}

// 删除
console.log("删除了e");

c.next = d;
let p12 = a;
while (p12) {
    console.log(p12.val);
    p12 = p12.next;
}