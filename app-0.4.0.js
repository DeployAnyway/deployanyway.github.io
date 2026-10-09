import {
  renderBro,
  listCharacters,
  moods,
  listThemes,
  broMessage,
  messageCategories,
  messagePresets,
} from "./dist/browser.js";

const element = (id) => document.getElementById(id);
for (const [id, names, selected] of [
  ["character", listCharacters(), "husky"],
  ["mood", moods(), "sarcastic"],
  ["theme", listThemes(), "classic"],
]) {
  for (const name of names) {
    const option = document.createElement("option");
    option.value = option.textContent = name;
    option.selected = name === selected;
    element(id).append(option);
  }
}
const presetLabel = document.createElement("label");
presetLabel.textContent = "Message source";
const presetSelect = document.createElement("select");
presetSelect.id = "bro-preset";
for (const value of ["Your message", ...messageCategories()]) {
  const option = document.createElement("option");
  option.value = option.textContent = value;
  presetSelect.append(option);
}
presetLabel.append(presetSelect);
element("controls").prepend(presetLabel);
const presetList = document.createElement("pre");
presetList.className = "preset-library";
presetList.setAttribute("aria-label", "Message preset library");
element("controls").after(presetList);
function render() {
  try {
    const random = element("bro-selection").value === "random";
    for (const id of ["character", "mood", "theme"])
      element(id).disabled = random;
    const preset = element("bro-preset").value;
    const generated = preset !== "Your message";
    element("message").disabled = generated;
    element("bro-seed").disabled = !random && !generated;
    const text = generated
      ? broMessage(preset, { seed: element("bro-seed").value })
      : element("message").value;
    presetList.hidden = !generated;
    presetList.textContent = generated
      ? "All six " +
        preset +
        " presets:\n" +
        messagePresets(preset)
          .map((line, i) => i + 1 + ". " + line)
          .join("\n")
      : "";
    const result = renderBro({
      text,
      character: random ? undefined : element("character").value,
      mood: random ? undefined : element("mood").value,
      theme: random ? undefined : element("theme").value,
      mode: element("mode").value,
      width: Number(element("width").value),
      wrap: element("bro-wrap").checked,
      ...(element("bro-layout").value === "plain"
        ? { layout: "plain" }
        : element("bro-layout").value === "box"
          ? { box: true }
          : {}),
      ...(random ? { random: true, seed: element("bro-seed").value } : {}),
    });
    element("output").textContent =
      element("bro-format").value === "json"
        ? JSON.stringify(result, null, 2)
        : result.rendered;
    const quote = (value) => "'" + value.replaceAll("'", "'\\''") + "'";
    element("bro-command").textContent =
      `npx @deployanyway/bro-say@0.4.0 ${generated ? `--preset ${preset}` : quote(text)} --width ${element("width").value}` +
      (random
        ? ` --random --seed ${quote(element("bro-seed").value)}`
        : `${generated ? ` --seed ${quote(element("bro-seed").value)}` : ""} --character ${element("character").value} --mood ${element("mood").value} --theme ${element("theme").value}`) +
      (element("mode").value === "think" ? " --think" : "") +
      (element("bro-format").value === "json" ? " --json" : "") +
      (!element("bro-wrap").checked ? " --no-wrap" : "") +
      (element("bro-layout").value === "plain"
        ? " --plain"
        : element("bro-layout").value === "box"
          ? " --box"
          : "");
    element("status").textContent = "";
    element("copy").disabled = false;
    element("bro-copy-command").disabled = false;
  } catch (error) {
    element("status").textContent = error.message;
    element("output").textContent = "";
    element("copy").disabled = true;
    element("bro-copy-command").disabled = true;
    element("bro-command").textContent = "";
  }
}
element("controls").addEventListener("input", render);
element("controls").addEventListener("submit", (event) =>
  event.preventDefault(),
);
element("copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(element("output").textContent);
    element("status").textContent = "Copied. Ship the message responsibly.";
  } catch {
    element("status").textContent =
      "Clipboard unavailable. Select and copy the output manually.";
  }
});
render();

element("bro-copy-command").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(element("bro-command").textContent);
    element("status").textContent = "Command copied.";
  } catch {
    element("status").textContent = "Select and copy the command manually.";
  }
});
