const fs = require("fs");
const path = require("path");

const rawDir = path.join(__dirname, "..", "data", "raw");

function readJson(fileName) {
  const fullPath = path.join(rawDir, fileName);
  return JSON.parse(fs.readFileSync(fullPath, "utf8"));
}

const skills = readJson("skill_metadata.json");
const glyphs = readJson("glyph_data.json");
const aspectSkillMap = readJson("aspect_skill_map.json");

console.log("Skills:", Object.keys(skills).length);
console.log("Glyphs:", Object.keys(glyphs).length);
console.log("Aspect skill links:", Object.keys(aspectSkillMap).length);
