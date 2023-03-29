import api from "./api";
export interface BusinessCard {
  id: string;
  name: string;
  history: string;
  customURL?: string;
  picture?: string;
  linkedin?: string;
  github?: string;
  email: string;
  tel?: string;
  created_At: string;
}
export default async function getCardByCustomURL(
  URL: string
): Promise<BusinessCard> {
  const response = await fetch(`${api}/card/${URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
