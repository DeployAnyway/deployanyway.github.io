// src/characters/bro.json
var bro_default = {
  name: "bro",
  art: [
    "   .----.",
    "  /  __  \\",
    " |  o  o  |",
    "  \\  __  /",
    "   /|==|\\",
    "  /_|__|_\\",
    "    |  |",
    "   _|  |_"
  ]
};

// src/characters/bug.json
var bug_default = {
  name: "bug",
  art: [
    "   \\  |  /",
    "    .---.",
    " --( o o )--",
    " --(  #  )--",
    "    \\___/",
    "   /  |  \\",
    " [ FEATURE? ]"
  ]
};

// src/characters/coffee.json
var coffee_default = {
  name: "coffee",
  art: [
    "    ~  ~",
    "   .----.",
    "   | CI |--.",
    "   |    |  |",
    "   |____|--'",
    "   [REFILL]"
  ]
};

// src/characters/developer.json
var developer_default = {
  name: "developer",
  art: [
    "  .-------.",
    "  | [] [] |",
    "  |  ___  |",
    "  \\_______/",
    "   /|_#_|\\",
    "  /_    _\\",
    " [__DEV___]"
  ]
};

// src/characters/duck.json
var duck_default = {
  name: "duck",
  art: ["    __", "   (o )___", "   /   __/", "  /___/", "  [QUACK]"]
};

// src/characters/dumpster-fire.json
var dumpster_fire_default = {
  name: "dumpster-fire",
  art: [
    "   ^  ^  ^",
    "  / \\/ \\/ \\",
    "  |  HOT   |",
    " .----------.",
    " | RELEASE  |",
    " |__________|",
    "   O      O"
  ]
};

// src/characters/husky.json
var husky_default = {
  name: "husky",
  art: [
    "  /\\___/\\",
    " / o   o \\",
    " |   v   |",
    "  \\_===_/",
    "  /| <> |\\",
    " (_|____|_)",
    "   /    \\",
    "  [_]  [_]",
    " [  LGTM  ]"
  ]
};

// src/characters/intern.json
var intern_default = {
  name: "intern",
  art: [
    "   .----.",
    "   |o  o|",
    "   | ?? |",
    "   \\____/",
    "   /|  |\\",
    "  [ NOTES ]",
    "    |  |",
    "   [_][_]"
  ]
};

// src/characters/laptop.json
var laptop_default = {
  name: "laptop",
  art: [
    "  .----------.",
    "  | > ship_  |",
    "  |          |",
    "  +----------+",
    " /____________\\",
    "  [ ESCAPE? ]"
  ]
};

// src/characters/robot.json
var robot_default = {
  name: "robot",
  art: [
    "   [ READY ]",
    "   .-------.",
    "   | o   o |",
    "   |  ===  |",
    "   +-------+",
    "  /|  []   |\\",
    "   |_______|",
    "    []   []"
  ]
};

// src/characters/rocket.json
var rocket_default = {
  name: "rocket",
  art: [
    "     /\\",
    "    /  \\",
    "   | [] |",
    "   | DA |",
    "  /|____|\\",
    " /_|_||_|_\\",
    "    /\\/\\",
    "   /_||_\\"
  ]
};

// src/characters/server.json
var server_default = {
  name: "server",
  art: [
    " .-----------.",
    " | [==]  [o] |",
    " | [==]  [o] |",
    " | [==]  [!] |",
    " +-----------+",
    " [ STILL UP ]"
  ]
};

// src/characters/wizard.json
var wizard_default = {
  name: "wizard",
  art: [
    "      /\\",
    "     / .\\",
    "    /__*_\\",
    "    (o o)",
    "    / = \\",
    "   /|___|\\",
    "     | |",
    "  [ SPELL:CI ]"
  ]
};

// src/characters/index.js
var characters = Object.fromEntries(
  [bro_default, bug_default, coffee_default, developer_default, duck_default, dumpster_fire_default, husky_default, intern_default, laptop_default, robot_default, rocket_default, server_default, wizard_default].map((c) => [
    c.name,
    c
  ])
);

