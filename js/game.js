let canvas;
let world;

/**
 * Initials the game
 * 
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}