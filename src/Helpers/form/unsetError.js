export default (id, errorMessages) => {
  if (!errorMessages) return;

  if (errorMessages) {
    if (typeof errorMessages === 'object' && errorMessages[id]) {
      delete errorMessages[id];
    }
  }
};
