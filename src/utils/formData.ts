const formData = (obj: Dictionary<any>) =>
  Object.keys(obj).reduce((acc, cv) => {
    acc.append(cv, obj[cv]);
    return acc;
  }, new FormData());

export default formData;
