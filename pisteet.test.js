// tetris.test.js
import { jest } from "@jest/globals";
import { Tetris } from "./tetris";  // adjust import path if needed

describe("Tetris scoring system", () => {
  let game;

  beforeEach(() => {
    // Fake DOM for Tetris dependencies
    document.body.innerHTML = `
      <canvas id="gameCanvas"></canvas>
      <canvas id="nextCanvas"></canvas>
      <button id="startBtn"></button>
      <button id="pauseBtn"></button>
      <div id="gameOverlay"></div>
      <div id="overlayTitle"></div>
      <div id="overlayMessage"></div>
      <span id="score"></span>
      <span id="lines"></span>
      <span id="level"></span>
      <span id="highScore"></span>
    `;
    game = new Tetris();
    game.score = 0;
    game.lines = 0;
    game.level = 1;
  });

  function fillRow(y) {
    for (let x = 0; x < game.BOARD_WIDTH; x++) {
      game.board[y][x] = "red";
    }
  }

  test("clearing 0 lines gives 0 points", () => {
    game.clearLines();
    expect(game.score).toBe(0);
  });

  test("clearing 1 line gives 100 points", () => {
    fillRow(game.BOARD_HEIGHT - 1);
    game.clearLines();
    expect(game.score).toBe(100);
  });

  test("clearing 2 lines gives 300 points", () => {
    fillRow(game.BOARD_HEIGHT - 1);
    fillRow(game.BOARD_HEIGHT - 2);
    game.clearLines();
    expect(game.score).toBe(300);
  });

  test("clearing 3 lines gives 500 points", () => {
    fillRow(game.BOARD_HEIGHT - 1);
    fillRow(game.BOARD_HEIGHT - 2);
    fillRow(game.BOARD_HEIGHT - 3);
    game.clearLines();
    expect(game.score).toBe(500);
  });

  test("clearing 4 lines gives 800 points", () => {
    fillRow(game.BOARD_HEIGHT - 1);
    fillRow(game.BOARD_HEIGHT - 2);
    fillRow(game.BOARD_HEIGHT - 3);
    fillRow(game.BOARD_HEIGHT - 4);
    game.clearLines();
    expect(game.score).toBe(800);
  });

  test("points scale with level", () => {
    game.level = 2;
    fillRow(game.BOARD_HEIGHT - 1);
    game.clearLines();
    expect(game.score).toBe(200); // 100 * level 2
  });
});


test("1 is 1", () => {
  expect(1).toBe(1);
});