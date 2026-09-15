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
  { id: "maroon", name: "Maroon", rgb: [128, 38, 61] },
  { id: "navy", name: "Navy", rgb: [42, 68, 123] },
  { id: "espresso", name: "Espresso", rgb: [102, 70, 60] },
  { id: "olive", name: "Olive", rgb: [123, 136, 48] },
  { id: "deep-teal", name: "Deep teal", rgb: [29, 125, 123] },
  { id: "spruce", name: "Spruce", rgb: [36, 111, 87] },
  { id: "ochre", name: "Ochre", rgb: [185, 132, 37] },
  { id: "terracotta", name: "Terracotta", rgb: [194, 91, 70] },
  { id: "brick", name: "Brick", rgb: [172, 62, 58] },
  { id: "orchid", name: "Orchid", rgb: [204, 122, 207] },
  { id: "amethyst", name: "Amethyst", rgb: [137, 92, 166] },
  { id: "periwinkle", name: "Periwinkle", rgb: [151, 164, 230] },
  { id: "powder", name: "Powder blue", rgb: [174, 216, 230] },
  { id: "blush", name: "Blush", rgb: [255, 181, 193] },
  { id: "butter", name: "Butter", rgb: [255, 239, 168] },
  { id: "pistachio", name: "Pistachio", rgb: [177, 218, 164] },
  { id: "lilac", name: "Lilac", rgb: [206, 181, 240] },
  { id: "apricot", name: "Apricot", rgb: [255, 190, 124] },
  { id: "melon", name: "Melon", rgb: [245, 142, 112] },
  { id: "ice", name: "Ice", rgb: [167, 226, 237] },
  { id: "sage", name: "Sage", rgb: [142, 173, 120] },
  { id: "denim", name: "Denim", rgb: [70, 104, 166] },
  { id: "mulberry", name: "Mulberry", rgb: [151, 57, 120] },
  { id: "wine", name: "Wine", rgb: [112, 44, 75] },
  { id: "charcoal", name: "Charcoal", rgb: [61, 73, 91] },
  { id: "cobalt", name: "Cobalt", rgb: [49, 93, 186] },
  { id: "jade", name: "Jade", rgb: [49, 159, 117] },
  { id: "lemon", name: "Lemon", rgb: [244, 228, 79] },
];

const fallbackPuzzles = [
  {
    paletteIds: [
      "spruce", "apricot", "periwinkle", "crimson", "pistachio", "jade",
      "midnight", "royal", "turquoise", "steel", "mint", "lemon",
    ],
    solution: [
      "royal", "periwinkle", "apricot",
      "pistachio", "spruce", "crimson",
      "turquoise", "jade", "lemon",
    ],
  },
  {
    paletteIds: [
      "sun", "navy", "amethyst", "crimson", "butter", "brick",
      "sand", "espresso", "slate", "ice", "ochre", "olive",
    ],
    solution: [
      "sun", "ice", "navy",
      "brick", "crimson", "espresso",
      "ochre", "sand", "amethyst",
    ],
  },
  {
    paletteIds: [
      "olive", "periwinkle", "cobalt", "coral", "amethyst", "orchid",
      "ice", "blush", "chartreuse", "espresso", "deep-teal", "forest",
    ],
    solution: [
      "forest", "amethyst", "deep-teal",
      "blush", "ice", "chartreuse",
      "orchid", "cobalt", "espresso",
    ],
  },
];

const board = Array(9).fill(null);
const MIN_TARGET_DISTANCE = 48;
const MIN_PALETTE_COLOR_DISTANCE = 50;
const SOLUTION_ATTEMPTS_PER_PALETTE = 8;
const PALETTE_ATTEMPT_LIMIT = 15;
let palette = [];
let solution = [];
let colorsById = new Map();
let targetRows = [];
let targetColumns = [];
let selectedColorId = null;
let isGameComplete = false;

const boardGrid = document.querySelector("#board-grid");
const paletteGrid = document.querySelector("#palette-grid");
const instructions = document.querySelector("#instructions");
const clearButton = document.querySelector("#clear-board");
const newGameButton = document.querySelector("#new-game");
const themeToggle = document.querySelector("#theme-toggle");
const infoModal = document.querySelector("#info-modal");
const infoOpen = document.querySelector("#info-open");
const infoClose = document.querySelector("#info-close");
const completionModal = document.querySelector("#completion-modal");
const completionNewGame = document.querySelector("#completion-new-game");
const completionClose = document.querySelector("#completion-close");

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

