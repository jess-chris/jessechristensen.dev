import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import { defaultTitle } from "@/lib/constants";

export default function Projects() {

  return (

    <div className='container flex min-h-screen min-w-full flex-row'>

			<Head>
        <title>{`${defaultTitle} - Projects`}</title>
        <meta property='og:title' content={`${defaultTitle} - Projects`} key='title' />
      </Head>

      <Sidebar />

      <div className='main-content flex flex-col min-h-screen justify-center'>

				{/* <h2 id="message-header" className="message-header ml-4 ">My Projects...</h2> */}

        <div className="wrapper max-w-full">

          <div className="project flex flex-row max-w-full ml-16 mt-4">

            <div className="image-align"><img className="image fit" src="images/saidit.png" alt="Said.it" data-position="center center" /></div>
						<div className="content flex flex-col justify-center">
							<div className="inner">
								<h2>Said.it</h2>
								<p>A clone of reddit with a small addtion of text to speech for posts and comments. Utilizing Python + Flask with React + Redux.</p>
								<ul className="actions">
									<li><a href="https://github.com/jess-chris/said.it" className="button">GitHub</a><a href="https://squ99.tech/said_it/" className="button">Live Site</a></li>
								</ul>
							</div>
						</div>

          </div>

          <div className="project flex flex-row max-w-full ml-16">

          <div className="image-align"><img className="image fit" src="images/brilliance.png" alt="Brilliance" data-position="center center" /></div>
						<div className="content flex flex-col justify-center">
							<div className="inner">
								<h2>Brilliance</h2>
								<p>A Genius clone utilizing Python + Flask with React + Redux.</p>
								<ul className="actions">
									<li><a href="https://github.com/jess-chris/Brilliance" className="button">GitHub</a></li>
								</ul>
							</div>
						</div>
            
          </div>

          <div className="project flex flex-row max-w-full ml-16">

            <div className="image-align"><img className="image fit" src="images/flimg.png" alt="Flimg" data-position="center center" /></div>
						<div className="content flex flex-col justify-center">
							<div className="inner">
								<h2>Flimg</h2>
								<p>A Flickr clone utilizing Node.js + Express with React + Redux.</p>
								<ul className="actions">
									<li><a href="https://github.com/jess-chris/flimg-app" className="button">GitHub</a><a href="https://squ99.tech/flimg/" className="button">Live Site</a></li>
								</ul>
							</div>
						</div>
            
          </div>


        </div>
      </div>

    </div> 
  )

}