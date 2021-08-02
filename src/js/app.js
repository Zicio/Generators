export default function canIterate(target) {
  if (target === null) {
    return false;
  }
  if (typeof target[Symbol.iterator] === 'function') {
    return true;
  }
  console.log(typeof target[Symbol.iterator]);
  return false;
}
