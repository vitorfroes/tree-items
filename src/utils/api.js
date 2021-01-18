export async function fetchTreeItems() {
  const response = await await fetch(
    "https://api.github.com/repos/HiPlatform/prova-frontend/contents/data.json"
  ).then((data) => {
    return data.json();
  });

  return response;
}

export default function decodeContent(data) {
  const decoded = JSON.parse(
    decodeURIComponent(
      atob(data.content)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    )
  );

  return Object.values(decoded);
}
