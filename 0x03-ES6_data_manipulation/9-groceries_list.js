export default function groceriesList() {
  const gloceries = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  //   get all the keys in the object into an array
  const list = Array.from(Object.keys(obj));

  list.map((item) => gloceries.set(item, obj[item]));
  return gloceries;
}
