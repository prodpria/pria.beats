// Runs on Cloudflare before each deploy: makes beats/list.json from the beats folder
const fs = require("fs");
const names = fs.readdirSync("beats").filter(n => /\.(mp3|wav|m4a|ogg)$/i.test(n)).sort();
fs.writeFileSync("beats/list.json", JSON.stringify(names));
console.log("Beat list:", names);
