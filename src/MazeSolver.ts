class Point{
    x: number
    y: number
}
const dir = [
    [-1 ,0],
    [1, 0],
    [0, -1],
    [0, 1]
];
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean{

    // Base Case 1: Off the map
    if(curr.x >= maze[0].length || curr.x < 0 || 
       curr.y >= maze.length || curr.y < 0){
            return false;
        }
    
    // Base Case 2: On the wall
    if(maze[curr.y][curr.x] == wall){
        return false;
    }

    // Base Case 3: This is the end
    if(curr.x === end.x && curr.y === end.y){
        path.push(end);
        return true;
    }

    if(seen[curr.y][curr.x]){
        return false;
    }

    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for(let i = 0; i < dir.length; ++i){
        const [x, y] = dir[i];
        if(walk(maze, wall, 
            {x: curr.x + x, y: curr.y + y}, 
            end, seen, path)){
                return true;
            }
    }

    // post
    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[]{

    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; ++i){
        seen.push(new Array(maze.length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}