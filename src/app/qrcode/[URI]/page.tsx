"use client";
import Wave from "@/app/components/Wave";
import { decode } from "punycode";
import QRCode from "react-qr-code";
import style from "./qrcode.module.css";
import baseStyle from "../../page.module.css";
import Footer from "@/app/components/Footer";
interface Props {
  params: { URI: string };
}

export default function Qrcode({ params }: Props) {
  const { URI } = params;
  const userData = JSON.parse(decodeURIComponent(URI));
  return (
    <div className={style.main}>
      <Wave />
      <h1>Name: {userData.name}</h1>
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
          value={`/card/${userData.URL}`}
          viewBox={`0 0 500 500`}
        />
      </div>
      <section id={style.bottom}>
        <button className={baseStyle.button} onClick={() => window.print()}>
          {" "}
          Take a print
        </button>
      </section>
    </div>
  );
}
