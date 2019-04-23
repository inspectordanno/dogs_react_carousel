const dogs = async function (breed) {
  const dogsAPI = `https://dog.ceo/api/breed/${breed}/images/random/20`;
  const dogs = await fetch(dogsAPI);
  const json = await dogs.json();
  return json.message;  
}

const dogList = async function() {
  const api = 'https://dog.ceo/api/breeds/list/all';
  const list = await fetch(api);
  const json = await list.json();
  console.log(json);
}

export { dogs, dogList };

