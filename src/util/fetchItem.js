import { url } from '../redux/store';

async function fetchItem(id) {
  const response = await fetch(`${url}/item/${id}.json`);
  const result = await response.json();
  return result;
}

export default fetchItem;
