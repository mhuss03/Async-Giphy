require("dotenv").config();

async function getImage(query) {
  const res = await fetch(process.env.ENDPOINT);
  const data = await res.json();
  console.log(data);
  return data;
}

console.log(getImage("dog"));
