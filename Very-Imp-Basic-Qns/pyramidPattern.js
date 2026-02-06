let rows = 5;

for (let i = 1; i <= rows; i++) {
    let row = "";

    // print spaces before stars
    for (let s = 1; s <= rows - i; s++) {
        row += " ";
    }

    // print stars
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}