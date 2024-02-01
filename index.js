const axios = require("axios");
function main() {
  fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
    const json = await res.json();
    console.log(json.todos);
  });
}
async function main1() {
  const res = await fetch("https://sum-server.100xdevs.com/todos");
  const json = await res.json();
  console.log(json.todos.length);
}

async function main3() {
  const res = await axios.get("https://sum-server.100xdevs.com/todos");
  console.log(res.data.todos.length);
}
// main();
main3();
