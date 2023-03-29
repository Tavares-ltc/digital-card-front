import api from "./api";

export default async function createCard (body: object) {
    const response = await fetch(`${api}/card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return await response.json();
  }