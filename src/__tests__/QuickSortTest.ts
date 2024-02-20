import quick_sort from "../QuickSort";

test("QuickSort", function(){
    const arr = [2,6,7,1,9,3];
    quick_sort(arr);
    expect(arr).toEqual([1,2,3,6,7,9])
})