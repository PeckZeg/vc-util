export default function addEventListenerWrap(
  target,
  eventType,
  callback,
  option?
) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: () => {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}
