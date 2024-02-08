import binary_search from "../BinarySearchList"

test("Binary search test", function () {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(binary_search(array, 5)).toEqual(true);
    expect(binary_search(array, 8)).toEqual(true);
    expect(binary_search(array, 19)).toEqual(false);
    expect(binary_search(array, 17)).toEqual(false);
})