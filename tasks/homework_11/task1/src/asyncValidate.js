const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
  return sleep(1000).then(() => {
    if (['misuk@gmail.com', 'paul@gmail.com', 'george@gmail.com', 'ringo@gmail.com'].includes(values.email)) {
      throw {email: 'That username is taken'};
    }
  });
}
export default asyncValidate;