// src/personas.js
var personas = {
  dallas: {
    intro: "DALLAS HAS ARRIVED AT FULL ZOOMIE SPEED.",
    label: "ENTHUSIASM WITH EVIDENCE",
    outro: "Take the victory lap after the checks pass."
  },
  benji: {
    intro: "BENJI HAS AN IDEA AND WOULD LIKE YOUR ATTENTION.",
    label: "NEXT ADVENTURE",
    outro: "Investigate the interesting thing. Keep a return route."
  },
  "rubber-duck": {
    intro: "Tell me what you expected. Then tell me what happened.",
    label: "QUACK-SIZED REPRODUCTION",
    outro: "One clear example beats a pond full of guesses."
  },
  "on-call": {
    intro: "The alert is loud. We can stay methodical.",
    label: "INCIDENT NOTE",
    outro: "Check impact, capture evidence, and confirm rollback."
  },
  "code-review": {
    intro: "A friendly question before the merge.",
    label: "KINDNESS IS A REVIEW TOOL",
    outro: "Make the reasoning easy for the next developer to follow."
  },
  minimalist: {
    intro: "Less magic. More clarity.",
    label: "SMALLEST USEFUL STEP",
    outro: "Keep the part that solves the problem."
  },
  optimist: {
    intro: "This can get better. Let us prove it.",
    label: "HOPE WITH A TEST CASE",
    outro: "A small verified improvement is still an improvement."
  },
  skeptic: {
    intro: "Interesting claim. Where are the receipts?",
    label: "SHOW THE EVIDENCE",
    outro: "Confidence is welcome. Verification gets the merge."
  },
  classic: { intro: "BRO...", label: "", outro: "" },
  hype: {
    intro: "BRO! THE TERMINAL IS APPLAUDING!",
    label: "[ CONFETTI PENDING ]",
    outro: "Victory lap after the smoke test."
  },
  chill: {
    intro: "Bro. One thing at a time.",
    label: "",
    outro: "Small step. Deep breath. Next log line."
  },
  panic: {
    intro: "BRO! DEEP BREATH. CHECK THE LOGS.",
    label: "[ INCIDENT, NOT A PERSONALITY ]",
    outro: "1. Read the evidence. 2. Find rollback. 3. Breathe again."
  },
  corporate: {
    intro: "Bro, please find the following update for alignment.",
    label: "ACTION ITEM",
    outro: "NEXT STEP: assign an owner before scheduling another meeting."
  },
  coach: {
    intro: "Bro, you have got this. Take the next step.",
    label: "TODAY'S REP",
    outro: "Progress beats heroic guesswork."
  },
  "senior-dev": {
    intro: "I have seen this release before.",
    label: "REVIEW NOTE",
    outro: "Reproduce it. Make it boring. Then ship it."
  },
  intern: {
    intro: "I brought notes and exactly one sensible question.",
    label: "QUESTION FOR THE TEAM",
    outro: "Could we add a test so future-me understands this too?"
  },
  dramatic: {
    intro: "ACT III: THE DEPLOYMENT ENTERS.",
    label: "[ spotlight finds the terminal ]",
    outro: "Curtain call postponed until health checks pass."
  },
  sarcastic: {
    intro: "An ambitious interpretation of 'probably fine'.",
    label: "EVIDENCE RECEIVED",
    outro: "Excellent. Now let us ask the tests for a second opinion."
  },
  motivational: {
    intro: "One small fix. One less future incident.",
    label: "YOU CAN BUILD ON THIS",
    outro: "Make the next developer's afternoon easier."
  },
  friday: {
    intro: "The weekend has entered the review thread.",
    label: "FRIDAY PREFLIGHT",
    outro: "Rollback ready? On-call awake? Coffee legally available?"
  }
};

// src/themes.js
var themes = {
  classic: {
    top: ["+", "-", "+"],
    side: "|",
    bottom: ["+", "-", "+"],
    color: 36
  },
  minimal: {
    top: [".", "-", "."],
    side: ":",
    bottom: ["'", "-", "'"],
    color: 37
  },
  neon: { top: ["\u256D", "\u2500", "\u256E"], side: "\u2502", bottom: ["\u2570", "\u2500", "\u256F"], color: 95 },
  retro: {
    top: ["/", "=", "\\"],
    side: "|",
    bottom: ["\\", "=", "/"],
    color: 33
  },
  hacker: {
    top: ["[", "=", "]"],
    side: ":",
    bottom: ["[", "=", "]"],
    color: 32
  },
  corporate: {
    top: ["+", "=", "+"],
    side: "|",
    bottom: ["+", "=", "+"],
    color: 34
  }
};

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const osc = `(?:(?:\\u001B\\]|\\u009D)[^\\u0007\\u001B\\u009C\\u009D]*${ST})`;
  const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  const pattern = `${osc}|${csi}`;
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}

// node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  if (!string.includes("\x1B") && !string.includes("\x9B")) {
    return string;
  }
  return string.replace(regex, "");
}

// node_modules/get-east-asian-width/lookup-data.js
var ambiguousMinimalCodePoint = 161;
var ambiguousMaximumCodePoint = 1114109;
var ambiguousRanges = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
var fullwidthMinimalCodePoint = 12288;
var fullwidthMaximumCodePoint = 65510;
var fullwidthRanges = [12288, 12288, 65281, 65376, 65504, 65510];
var wideMinimalCodePoint = 4352;
var wideMaximumCodePoint = 262141;
var wideRanges = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101594, 101631, 101664, 101760, 101874, 101888, 102801, 102816, 102866, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110888, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110952, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127406, 127406, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128729, 128732, 128735, 128747, 128748, 128756, 128764, 128986, 128986, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129734, 129736, 129736, 129740, 129757, 129759, 129771, 129775, 129786, 131072, 196605, 196608, 262141];

