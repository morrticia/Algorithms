import maze_solver from "../MazeSolver";

test("maze_solver", function(){
    const maze = [
        "xxx x",
        "x   x",
        "xxx x"
    ];

expect(maze_solver(maze, "x", {x: 3, y: 0}, {x: 3, y: 2})).toEqual(
    [
        {x: 3, y: 0},
        {x: 3, y: 1},
        {x: 3, y: 2}
    ]
)
})
