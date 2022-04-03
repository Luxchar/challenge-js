function sums(target, numbers, partial=[], partial_sum=0){
    if (partial_sum == target) {
        yield partial;
    }
    if (partial_sum >= target) {
        return;
    }
    for (let i = 0; i < numbers.length; i++) {
        let remaining = numbers.slice(i + 1);
        yield sums(target, remaining, partial.concat(numbers[i]), partial_sum + numbers[i]);
    }
}

console.log(sums(4))