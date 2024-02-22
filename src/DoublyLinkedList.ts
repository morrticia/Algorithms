type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>

}
export default class DoublyLinkedList<T>{
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepand(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;

        this.head = node;
    }

    insertAt(item: T, index: number): void {

        if (index > this.length) {
            throw new Error("Out of range");
        }

        if (index === this.length) {
            this.append(item);
            return;
        }
        else if (index === 0) {
            this.prepand(item);
            return;
        }

        this.length++;

        const curr = this.getAt(index) as Node<T>;

        const node = { value: item } as Node<T>;
        node.next = curr;
        node.prev = curr.prev;

        curr.prev = node;

        if (node.prev) {
            node.prev.next = node;
        }
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            node.prev = this.tail;
            this.head = this.tail = node;

            return;
        }

        node.prev = this.tail;
        this.tail.next = node;

        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; ++i) {
            if (item === curr.value) {
                break;
            }
            curr = curr?.next;
        }
        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }
    get(index: number): T | undefined {
        return this.getAt(index)?.value;
    }

    removeAt(index: number): T | undefined {
        const node = this.getAt(index);
        if (!node) {
            return undefined;
        }

        return this.removeNode(node);
    }

    private getAt(index: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < index; ++i) {
            curr = curr.next;
        }

        return curr;
    }
    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value
            this.head = this.tail = undefined;
            return out;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }
        else if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }
}
