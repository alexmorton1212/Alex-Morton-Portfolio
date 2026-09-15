const colorBank = [
  { id: "coral", name: "Coral", rgb: [255, 107, 107] },
  { id: "sky", name: "Sky", rgb: [93, 173, 226] },
  { id: "amber", name: "Amber", rgb: [247, 185, 85] },
  { id: "mint", name: "Mint", rgb: [116, 198, 157] },
  { id: "violet", name: "Violet", rgb: [167, 139, 250] },
  { id: "sun", name: "Sun", rgb: [255, 224, 102] },
  { id: "aqua", name: "Aqua", rgb: [78, 205, 196] },
  { id: "rose", name: "Rose", rgb: [247, 143, 179] },
  { id: "slate", name: "Slate", rgb: [87, 117, 144] },
  { id: "plum", name: "Plum", rgb: [117, 82, 135] },
  { id: "lime", name: "Lime", rgb: [188, 220, 104] },
  { id: "peach", name: "Peach", rgb: [255, 166, 132] },
  { id: "crimson", name: "Crimson", rgb: [220, 68, 83] },
  { id: "copper", name: "Copper", rgb: [211, 117, 76] },
  { id: "gold", name: "Gold", rgb: [237, 190, 74] },
  { id: "chartreuse", name: "Chartreuse", rgb: [156, 205, 80] },
  { id: "forest", name: "Forest", rgb: [67, 161, 111] },
  { id: "turquoise", name: "Turquoise", rgb: [55, 190, 178] },
  { id: "cyan", name: "Cyan", rgb: [72, 184, 221] },
  { id: "royal", name: "Royal", rgb: [80, 112, 210] },
  { id: "indigo", name: "Indigo", rgb: [102, 91, 189] },
  { id: "lavender", name: "Lavender", rgb: [181, 139, 212] },
  { id: "fuchsia", name: "Fuchsia", rgb: [213, 89, 169] },
  { id: "raspberry", name: "Raspberry", rgb: [213, 77, 123] },
  { id: "sand", name: "Sand", rgb: [220, 178, 120] },
  { id: "seafoam", name: "Seafoam", rgb: [104, 202, 178] },
  { id: "steel", name: "Steel", rgb: [104, 132, 160] },
  { id: "midnight", name: "Midnight", rgb: [69, 88, 132] },
];

const board = Array(9).fill(null);
let palette = [];
let solution = [];
let colorsById = new Map();
let targetRows = [];
let targetColumns = [];
let selectedColorId = null;

const boardGrid = document.querySelector("#board-grid");
const paletteGrid = document.querySelector("#palette-grid");
const instructions = document.querySelector("#instructions");
const clearButton = document.querySelector("#clear-board");
const newGameButton = document.querySelector("#new-game");
const themeToggle = document.querySelector("#theme-toggle");
const infoModal = document.querySelector("#info-modal");
const infoOpen = document.querySelector("#info-open");
const infoClose = document.querySelector("#info-close");

function toCssColor(rgb) {
  return `rgb(${rgb.join(" ")})`;
}

function average(colors) {
  if (colors.length === 0) return null;

  return [0, 1, 2].map((channel) => Math.round(
    colors.reduce((total, color) => total + color.rgb[channel], 0) / colors.length,
  ));
}

function sameColor(first, second) {
  return first?.every((value, index) => value === second?.[index]) ?? false;
}

