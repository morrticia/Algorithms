import Queue from "../Queue";

test("Enqueue", function(){
    const list = new Queue<number>();

    list.enqueue(2);
    list.enqueue(4);
    list.enqueue(3);

    expect(list.dequeue()).toBe(2);
    expect(list.dequeue()).toBe(4);
    expect(list.length).toBe(1);

    list.enqueue(5);
    expect(list.length).toBe(2);

    expect(list.dequeue()).toBe(3)
    expect(list.length).toBe(1);
    list.enqueue(8);
    list.enqueue(9);

    expect(list.peek()).toBe(5);

    expect(list.dequeue()).toBe(5);
    expect(list.dequeue()).toBe(8);
    expect(list.dequeue()).toBe(9);

    expect(list.peek()).toBe(undefined);
    expect(list.length).toBe(0);
    expect(list.dequeue()).toBe(undefined);
})