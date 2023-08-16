import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import { defaultTitle } from "@/lib/constants";

export default function About() {

  return (
    <div className='container flex min-h-screen min-w-full flex-row'>

      <Head>
        <title>{`${defaultTitle} - About`}</title>
        <meta property='og:title' content={`${defaultTitle} - About`} key='title' />
      </Head>

      <Sidebar />

      <div className='main-content flex flex-col min-h-screen justify-center overflow-hidden'>
        <div className="wrapper max-w-full w-3/4 p-12 about">
          {/* <h1 id="message-header">Hello World...</h1> */}
          <p className="inner mt-8 text-left">
            As a programming enthusiast with a keen interest in cybersecurity, I am passionate about exploring new technologies and expanding my knowledge.<br/><br/> I discovered my passion for programming as a teenager after watching the movie Hackers, and I have been self-taught ever since. In addition to my self-taught skills, I have also taken Computer Science courses in college and completed a programming boot-camp to solidify my skills.

            My experience includes working with various systems, such as Linux and Unix distributions, as well as Windows platforms. I am proficient in JavaScript and Python for application development and have knowledge in C/C++, Bash, SQL, Networking, Security, and Reverse Engineering.<br/><br/> I have recently completed four full-stack projects, including a Reddit clone that utilizes React/Redux with Python/Flask.

            In addition to my technical skills, I am an excellent communicator and a hardworking individual who thrives on focused tasks. I am comfortable working independently or in groups, and I always strive to create a positive work environment. I have a strong interest in machine learning, AI, and cloud computing, and I am always eager to learn more and collaborate with others.<br/><br/>

            Feel free to reach out to me to connect or collaborate on new projects!
          </p>
        </div>
      </div>

    </div>
  )

}