// node_modules/get-east-asian-width/utilities.js
var isInRange = (ranges, codePoint) => {
  let low = 0;
  let high = Math.floor(ranges.length / 2) - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const i = mid * 2;
    if (codePoint < ranges[i]) {
      high = mid - 1;
    } else if (codePoint > ranges[i + 1]) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

// node_modules/get-east-asian-width/lookup.js
var commonCjkCodePoint = 19968;
var [wideFastPathStart, wideFastPathEnd] = /* @__PURE__ */ findWideFastPathRange(wideRanges);
function findWideFastPathRange(ranges) {
  let fastPathStart = ranges[0];
  let fastPathEnd = ranges[1];
  for (let index = 0; index < ranges.length; index += 2) {
    const start = ranges[index];
    const end = ranges[index + 1];
    if (commonCjkCodePoint >= start && commonCjkCodePoint <= end) {
      return [start, end];
    }
    if (end - start > fastPathEnd - fastPathStart) {
      fastPathStart = start;
      fastPathEnd = end;
    }
  }
  return [fastPathStart, fastPathEnd];
}
var isAmbiguous = (codePoint) => {
  if (codePoint < ambiguousMinimalCodePoint || codePoint > ambiguousMaximumCodePoint) {
    return false;
  }
  return isInRange(ambiguousRanges, codePoint);
};
var isFullwidth = (codePoint) => {
  if (codePoint < fullwidthMinimalCodePoint || codePoint > fullwidthMaximumCodePoint) {
    return false;
  }
  return isInRange(fullwidthRanges, codePoint);
};
var isWide = (codePoint) => {
  if (codePoint >= wideFastPathStart && codePoint <= wideFastPathEnd) {
    return true;
  }
  if (codePoint < wideMinimalCodePoint || codePoint > wideMaximumCodePoint) {
    return false;
  }
  return isInRange(wideRanges, codePoint);
};

// node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullwidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}

// node_modules/string-width/index.js
var segmenter = new Intl.Segmenter();
var visibleCharacterRegex = /[^\p{Default_Ignorable_Code_Point}\p{Control}\p{Format}\p{Nonspacing_Mark}\p{Enclosing_Mark}\p{Surrogate}]/v;
var spacingMarkRegex = /\p{Spacing_Mark}/v;
var rgiEmojiRegex = /^\p{RGI_Emoji}$/v;
var unqualifiedKeycapRegex = /^[\d#*]\u20E3$/;
var extendedPictographicRegex = /\p{Extended_Pictographic}/gu;
function isDoubleWidthNonRgiEmojiSequence(segment) {
  if (segment.length > 50) {
    return false;
  }
  if (unqualifiedKeycapRegex.test(segment)) {
    return true;
  }
  if (segment.includes("\u200D")) {
    const pictographics = segment.match(extendedPictographicRegex);
    return pictographics !== null && pictographics.length >= 2;
  }
  return false;
}
function baseVisible(segment) {
  const index = segment.search(visibleCharacterRegex);
  return index === -1 ? void 0 : segment.slice(index);
}
function isHangulLeadingJamo(codePoint) {
  return codePoint >= 4352 && codePoint <= 4447 || codePoint >= 43360 && codePoint <= 43388;
}
function isHangulVowelJamo(codePoint) {
  return codePoint >= 4448 && codePoint <= 4519 || codePoint >= 55216 && codePoint <= 55238;
}
function isHangulTrailingJamo(codePoint) {
  return codePoint >= 4520 && codePoint <= 4607 || codePoint >= 55243 && codePoint <= 55291;
}
function isHangulJamo(codePoint) {
  return isHangulLeadingJamo(codePoint) || isHangulVowelJamo(codePoint) || isHangulTrailingJamo(codePoint);
}
function hangulClusterWidth(visibleSegment, eastAsianWidthOptions) {
  const codePoints = [];
  for (const character of visibleSegment) {
    if (!visibleCharacterRegex.test(character)) {
      continue;
    }
    codePoints.push(character.codePointAt(0));
  }
  if (codePoints.length === 0) {
    return void 0;
  }
  let width = 0;
  for (let index = 0; index < codePoints.length; index++) {
    const codePoint = codePoints[index];
    if (!isHangulJamo(codePoint)) {
      if (width === 0) {
        return void 0;
      }
      for (let remaining = index; remaining < codePoints.length; remaining++) {
        width += eastAsianWidth(codePoints[remaining], eastAsianWidthOptions);
      }
      return width;
    }
    if (isHangulLeadingJamo(codePoint) && isHangulVowelJamo(codePoints[index + 1])) {
      width += 2;
      index += isHangulTrailingJamo(codePoints[index + 2]) ? 2 : 1;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}
function trailingWidth(visibleSegment, eastAsianWidthOptions) {
  let extra = 0;
  let first = true;
  for (const character of visibleSegment) {
    if (first) {
      first = false;
      continue;
    }
    if (spacingMarkRegex.test(character) || character >= "\uFF00" && character <= "\uFFEF") {
      extra += eastAsianWidth(character.codePointAt(0), eastAsianWidthOptions);
    }
  }
  return extra;
}
function stringWidth(input, options = {}) {
  if (typeof input !== "string" || input.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  let string = input;
  if (!countAnsiEscapeCodes && (string.includes("\x1B") || string.includes("\x9B"))) {
    string = stripAnsi(string);
  }
  if (string.length === 0) {
    return 0;
  }
  if (/^[\u0020-\u007E]*$/.test(string)) {
    return string.length;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment } of segmenter.segment(string)) {
    const visibleSegment = baseVisible(segment);
    if (visibleSegment === void 0) {
      continue;
    }
    if (rgiEmojiRegex.test(segment) || isDoubleWidthNonRgiEmojiSequence(segment)) {
      width += 2;
      continue;
    }
    const hangulWidth = hangulClusterWidth(visibleSegment, eastAsianWidthOptions);
    if (hangulWidth !== void 0) {
      width += hangulWidth;
      continue;
    }
    const codePoint = visibleSegment.codePointAt(0);
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
    width += trailingWidth(visibleSegment, eastAsianWidthOptions);
  }
  return width;
}

// node_modules/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/wrap-ansi/index.js
var ANSI_ESCAPE = "\x1B";
var ANSI_ESCAPE_BELL = "\x07";
var C1_CSI = "\x9B";
var ANSI_CSI = "[";
var ANSI_OSC = "]";
var ANSI_SGR_TERMINATOR = "m";
var ANSI_SGR_RESET = 0;
var ANSI_SGR_RESET_FOREGROUND = 39;
var ANSI_SGR_RESET_BACKGROUND = 49;
var ANSI_SGR_RESET_UNDERLINE_COLOR = 59;
var ANSI_SGR_FOREGROUND_EXTENDED = 38;
var ANSI_SGR_BACKGROUND_EXTENDED = 48;
var ANSI_SGR_UNDERLINE_COLOR_EXTENDED = 58;
var ANSI_SGR_COLOR_MODE_RGB = 2;
var ANSI_SGR_COLOR_MODE_256 = 5;
var ANSI_ESCAPE_LINK = `${ANSI_OSC}8;`;
var ESCAPES = /* @__PURE__ */ new Set([
  ANSI_ESCAPE,
  C1_CSI
]);
var ESCAPE_CHARACTERS = [...ESCAPES].join("");
var CSI_INTRODUCER = `(?:${ANSI_ESCAPE}\\${ANSI_CSI}|${C1_CSI})`;
var CSI_PARAMETERS = "[0-?]*[ -/]*[@-~]";
var SGR_PARAMETERS = `(?<sgr>[0-9;:]*)${ANSI_SGR_TERMINATOR}`;
var OSC_STRING_TERMINATOR = `(?:${ANSI_ESCAPE_BELL}|${ANSI_ESCAPE}\\\\)`;
var OSC_STRING_PAYLOAD = String.raw`[^\u0000-\u001F\u007F-\u009F]*`;
var LINK_PARAMETERS = String.raw`8;(?<parameters>[^;\u0000-\u001F\u007F-\u009F]*);(?<uri>${OSC_STRING_PAYLOAD})${OSC_STRING_TERMINATOR}`;
var OSC_STRING = `${OSC_STRING_PAYLOAD}${OSC_STRING_TERMINATOR}`;
var ANSI_ESCAPE_REGEX = new RegExp(
  `${CSI_INTRODUCER}(?:${SGR_PARAMETERS}|${CSI_PARAMETERS})|${ANSI_ESCAPE}\\${ANSI_OSC}(?:${LINK_PARAMETERS}|${OSC_STRING})`,
  "y"
);
var ANSI_SGR_MODIFIER_CLOSE_CODES = new Set(ansi_styles_default.codes.values());
ANSI_SGR_MODIFIER_CLOSE_CODES.delete(ANSI_SGR_RESET);
var segmenter2 = new Intl.Segmenter();
var getStringWidth = (string) => stringWidth(string, { countAnsiEscapeCodes: true });
var TAB_SIZE = 8;
var ESCAPE_INTRODUCER_REGEX = new RegExp(`[${ESCAPE_CHARACTERS}]`, "g");
var ROW_BOUNDARY_REGEX = new RegExp(`[\\n${ESCAPE_CHARACTERS}]`, "g");
var ASCII_PRINTABLE_REGEX = /^[ -~]*$/;
var wrapAnsiCode = (code) => `${ANSI_ESCAPE}${ANSI_CSI}${code}${ANSI_SGR_TERMINATOR}`;
var wrapAnsiHyperlink = (url, parameters = "") => `${ANSI_ESCAPE}${ANSI_ESCAPE_LINK}${parameters};${url}${ANSI_ESCAPE_BELL}`;
var matchAnsiEscape = (string, index) => {
  if (!ESCAPES.has(string[index])) {
    return;
  }
  ANSI_ESCAPE_REGEX.lastIndex = index;
  return ANSI_ESCAPE_REGEX.exec(string) ?? void 0;
};
var forEachSegment = (string, onPlainText, onEscape = () => {
}) => {
  let plainStart = 0;
  let index = 0;
  while (index < string.length) {
    ESCAPE_INTRODUCER_REGEX.lastIndex = index;
    const introducer = ESCAPE_INTRODUCER_REGEX.exec(string);
    if (!introducer) {
      break;
    }
    const escape = matchAnsiEscape(string, introducer.index);
    if (!escape) {
      index = introducer.index + 1;
      continue;
    }
    if (introducer.index > plainStart) {
      onPlainText(string.slice(plainStart, introducer.index));
    }
    onEscape(escape[0]);
    index = introducer.index + escape[0].length;
    plainStart = index;
  }
  if (plainStart < string.length) {
    onPlainText(string.slice(plainStart));
  }
};
var getWidth = (string) => {
  let plainText = "";
  forEachSegment(string, (part) => {
    plainText += part;
  });
  return getStringWidth(plainText);
};
var getTokens = (string) => {
  const tokens = [];
  forEachSegment(string, (plainText) => {
    if (ASCII_PRINTABLE_REGEX.test(plainText)) {
      for (const character of plainText) {
        tokens.push({ value: character, width: 1 });
      }
      return;
    }
    for (const { segment } of segmenter2.segment(plainText)) {
      tokens.push({ value: segment, width: getStringWidth(segment) });
    }
  }, (escape) => {
    tokens.push({ value: escape, width: 0 });
  });
  return tokens;
};
var splitWords = (string) => {
  let currentWord = { value: "", plainText: "" };
  const words = [currentWord];
  forEachSegment(string, (plainText) => {
    const parts = plainText.split(" ");
    currentWord.value += parts[0];
    currentWord.plainText += parts[0];
    for (let index = 1; index < parts.length; index++) {
      currentWord = { value: parts[index], plainText: parts[index] };
      words.push(currentWord);
    }
  }, (escape) => {
    currentWord.value += escape;
  });
  for (const word of words) {
    word.width = getStringWidth(word.plainText);
  }
  return words;
};
var getColonColorToken = (parameter) => {
  const parts = parameter.split(":");
  const code = Number.parseInt(parts[0], 10);
  const mode = Number.parseInt(parts[1], 10);
  if (![ANSI_SGR_FOREGROUND_EXTENDED, ANSI_SGR_BACKGROUND_EXTENDED, ANSI_SGR_UNDERLINE_COLOR_EXTENDED].includes(code)) {
    return;
  }
  if (mode === ANSI_SGR_COLOR_MODE_256 && parts.length === 3 && /^\d+$/.test(parts[2])) {
    return { code, open: parameter, hasArguments: true };
  }
  if (mode !== ANSI_SGR_COLOR_MODE_RGB) {
    return;
  }
  const components = parts.length === 6 ? parts.slice(3) : parts.slice(2);
  const colorSpace = parts.length === 6 ? parts[2] : void 0;
  if (components.length === 3 && components.every((component) => /^\d+$/.test(component)) && (colorSpace === void 0 || /^\d*$/.test(colorSpace))) {
    return { code, open: parameter, hasArguments: true };
  }
};
var getSgrTokens = (sgrParameters) => {
  const parameters = sgrParameters.split(";");
  const sgrTokens = [];
  for (let index = 0; index < parameters.length; index++) {
    const parameter = parameters[index];
    if (parameter.includes(":")) {
      const colonColorToken = getColonColorToken(parameter);
      if (colonColorToken) {
        sgrTokens.push(colonColorToken);
      }
      continue;
    }
    const code = parameter === "" ? ANSI_SGR_RESET : Number.parseInt(parameter, 10);
    if (!Number.isFinite(code)) {
      continue;
    }
    if (code === ANSI_SGR_FOREGROUND_EXTENDED || code === ANSI_SGR_BACKGROUND_EXTENDED || code === ANSI_SGR_UNDERLINE_COLOR_EXTENDED) {
      if (index + 1 >= parameters.length) {
        break;
      }
      const mode = Number.parseInt(parameters[index + 1], 10);
      const colorIndex = Number.parseInt(parameters[index + 2], 10);
      if (mode === ANSI_SGR_COLOR_MODE_256 && Number.isFinite(colorIndex)) {
        sgrTokens.push({ code, open: [code, mode, colorIndex].join(";"), hasArguments: true });
        index += 2;
        continue;
      }
      const red = Number.parseInt(parameters[index + 2], 10);
      const green = Number.parseInt(parameters[index + 3], 10);
      const blue = Number.parseInt(parameters[index + 4], 10);
      if (mode === ANSI_SGR_COLOR_MODE_RGB && Number.isFinite(red) && Number.isFinite(green) && Number.isFinite(blue)) {
        sgrTokens.push({ code, open: [code, mode, red, green, blue].join(";"), hasArguments: true });
        index += 4;
        continue;
      }
      break;
    }
    sgrTokens.push({ code, open: String(code), hasArguments: false });
  }
  return sgrTokens;
};
var removeActiveStyle = (activeStyles, family) => {
  const activeStyleIndex = activeStyles.findIndex((activeStyle) => activeStyle.family === family);
  if (activeStyleIndex !== -1) {
    activeStyles.splice(activeStyleIndex, 1);
  }
};
var upsertActiveStyle = (activeStyles, nextActiveStyle) => {
  removeActiveStyle(activeStyles, nextActiveStyle.family);
  activeStyles.push(nextActiveStyle);
};
var removeModifierStylesByClose = (activeStyles, closeCode) => {
  for (let index = activeStyles.length - 1; index >= 0; index--) {
    const activeStyle = activeStyles[index];
    if (activeStyle.family.startsWith("modifier-") && activeStyle.close === closeCode) {
      activeStyles.splice(index, 1);
    }
  }
};
var getColorStyle = (sgrToken) => {
  const { code, open, hasArguments } = sgrToken;
  if (code >= 30 && code <= 37 || code >= 90 && code <= 97 || code === ANSI_SGR_FOREGROUND_EXTENDED && hasArguments) {
    return {
      family: "foreground",
      open,
      close: ANSI_SGR_RESET_FOREGROUND
    };
  }
  if (code >= 40 && code <= 47 || code >= 100 && code <= 107 || code === ANSI_SGR_BACKGROUND_EXTENDED && hasArguments) {
    return {
      family: "background",
      open,
      close: ANSI_SGR_RESET_BACKGROUND
    };
  }
  if (code === ANSI_SGR_UNDERLINE_COLOR_EXTENDED && hasArguments) {
    return {
      family: "underlineColor",
      open,
      close: ANSI_SGR_RESET_UNDERLINE_COLOR
    };
  }
};
var applySgrResetCode = (code, activeStyles) => {
  if (code === ANSI_SGR_RESET) {
    activeStyles.length = 0;
    return true;
  }
  if (code === ANSI_SGR_RESET_FOREGROUND) {
    removeActiveStyle(activeStyles, "foreground");
    return true;
  }
  if (code === ANSI_SGR_RESET_BACKGROUND) {
    removeActiveStyle(activeStyles, "background");
    return true;
  }
  if (code === ANSI_SGR_RESET_UNDERLINE_COLOR) {
    removeActiveStyle(activeStyles, "underlineColor");
    return true;
  }
  if (ANSI_SGR_MODIFIER_CLOSE_CODES.has(code)) {
    removeModifierStylesByClose(activeStyles, code);
    return true;
  }
  return false;
};
var applySgrToken = (sgrToken, activeStyles) => {
  const { code } = sgrToken;
  if (applySgrResetCode(code, activeStyles)) {
    return;
  }
  const colorStyle = getColorStyle(sgrToken);
  if (colorStyle) {
    upsertActiveStyle(activeStyles, colorStyle);
    return;
  }
  const close = ansi_styles_default.codes.get(code);
  if (close !== void 0 && close !== ANSI_SGR_RESET) {
    upsertActiveStyle(activeStyles, {
      family: `modifier-${code}`,
      open: sgrToken.open,
      close
    });
  }
};
var applySgrParameters = (sgrParameters, activeStyles) => {
  for (const sgrToken of getSgrTokens(sgrParameters)) {
    applySgrToken(sgrToken, activeStyles);
  }
};
var applySgrResets = (sgrParameters, activeStyles) => {
  for (const { code } of getSgrTokens(sgrParameters)) {
    applySgrResetCode(code, activeStyles);
  }
};
var applyLeadingSgrResets = (string, startIndex, activeStyles) => {
  let index = startIndex;
  while (index < string.length) {
    const match = matchAnsiEscape(string, index);
    if (!match) {
      break;
    }
    if (match.groups.sgr !== void 0) {
      applySgrResets(match.groups.sgr, activeStyles);
    }
    index += match[0].length;
  }
};
var getClosingSgrSequence = (activeStyles) => [...activeStyles].reverse().map((activeStyle) => wrapAnsiCode(activeStyle.close)).join("");
var getOpeningSgrSequence = (activeStyles) => activeStyles.map((activeStyle) => wrapAnsiCode(activeStyle.open)).join("");
var wrapWord = (rows, word, columns, rowWidth) => {
  const tokens = getTokens(word);
  let visible = rowWidth;
  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    if (token.width > 0 && visible > 0 && visible + token.width > columns) {
      rows.push("");
      visible = 0;
    }
    rows[rows.length - 1] += token.value;
    visible += token.width;
    if (visible === columns && index < tokens.length - 1) {
      rows.push("");
      visible = 0;
    }
  }
  if (!visible && rows.at(-1).length > 0 && rows.length > 1) {
    rows[rows.length - 2] += rows.pop();
  }
  return getWidth(rows.at(-1));
};
var stringVisibleTrimSpacesRight = (string) => {
  if (!string.includes(" ")) {
    return string;
  }
  const segments = [];
  forEachSegment(string, (plainText) => {
    segments.push({ value: plainText, isEscape: false });
  }, (escape) => {
    segments.push({ value: escape, isEscape: true });
  });
  for (let index = segments.length - 1; index >= 0; index--) {
    const segment = segments[index];
    if (segment.isEscape) {
      continue;
    }
    let end = segment.value.length;
    while (end > 0 && segment.value[end - 1] === " ") {
      end--;
    }
    segment.value = segment.value.slice(0, end);
    if (getStringWidth(segment.value) > 0) {
      break;
    }
  }
  return segments.map((segment) => segment.value).join("");
};
var expandTabs = (line) => {
  if (!line.includes("	")) {
    return line;
  }
  let visible = 0;
  let expandedLine = "";
  let plainTextSinceTab = "";
  const expandPlainText = (plainText) => {
    const segments = plainText.split("	");
    for (const [index, segment] of segments.entries()) {
      expandedLine += segment;
      plainTextSinceTab += segment;
      if (index < segments.length - 1) {
        visible += getStringWidth(plainTextSinceTab);
        plainTextSinceTab = "";
        const spaces = TAB_SIZE - visible % TAB_SIZE;
        expandedLine += " ".repeat(spaces);
        visible += spaces;
      }
    }
  };
  forEachSegment(line, expandPlainText, (escape) => {
    expandedLine += escape;
  });
  return expandedLine;
};
var restoreStylesAcrossRows = (preString) => {
  let returnValue = "";
  let activeHyperlink;
  const activeStyles = [];
  let index = 0;
  let copiedIndex = 0;
  while (index < preString.length) {
    ROW_BOUNDARY_REGEX.lastIndex = index;
    const boundary = ROW_BOUNDARY_REGEX.exec(preString);
    if (!boundary) {
      break;
    }
    index = boundary.index;
    if (boundary[0] !== "\n") {
      const escape = matchAnsiEscape(preString, index);
      if (!escape) {
        index++;
        continue;
      }
      const { groups } = escape;
      if (groups.sgr !== void 0) {
        applySgrParameters(groups.sgr, activeStyles);
      } else if (groups.uri !== void 0) {
        activeHyperlink = groups.uri.length === 0 ? void 0 : { parameters: groups.parameters, uri: groups.uri };
      }
      index += escape[0].length;
      continue;
    }
    returnValue += preString.slice(copiedIndex, index);
    if (index > copiedIndex) {
      if (activeHyperlink) {
        returnValue += wrapAnsiHyperlink("");
      }
      returnValue += getClosingSgrSequence(activeStyles);
    }
    returnValue += "\n";
    index++;
    copiedIndex = index;
    if (index < preString.length && preString[index] !== "\n") {
      const openingStyles = [...activeStyles];
      applyLeadingSgrResets(preString, index, openingStyles);
      returnValue += getOpeningSgrSequence(openingStyles);
      if (activeHyperlink) {
        returnValue += wrapAnsiHyperlink(activeHyperlink.uri, activeHyperlink.parameters);
      }
    }
  }
  return returnValue + preString.slice(copiedIndex);
};
var exec = (string, columns, options = {}) => {
  if (options.trim !== false && string.trim() === "") {
    return "";
  }
  const words = splitWords(string);
  let rows = [""];
  let rowLength = 0;
  let trimmedRowIndex = -1;
  let isFirstWord = true;
  for (const word of words) {
    const rowIndex = rows.length - 1;
    if (options.trim !== false && trimmedRowIndex !== rowIndex) {
      const row = rows[rowIndex];
      const trimmedRow = row.trimStart();
      if (trimmedRow.length !== row.length) {
        rows[rowIndex] = trimmedRow;
        rowLength = getWidth(trimmedRow);
      }
      if (trimmedRow.length > 0) {
        trimmedRowIndex = rowIndex;
      }
    }
    if (isFirstWord) {
      isFirstWord = false;
    } else {
      if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
        rows.push("");
        rowLength = 0;
      }
      if (rowLength > 0 || options.trim === false) {
        rows[rows.length - 1] += " ";
        rowLength++;
      }
    }
    if (options.hard && options.wordWrap !== false && word.width > columns) {
      const remainingColumns = columns - rowLength;
      const breaksStartingThisLine = 1 + Math.floor((word.width - remainingColumns - 1) / columns);
      const breaksStartingNextLine = Math.floor((word.width - 1) / columns);
      if (breaksStartingNextLine < breaksStartingThisLine) {
        rows.push("");
        rowLength = 0;
      }
      rowLength = wrapWord(rows, word.value, columns, rowLength);
      continue;
    }
    if (rowLength + word.width > columns && rowLength > 0 && word.width > 0) {
      if (options.wordWrap === false && rowLength < columns) {
        rowLength = wrapWord(rows, word.value, columns, rowLength);
        continue;
      }
      rows.push("");
      rowLength = 0;
    }
    if (rowLength + word.width > columns && options.wordWrap === false) {
      rowLength = wrapWord(rows, word.value, columns, rowLength);
      continue;
    }
    rows[rows.length - 1] += word.value;
    rowLength += word.width;
  }
  if (options.trim !== false) {
    rows = rows.map((row) => stringVisibleTrimSpacesRight(row));
  }
  return restoreStylesAcrossRows(rows.join("\n"));
};
var normalizeText = (string) => {
  let normalizedString = "";
  forEachSegment(string, (plainText) => {
    normalizedString += plainText.normalize();
  }, (escape) => {
    normalizedString += escape;
  });
  return normalizedString;
};
function wrapAnsi(string, columns, options) {
  return normalizeText(String(string)).replaceAll("\r\n", "\n").split("\n").map((line) => exec(expandTabs(line), columns, options)).join("\n");
}

// src/text.js
var sgr = /(\x1b\[[0-9;:]*m)/g;
function safeText(text, color = false) {
  return text.split(sgr).map((value, index) => {
    if (index % 2) return color ? value : "";
    return value.replace(/\x1b\][\s\S]*?(?:\x07|\x1b\\)/g, "").replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "").replace(/\x1b[^\n]?/g, "").replace(/\r\n?/g, "\n").replace(/\t/g, "    ").replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/g, "");
  }).join("");
}
function displayWidth(text) {
  return stringWidth(text);
}
function wrapText(text, width, wrap = true) {
  if (!wrap) return text.split("\n");
  return wrapAnsi(text, width, { hard: true, trim: false }).split("\n");
}

