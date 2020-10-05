export async function fetchTreeItems() {
  const response = await await fetch(
    "https://api.github.com/repos/HiPlatform/prova-frontend/contents/data.json"
  ).then((data) => {
    return data.json();
  });

  return response;
}

export default function decodeContent(data) {
  const decoded = JSON.parse(atob(data.content));

  return Object.values(decoded);
}

fetchTreeItems().then((data) => console.log(decodeContent(data)));
