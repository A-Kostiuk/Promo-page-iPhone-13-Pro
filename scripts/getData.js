const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/tods")
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      } else {
        throw new Error("Данные были получены с ошибкой!");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error.message)
    })
    .finally(() => {
      console.log('finally')
    })
};
getData();