// src/random.js
function choose(names, seed, salt) {
  if (seed === void 0)
    return names[Math.floor(Math.random() * names.length)];
  const value = `${salt}:${typeof seed}:${seed}`;
  let hash = 2166136261;
  for (const char of value) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return names[hash % names.length];
}

// src/moods.js
var intros = {
  classic: "BRO...",
  hype: "BRO! THE TERMINAL IS APPLAUDING!",
  chill: "Bro. One thing at a time.",
  panic: "BRO! DEEP BREATH. CHECK THE LOGS.",
  corporate: "Bro, please find the following update for alignment.",
  coach: "Bro, you have got this. Take the next step."
};

// src/legacy.js
function brosay(message, { mood = "classic" } = {}) {
  return `${intros[mood]}

${message.trim()}`;
}

// src/render.js
var listCharacters = () => Object.keys(characters);
var moods = () => Object.keys(personas);
var listThemes = () => Object.keys(themes);
function name(value, catalog, fallback, kind) {
  if (value === void 0 || value === null) return fallback;
  if (typeof value !== "string")
    throw new TypeError(`${kind} must be a string.`);
  const key = value.trim().toLowerCase();
  if (!Object.hasOwn(catalog, key))
    throw new RangeError(
      `Unknown ${kind}: ${value}. Choose: ${Object.keys(catalog).join(", ")}.`
    );
  return key;
}
function characterData(value) {
  if (!value || typeof value !== "object" || Array.isArray(value) || typeof value.name !== "string" || !/^[a-z0-9-]{1,40}$/.test(value.name) || !Array.isArray(value.art) || value.art.length < 1 || value.art.length > 20 || !value.art.every(
    (line) => typeof line === "string" && line.length <= 64 && /^[\x20-\x7e]*$/.test(line)
  ))
    throw new TypeError(
      "Custom character needs a slug name and 1\u201320 printable ASCII lines of at most 64 characters."
    );
  return { name: value.name, art: [...value.art] };
}
function renderBro(options) {
  if (!options || typeof options !== "object" || Array.isArray(options))
    throw new TypeError("Provide a render options object.");
  const { text } = options;
  if (typeof text !== "string" || !text.trim())
    throw new TypeError("Message must be a nonempty string.");
  if (text.length > 262144)
    throw new RangeError("Message exceeds 262144 UTF-16 code units.");
  for (const key of ["random", "color", "wrap", "think", "box"])
    if (options[key] !== void 0 && typeof options[key] !== "boolean")
      throw new TypeError(`${key} must be a boolean.`);
  if (options.seed !== void 0 && typeof options.seed !== "string" && !(typeof options.seed === "number" && Number.isFinite(options.seed)))
    throw new TypeError("seed must be a string or finite number.");
  if (options.seed !== void 0 && !options.random)
    throw new TypeError("seed requires random: true.");
  const width = options.width ?? 48;
  if (!Number.isSafeInteger(width) || width < 8 || width > 200)
    throw new RangeError(
      "width must be an integer from 8 to 200 (content columns)."
    );
  const mode = name(
    options.mode,
    { say: 1, think: 1 },
    options.think ? "think" : "say",
    "mode"
  );
  const theme = name(
    options.theme,
    themes,
    options.random ? choose(listThemes(), options.seed, "theme") : "classic",
    "theme"
  );
  const mood = name(
    options.mood,
    personas,
    options.random ? choose(moods(), options.seed, "mood") : "classic",
    "mood"
  );
  const custom = typeof options.character === "object" && options.character !== null;
  const character = custom ? characterData(options.character) : characters[name(
    options.character,
    characters,
    options.random ? choose(listCharacters(), options.seed, "character") : "husky",
    "character"
  )];
  const layout = name(
    options.layout,
    { bubble: 1, plain: 1 },
    "bubble",
    "layout"
  );
  const message = safeText(text, options.color ?? false).trim();
  if (!message) throw new TypeError("Message contains no printable content.");
  const persona = personas[mood];
  let rendered;
  if (layout === "plain" || options.box) {
    const legacy = brosay(message, {
      mood: Object.hasOwn(legacyIntros, mood) ? mood : "classic",
      box: false
    });
    const lines = legacy.split("\n");
    if (options.box && (lines.length > 100 || Math.max(...lines.map(displayWidth)) > 200))
      throw new RangeError("Legacy box exceeds 200 columns or 100 lines.");
    rendered = options.box ? bubble(lines, themes.classic, false) : legacy;
  } else {
    const contents = [
      persona.intro,
      ...persona.label ? ["", persona.label] : [],
      "",
      message,
      ...persona.outro ? ["", persona.outro] : []
    ].join("\n");
    const lines = wrapText(contents, width, options.wrap ?? true);
    if (lines.length > 4096)
      throw new RangeError(
        "Rendered output exceeds 4096 lines. Increase width or shorten input."
      );
    const connector = mode === "think" ? "   o\n    o" : "   \\\n    \\";
    rendered = bubble(lines, themes[theme], options.color ?? false) + "\n" + connector + "\n" + character.art.map((line) => "     " + line).join("\n");
  }
  return {
    text: message,
    character: character.name,
    mood,
    theme,
    mode,
    width,
    rendered
  };
}
var legacyIntros = {
  classic: 1,
  hype: 1,
  chill: 1,
  panic: 1,
  corporate: 1,
  coach: 1
};
function bubble(lines, theme, color) {
  const columns = Math.max(...lines.map(displayWidth));
  const border = (parts) => parts[0] + parts[1].repeat(columns + 2) + parts[2];
  const body = lines.map(
    (line) => `${theme.side} ${line}${color ? "\x1B[0m" : ""}${" ".repeat(columns - displayWidth(line))} ${theme.side}`
  );
  const result = [border(theme.top), ...body, border(theme.bottom)].join("\n");
  return color ? `\x1B[${theme.color}m${result}\x1B[0m` : result;
}
function brosay2(text, options = {}) {
  if (!options || typeof options !== "object" || Array.isArray(options))
    throw new TypeError("Options must be an object.");
  return renderBro({ ...options, text }).rendered;
}
function brothink(text, options = {}) {
  if (!options || typeof options !== "object" || Array.isArray(options))
    throw new TypeError("Options must be an object.");
  return renderBro({ ...options, text, mode: "think" }).rendered;
}

