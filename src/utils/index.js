export const validator = (values, schema) => {
  return new Promise((resolve, reject) => {
    schema
      .validate(values, { abortEarly: false })
      .then(() => {
        resolve();
      })
      .catch((errors) => {
        let reduxFormErrors = {};
        errors.inner.forEach((error) => {
          reduxFormErrors[error.path] = error.message;
        });
        reject(reduxFormErrors);
      });
  });
};
