const isPerfectSquare = (num) => {
    let left = 1;
    let right = num;

    while (left <= right) {
        let m = Math.floor(left + (right - left) / 2);
        if (m * m > num) {
            right = m - 1;
        } else if (m * m < num) {
            left = m + 1;
        } else {
            return true;
        }
    }
    return false;
}

console.log(isPerfectSquare(14));