// src/messages.js
var presets = {
  deployment: [
    "The release has landed. Please keep your monitoring inside the vehicle.",
    "Shipped with confidence. Verified with health checks.",
    "Today we deploy code and a reasonable rollback plan.",
    "The canary is singing. Let us keep listening.",
    "A small release for the app. A large relief for the team.",
    "The deployment passed. The dashboard gets the final word."
  ],
  testing: [
    "Red, green, refactor. Snacks are an optional fourth step.",
    "The test failed usefully. That is a good beginning.",
    "A passing test is a receipt, not a prophecy.",
    "Make the edge case boring enough to test.",
    "One regression test today saves a mystery tomorrow.",
    "The suite is green. Check what it actually covered."
  ],
  debugging: [
    "Read the first error before collecting the entire stack trace.",
    "The rubber duck requests a smaller reproduction.",
    "Follow the value. It knows where it has been.",
    "A breakpoint is cheaper than a theory committee.",
    "The bug cannot hide from a clear input and a patient developer.",
    "One hypothesis. One experiment. One less guess."
  ],
  review: [
    "Review the change, not the person who wrote it.",
    "A kind question can save a very loud incident.",
    "The clever line would appreciate a simple explanation.",
    "If future-you needs a map, leave a comment today.",
    "LGTM comes after understanding the diff.",
    "Small commits make excellent conversation starters."
  ],
  coffee: [
    "The code is brewing. So is the coffee.",
    "A refill is not a retry policy, but it can improve the meeting.",
    "This mug contains the unofficial build coordinator.",
    "The coffee is hot. The take can wait.",
    "Hydrate between compilations. Your compiler does not need another cup.",
    "A short break is a legitimate debugging technique."
  ],
  celebration: [
    "The fix worked. Give the test its share of the applause.",
    "Celebrate the boring release. It took good work to make it boring.",
    "One fewer alert. One more reason to take a walk.",
    "The team shipped a useful thing. That deserves a victory lap.",
    "Success has receipts and a very happy tail.",
    "Treat budget approved after verification."
  ],
  husky: [
    "Dallas brings the zoomies. Benji brings the next idea.",
    "Two huskies, one keyboard, absolutely no quiet roadmap.",
    "Commit small. Run fast. Leave the socks out of production.",
    "Dallas heard deploy. Benji heard play. Both approve a smoke test.",
    "High energy is a feature. Good boundaries keep it useful.",
    "Our huskies believe every adventure deserves enthusiasm and a return route."
  ],
  focus: [
    "Pick the next useful step. Finish that one.",
    "Reduce the scope until the problem fits in your afternoon.",
    "Your terminal can have personality. Your interfaces should have clarity.",
    "Small progress counts even without a dramatic soundtrack.",
    "A helpful tool should make the next action easier to see.",
    "Close one loop before opening six more tabs."
  ]
};
var messageCategories = () => Object.keys(presets);
function messagePresets(category) {
  if (typeof category !== "string" || !Object.hasOwn(presets, category.trim().toLowerCase()))
    throw new RangeError(
      "Choose a supported message category: " + messageCategories().join(", ")
    );
  return [...presets[category.trim().toLowerCase()]];
}
function broMessage(category = "deployment", options = {}) {
  if (!options || typeof options !== "object" || Array.isArray(options))
    throw new TypeError("Options must be an object.");
  if (options.seed !== void 0 && typeof options.seed !== "string" && !(typeof options.seed === "number" && Number.isFinite(options.seed)))
    throw new TypeError("seed must be a string or finite number.");
  return choose(
    messagePresets(category),
    options.seed,
    "message:" + category.trim().toLowerCase()
  );
}
export {
  broMessage,
  brosay2 as brosay,
  brothink,
  displayWidth,
  listCharacters,
  listThemes,
  messageCategories,
  messagePresets,
  moods,
  renderBro
};
