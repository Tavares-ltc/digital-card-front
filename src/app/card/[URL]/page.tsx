"use client";

import Footer from "@/app/components/Footer";
import Wave from "@/app/components/Wave";
import getCardByCustomURL, { BusinessCard } from "@/app/services/getCardAPI";
import Link from "next/link";
import baseStyle from "../../page.module.css";
import style from "./card.module.css";
import { useEffect, useState } from "react";

interface Props {
  params: { URL: string };
}

export default function Qrcode({ params }: Props) {
  const { URL } = params;
  const [cardData, setCardData] = useState<BusinessCard | null>(null);
  async function fechData() {
    const businessCard = await getCardByCustomURL(URL);
    setCardData(businessCard);
  }
  useEffect(() => {
    fechData();
  }, []);
  if (!cardData) {
    return (
      <Footer>
        <h2>Loading...</h2>
      </Footer>
    );
  }

  return (
    <div className={style.main}>
      <Wave />
      <main>
        <div>
          {cardData?.picture && (
            <img src={cardData?.picture} alt={`${cardData.name} picture`} />
          )}
          <h1>{cardData.name}</h1>
        </div>
        <div>
          <h2>About:</h2>
          <h3>{cardData.history}</h3>
        </div>
        <section>
          {cardData?.linkedin && (
            <Link href={`${cardData?.linkedin}`}>
              <button className={baseStyle.button}>Linkedin</button>
            </Link>
          )}
          {cardData?.github && (
            <Link href={`${cardData?.github}`}>
              <button className={baseStyle.button}>Github</button>
            </Link>
          )}
        </section>
        <Footer>
          <h3>{cardData.email}</h3>
          {cardData.tel && <h3>{cardData.tel}</h3>}
        </Footer>
      </main>
    </div>
  );
}