function shuffled(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function solutionColors(indices) {
  return indices.map((index) => colorsById.get(solution[index]));
}

function createPuzzle() {
  palette = shuffled(colorBank).slice(0, 12);
  colorsById = new Map(palette.map((color) => [color.id, color]));
  solution = shuffled(palette).slice(0, 9).map((color) => color.id);
  targetRows = [
    average(solutionColors([0, 1, 2])),
    average(solutionColors([3, 4, 5])),
    average(solutionColors([6, 7, 8])),
  ];
  targetColumns = [
    average(solutionColors([0, 3, 6])),
    average(solutionColors([1, 4, 7])),
    average(solutionColors([2, 5, 8])),
  ];
}

function makeCircle({ type, index, targetColor = null }) {
  const circle = document.createElement("div");
  circle.className = `circle ${type}`;

  if (targetColor) {
    circle.classList.add("target");
    circle.style.backgroundColor = toCssColor(targetColor);
    circle.setAttribute("aria-label", `${type === "top-target" ? "Column" : "Row"} ${index + 1} target color`);
  } else {
    circle.classList.add("output");
    circle.dataset.index = index;
    circle.setAttribute("aria-label", `${type === "right-output" ? "Row" : "Column"} ${index + 1} current blend`);
  }

  return circle;
}

function makeCell(index) {
  const cell = document.createElement("button");
  cell.className = "board-cell";
  cell.type = "button";
  cell.dataset.index = index;
  cell.setAttribute("aria-label", `Board space ${index + 1}`);
  cell.addEventListener("click", () => placeColor(index));
  return cell;
}

function createBoard() {
  const cells = [
    null,
    makeCircle({ type: "top-target", index: 0, targetColor: targetColumns[0] }),
    makeCircle({ type: "top-target", index: 1, targetColor: targetColumns[1] }),
    makeCircle({ type: "top-target", index: 2, targetColor: targetColumns[2] }),
    null,
    makeCircle({ type: "left-target", index: 0, targetColor: targetRows[0] }),
    makeCell(0), makeCell(1), makeCell(2),
    makeCircle({ type: "right-output", index: 0 }),
    makeCircle({ type: "left-target", index: 1, targetColor: targetRows[1] }),
    makeCell(3), makeCell(4), makeCell(5),
    makeCircle({ type: "right-output", index: 1 }),
    makeCircle({ type: "left-target", index: 2, targetColor: targetRows[2] }),
    makeCell(6), makeCell(7), makeCell(8),
    makeCircle({ type: "right-output", index: 2 }),
    null,
    makeCircle({ type: "bottom-output", index: 0 }),
    makeCircle({ type: "bottom-output", index: 1 }),
    makeCircle({ type: "bottom-output", index: 2 }),
    null,
  ];

  cells.forEach((cell) => {
    if (cell) {
      boardGrid.append(cell);
    } else {
      const space = document.createElement("div");
      space.className = "board-space";
      space.setAttribute("aria-hidden", "true");
      boardGrid.append(space);
    }
  });
}

function createPalette() {
  paletteGrid.replaceChildren();

  palette.forEach((color) => {
    const button = document.createElement("button");
    button.className = "palette-color";
    button.type = "button";
    button.dataset.colorId = color.id;
    button.style.backgroundColor = toCssColor(color.rgb);
    button.setAttribute("aria-label", `Select ${color.name}`);
    button.addEventListener("click", () => selectColor(color.id));
    paletteGrid.append(button);
  });
}

function updateTargets() {
  document.querySelectorAll(".top-target").forEach((target, index) => {
    target.style.backgroundColor = toCssColor(targetColumns[index]);
  });
  document.querySelectorAll(".left-target").forEach((target, index) => {
    target.style.backgroundColor = toCssColor(targetRows[index]);
  });
}

function selectColor(colorId) {
  if (board.includes(colorId)) return;
  selectedColorId = selectedColorId === colorId ? null : colorId;
  updateGame();
}

function placeColor(index) {
  const currentColorId = board[index];

  if (selectedColorId) {
    board[index] = selectedColorId;
    selectedColorId = null;
  } else if (currentColorId) {
    board[index] = null;
  } else {
    return;
  }

  updateGame();
}

function getPlacedColors(indices) {
  return indices
    .map((index) => board[index])
    .filter(Boolean)
    .map((colorId) => colorsById.get(colorId));
}

function updateOutput(selector, blends, targets, completeGroups) {
  blends.forEach((blend, index) => {
    const output = document.querySelector(`${selector}[data-index="${index}"]`);
    output.classList.toggle("is-filled", Boolean(blend));
    output.classList.toggle("is-match", completeGroups[index] && sameColor(blend, targets[index]));
    output.style.backgroundColor = blend ? toCssColor(blend) : "";
  });
}

function updateGame() {
  document.querySelectorAll(".board-cell").forEach((cell) => {
    const colorId = board[Number(cell.dataset.index)];
    const color = colorsById.get(colorId);
    cell.classList.toggle("is-filled", Boolean(color));
    cell.style.backgroundColor = color ? toCssColor(color.rgb) : "";
    cell.setAttribute("aria-label", color ? `${color.name}; click to remove` : `Board space ${Number(cell.dataset.index) + 1}`);
  });

  document.querySelectorAll(".palette-color").forEach((button) => {
    const isUsed = board.includes(button.dataset.colorId);
    button.disabled = isUsed;
    button.classList.toggle("is-selected", button.dataset.colorId === selectedColorId);
  });

  const rowBlends = [
    average(getPlacedColors([0, 1, 2])),
    average(getPlacedColors([3, 4, 5])),
    average(getPlacedColors([6, 7, 8])),
  ];
  const columnBlends = [
    average(getPlacedColors([0, 3, 6])),
    average(getPlacedColors([1, 4, 7])),
    average(getPlacedColors([2, 5, 8])),
  ];
  const completeRows = [
    [0, 1, 2].every((index) => board[index]),
    [3, 4, 5].every((index) => board[index]),
    [6, 7, 8].every((index) => board[index]),
  ];
  const completeColumns = [
    [0, 3, 6].every((index) => board[index]),
    [1, 4, 7].every((index) => board[index]),
    [2, 5, 8].every((index) => board[index]),
  ];

  updateOutput(".right-output", rowBlends, targetRows, completeRows);
  updateOutput(".bottom-output", columnBlends, targetColumns, completeColumns);

  const isComplete = board.every(Boolean)
    && rowBlends.every((blend, index) => sameColor(blend, targetRows[index]))
    && columnBlends.every((blend, index) => sameColor(blend, targetColumns[index]));

  if (isComplete) {
    instructions.textContent = "Puzzle complete — every blend matches its target.";
  } else if (selectedColorId) {
    instructions.textContent = "Choose an empty space on the board.";
  } else {
    instructions.textContent = "Choose a color, then choose a space on the board.";
  }
}

clearButton.addEventListener("click", () => {
  board.fill(null);
  selectedColorId = null;
  updateGame();
});

newGameButton.addEventListener("click", () => {
  createPuzzle();
  board.fill(null);
  selectedColorId = null;
  updateTargets();
  createPalette();
  updateGame();
});

function updateThemeToggle() {
  const isLight = document.documentElement.dataset.theme === "light";
  themeToggle.textContent = isLight ? "Dark mode" : "Light mode";
  themeToggle.setAttribute("aria-pressed", String(isLight));
}

function setTheme(theme) {
  if (theme === "light") {
    document.documentElement.dataset.theme = "light";
  } else {
    delete document.documentElement.dataset.theme;
  }
  localStorage.setItem("palette-theme", theme);
  updateThemeToggle();
}

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});

function closeInfo() {
  infoModal.classList.remove("is-open");
  infoModal.hidden = true;
  infoOpen.focus();
}

infoOpen.addEventListener("click", () => {
  infoModal.classList.remove("is-open");
  infoModal.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => infoModal.classList.add("is-open")));
  infoClose.focus();
});

infoClose.addEventListener("click", closeInfo);

infoModal.addEventListener("click", (event) => {
  if (event.target === infoModal) closeInfo();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !infoModal.hidden) closeInfo();
});

if (localStorage.getItem("palette-theme") === "light") {
  document.documentElement.dataset.theme = "light";
}

createPuzzle();
createBoard();
createPalette();
updateGame();
updateThemeToggle();
