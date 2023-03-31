"use client";
import Wave from "@/app/components/Wave";
import QRCode from "react-qr-code";
import style from "./qrcode.module.css";
import baseStyle from "../../page.module.css";
import Link from "next/link";
import dotenv from "dotenv";

interface Props {
  params: { URI: string };
}

export default function Qrcode({ params }: Props) {
  const { URI } = params;
  const userData = JSON.parse(decodeURIComponent(URI));
  const baseURL =
    process.env.REACT_APP_QR_CODE_BASE_URL || "http://localhost:3000";
  const link = `${baseURL}/card/${userData.URL}`;
  return (
    <div className={style.main}>
      <Wave />
      <Link href={link}>
        <h1>Name: {userData.name}</h1>
      </Link>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 500,
          width: "100%",
        }}
      >
        <h2>Scan me</h2>
        <QRCode
          size={500}
          style={{ height: "auto", maxWidth: "80%", width: "100%" }}
          value={link}
          viewBox={`0 0 500 500`}
        />
      </div>
      <section id={style.bottom}>
        <button className={baseStyle.button} onClick={() => window.print()}>
          Print
        </button>
      </section>
    </div>
  );
}
