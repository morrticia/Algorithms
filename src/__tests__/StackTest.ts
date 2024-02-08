import Stack from "../Stack"

test("Test stack", function(){
    const list = new Stack<number>();

    list.push(1);
    list.push(2);

    expect(list.length).toBe(2);
    expect(list.pop()).toBe(2);
    expect(list.pop()).toBe(1);
    expect(list.pop()).toBe(undefined);
    expect(list.length).toBe(0);
    expect(list.peek()).toBe(undefined);

    list.push(3);
    expect(list.peek()).toBe(3);
    expect(list.length).toBe(1);
})