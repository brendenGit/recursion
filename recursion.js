//Recursion Exercises

//product of nums
function product(nums, n=0) {
    if(n === nums.length) return;
    let product = nums[n] * product(nums, n + 1);
    return product;
}