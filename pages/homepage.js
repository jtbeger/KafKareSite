import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Joel Beger, Wai Fai Lau, Jiaxin Li, Jenniel Figuereo, Kafka"
        ></meta>
      </Head>
      <div className="logo">
        <Image
          src="/kafk.png"
          alt="Kafkare main logo"
          width={720}
          height={300}
        />
        <div className="logotext">
          <h1 id="subtext">A System Monitoring Tool For Kafka</h1>
        </div>
        <div className="btn">
          <Link href="https://github.com/oslabs-beta/KafKare">
            <a>
              <button>
                <p className="gitbtn">Check out our github </p>
                <Image
                  className="gitbtn"
                  src="/GitHub-Mark.png"
                  alt="github logo"
                  width={32}
                  height={32}
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
