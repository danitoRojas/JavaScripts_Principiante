function getbyIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return "Elmento no existe";
  }
  return arr[idx];
}
let resultado = getbyIdx([1, 9], -4);
console.log(resultado); // 2
