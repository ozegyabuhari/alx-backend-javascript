export default function hasValuesFromArray(set, list) {
  let element = true;
  list.map((x) => {
    if (!set.has(x)) {
      element = false;
    }
  });

  return element;
}
