"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/Button";
import serviceAPI from "../services";
import styles from "./creation.module.css";

export default function CreationPage() {
  const [cardData, setCardData] = useState({
    name: "",
    history: "",
    customURL:"",
    picture: "",
    linkedin: "",
    github: "",
    email: "",
    tel: "",
  });

  const router = useRouter();

  return (
    <>
      <main className={styles.main}>
        <Link href='/'>
          <h1>Create Your Business Card</h1>
        </Link>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='yourname'>Name</label>
            <input
              type='text'
              name='name'
              placeholder=''
              id='yourname'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor={styles.historyInput}>History</label>
            <textarea
              name='history'
              id={styles.historyInput}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='customURL'>Customize your Businees Card URL</label>
            <input
              type='text'
              name='customURL'
              placeholder=''
              id='customURL'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='picture'>Picture or logo URL</label>
            <input
              type='url'
              name='picture'
              placeholder=''
              id='picture'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='linkedin'>Linkedin URL</label>
            <input
              type='url'
              name='linkedin'
              placeholder=''
              id='linkedin'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='github'>Github URL</label>
            <input
              type='url'
              name='github'
              placeholder=''
              id='github'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder=''
              id='email'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='tel'>Telephone</label>
            <input
              type='tel'
              name='tel'
              placeholder=''
              id='tel'
              onChange={handleChange}
            />
          </div>
          <Button type='submit'>Create</Button>
        </form>
      </main>
    </>
  );

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget) return;
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    try {
      const response = await serviceAPI.createCard(values);

      const userData = { name: response?.name, URL: response?.customURL };
      router.push(`/qrcode${encodeURIComponent(JSON.stringify(userData))}}`);
    } catch (error) {
      alert("Something went wrong...");
    }
  }
}
