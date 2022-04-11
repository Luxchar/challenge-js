// Today, your mission is to build a 3-column brick tower, maintain it and finally break it!

//     Create a function build which will create and display the given amount of bricks passed as argument:
//         each brick has to be created as a div and added to the page at a regular interval of 100ms,
//         each brick will receive a unique id property, like following:

//     <div id="brick-1"></div>

//         each brick in the middle column has to be set with the custom data attribute foundation receiving the value true

//     Each one of the two emojis in the top-right corner fires a function on click:
//         🔨 triggers the function repair: write the body of that function, which receives any number of ids, and for each id, retrieves the HTML element and set a custom attribute repaired set to in progress if it is a brick situated in the middle column, and true if not
//         🧨 triggers the function destroy: write the body of that function, which removes the current last brick in the tower

export function build(nb) {
    const tower = document.querySelector('.tower');
    const bricks = [];
    let brick;
    let i = 0;
    while (i < nb) {
        brick = document.createElement('div');
        brick.id = `brick-${i + 1}`;
        tower.appendChild(brick);
        bricks.push(brick);
        i += 1;
    }
}

export function repair() {
    let bricks = document.getElementById('bricks');
    let brick = bricks.lastElementChild;
    brick.dataset.repaired = 'in progress';
}

export function destroy() {
    let bricks = document.getElementById('bricks');
    bricks.removeChild(bricks.lastElementChild);
}