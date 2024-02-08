import bubble_sort from "../BubbleSort";
test("bubble sort", function () {
        const array = [1, 4, 5, 2, 6, 7, 3];
        bubble_sort(array);
        expect(array).toEqual([1, 2, 3, 4, 5, 6, 7])
    }
) 