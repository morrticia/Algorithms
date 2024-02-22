import DoublyLinkedList from "../DoublyLinkedList";

test("Doubly_linked_list", function () {
    const list = new DoublyLinkedList<number>();

    list.append(5);
    list.append(6);
    list.append(7);

    expect(list.get(0)).toBe(5);
    expect(list.get(2)).toBe(7);
    expect(list.length).toBe(3);

    list.insertAt(1, 2);
    expect(list.get(2)).toBe(1);
    expect(list.get(3)).toBe(7);
    expect(list.length).toBe(4);

    list.prepand(10);
    expect(list.get(0)).toBe(10);
    expect(list.length).toBe(5);

    expect(list.remove(10)).toEqual(10);
    expect(list.remove(11)).toEqual(undefined);
    expect(list.get(0)).toBe(5);
    expect(list.get(0)).toBe(5);
    expect(list.length).toBe(4);

    expect(list.removeAt(0)).toEqual(5);
    expect(list.get(0)).toBe(6);
    expect(list.length).toBe(3);
})