function buildTargets(candidateSolution, colorMap) {
  const solutionColors = candidateSolution.map((colorId) => colorMap.get(colorId));

  return {
    rows: [
      average(solutionColors.slice(0, 3)),
      average(solutionColors.slice(3, 6)),
      average(solutionColors.slice(6, 9)),
    ],
    columns: [
      average([solutionColors[0], solutionColors[3], solutionColors[6]]),
      average([solutionColors[1], solutionColors[4], solutionColors[7]]),
      average([solutionColors[2], solutionColors[5], solutionColors[8]]),
    ],
  };
}

function colorDistance(first, second) {
  return Math.hypot(
    first[0] - second[0],
    first[1] - second[1],
    first[2] - second[2],
  );
}

function createDistinctPalette() {
  const candidatePalette = [];

  shuffled(colorBank).forEach((color) => {
    const isDistinct = candidatePalette.every((existingColor) => (
      colorDistance(color.rgb, existingColor.rgb) >= MIN_PALETTE_COLOR_DISTANCE
    ));

    if (isDistinct && candidatePalette.length < 12) {
      candidatePalette.push(color);
    }
  });

  return candidatePalette.length === 12 ? candidatePalette : null;
}

function minimumTargetDistance(targets) {
  const allTargets = [...targets.rows, ...targets.columns];
  let minimumDistance = Infinity;

  allTargets.forEach((target, index) => {
    allTargets.slice(index + 1).forEach((otherTarget) => {
      minimumDistance = Math.min(minimumDistance, colorDistance(target, otherTarget));
    });
  });

  return minimumDistance;
}

function applyPuzzle(candidatePalette, candidateSolution, targets) {
  palette = candidatePalette;
  colorsById = new Map(palette.map((color) => [color.id, color]));
  solution = candidateSolution;
  targetRows = targets.rows;
  targetColumns = targets.columns;
}

function createPuzzle() {
  for (let paletteAttempt = 0; paletteAttempt < PALETTE_ATTEMPT_LIMIT; paletteAttempt += 1) {
    const candidatePalette = createDistinctPalette();
    if (!candidatePalette) continue;
    const candidateColors = new Map(candidatePalette.map((color) => [color.id, color]));

    for (let solutionAttempt = 0; solutionAttempt < SOLUTION_ATTEMPTS_PER_PALETTE; solutionAttempt += 1) {
      const candidateSolution = shuffled(candidatePalette).slice(0, 9).map((color) => color.id);
      const targets = buildTargets(candidateSolution, candidateColors);

      if (minimumTargetDistance(targets) >= MIN_TARGET_DISTANCE) {
        applyPuzzle(candidatePalette, candidateSolution, targets);
        return;
      }
    }
  }

  // Pre-validated fallbacks keep the minimum target separation intact at the hard time limit.
  const fallback = fallbackPuzzles[Math.floor(Math.random() * fallbackPuzzles.length)];
  const fallbackPalette = fallback.paletteIds.map((colorId) => colorBank.find((color) => color.id === colorId));
  const fallbackColors = new Map(fallbackPalette.map((color) => [color.id, color]));
  applyPuzzle(fallbackPalette, fallback.solution, buildTargets(fallback.solution, fallbackColors));
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
    cell.disabled = isGameComplete;
    cell.style.backgroundColor = color ? toCssColor(color.rgb) : "";
    cell.setAttribute("aria-label", color ? `${color.name}; click to remove` : `Board space ${Number(cell.dataset.index) + 1}`);
  });

  document.querySelectorAll(".palette-color").forEach((button) => {
    const isUsed = board.includes(button.dataset.colorId);
    button.disabled = isUsed || isGameComplete;
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

  clearButton.disabled = isGameComplete;

  if (isComplete && !isGameComplete) {
    isGameComplete = true;
    updateGame();
    showCompletion();
  }
}

clearButton.addEventListener("click", () => {
  board.fill(null);
  selectedColorId = null;
  updateGame();
});

function startNewGame() {
  createPuzzle();
  board.fill(null);
  selectedColorId = null;
  isGameComplete = false;
  completionModal.hidden = true;
  updateTargets();
  createPalette();
  updateGame();
}

newGameButton.addEventListener("click", startNewGame);
completionNewGame.addEventListener("click", startNewGame);

function updateThemeToggle() {
  const isLight = document.documentElement.dataset.theme === "light";
  themeToggle.textContent = isLight ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
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

function showCompletion() {
  completionModal.hidden = false;
  completionNewGame.focus();
}

function closeCompletion() {
  completionModal.hidden = true;
  newGameButton.focus();
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

completionClose.addEventListener("click", closeCompletion);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!infoModal.hidden) closeInfo();
  if (!completionModal.hidden) closeCompletion();
});

if (localStorage.getItem("palette-theme") === "light") {
  document.documentElement.dataset.theme = "light";
}

createPuzzle();
createBoard();
createPalette();
updateGame();
updateThemeToggle();
