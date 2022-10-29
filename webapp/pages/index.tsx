import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vinay Dasari Portfolio</title>
        <meta name="description" content="Vinay Dasari's Portfolio Website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hi!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .typeString("I'm Vinay Dasari!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I'm a Frontend Developer!")
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </h1>
        <div>
          <p className={styles.description}>
            <a 
              className={styles.card} 
              href="https://github.com/VinayDasari07" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              className={styles.card} 
              href="https://www.linkedin.com/in/vinay-d-7998ba88/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              className={styles.card} 
              href="https://twitter.com/iamvinaydasari"
              target="_blank" 
              rel="noopener noreferrer"
              >
                Twitter
            </a>
          </p>
        </div>

      </main>

      <footer className={styles.footer}>
        <p>
          Work in Progress
        </p>
      </footer>
    </div>
  )
}
