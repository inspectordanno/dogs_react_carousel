const dogs = async function (breed) {
  const dogsAPI = `https://dog.ceo/api/breed/${breed}/images/random/20`;
  const dogs = await fetch(dogsAPI);
  const json = await dogs.json();
  return json.message;  
}

const dogList = async function() {
  const api = 'https://dog.ceo/api/breeds/list/all';
  const list = await fetch(api);
  console.log('list: ', list)
  const json = await list.json();
  console.log("jsonjson: ", json);
  return Object.keys(json.message);
}

export { dogs, dogList };

