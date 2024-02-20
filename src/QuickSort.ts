function qs(arr: number[], low: number, high: number): void {
    if(low >= high){
        return;
    }

    const pivotIndex = partition(arr, low, high);
    qs(arr, low, pivotIndex - 1);
    qs(arr, pivotIndex + 1, high);
}

// returns pivot index spliiting array in two parts
function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];

    let index = low - 1;

    for (let i = low; i < high; ++i) {
        if (arr[i] <= pivot) {
            index++;
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }

    // swapping pivot and element at the index
    // Rule: Everything to the left of the pivot, needs to be less or equal to the pivot, 
    // everything on the right of the pivot needs to be greater than pivot

    index++;
    arr[high] = arr[index];
    arr[index] = pivot;

    return index;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1)
}