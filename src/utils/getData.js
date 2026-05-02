async function getData() {
  const res = await fetch("http://localhost:3000/data.json");
  const cows = await res.json();
  return cows;
}

async function getDataWithId(id) {
  const cows = await getData();
  const filteredCow = cows.find((cow) => cow.id === Number(id));
  return filteredCow;
}

export { getData, getDataWithId };
