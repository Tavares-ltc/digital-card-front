import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Wave from "./components/Wave";
import styles from "./page.module.css";
import ImageSlider from "./utils/ImageSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const baseURL =
    process.env.REACT_APP_QR_CODE_BASE_URL || "http://localhost:3000";
  return (
    <>
      <Wave />
      <Logo />
      <div className={styles.sideBySide}>
        <section>
          <Link href={`${baseURL}/creation`}>
            <div className={styles.images}>
              <Image
                src='/smartphone.png'
                alt='Picture of the author'
                width={200}
                height={400}
              />
              <ImageSlider />
            </div>
          </Link>
        </section>

        <section className={styles.rigthSection}>
          <section className={styles.textSection}>
            <h1>About</h1>
            <h2>
              Gone are the days of carrying around stacks of paper cards or
              relying on outdated designs. With Digital Business Card, you can
              <b> easily create and share your digital cards </b> with just a
              few taps on your phone or tablet.
            </h2>
            <h2>
              And the best part? Digital Business Card is eco-friendly and
              cost-effective. You ll{" "}
              <b>never have to worry about running out of cards</b>, or wasting
              paper on outdated designs. With our app, you can stay ahead of the
              game and make a lasting impression in a digital age.
            </h2>
            <h2>
              But the benefits dont stop there. With our app, you can easily
              share your digital business card with anyone, anywhere, at any
              time. Whether youre at a networking event, on a business trip, or
              just meeting with a potential client, you can
              <b>instantly share your card via QR code!</b>
            </h2>
          </section>
        </section>
      </div>
      <Footer>
        <Link href={"/creation"}>
          <Button>Create</Button>
        </Link>
      </Footer>
    </>
  );
}
