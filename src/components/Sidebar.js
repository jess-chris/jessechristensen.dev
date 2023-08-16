import Link from "next/link";

export default function Sidebar() {

  return (

      <div className='sidebar flex flex-col min-h-screen w-64'>

        <div className='bio flex flex-col items-center h-1/3 mt-8'>
          <img src='images/index.jpg' className='headshot'></img>
          <h4 className='text-base'>Jesse Christensen</h4>
          <h6 className='text-xs'>Software Engineer</h6>
          <h6 className='text-xs'>California, USA</h6>
          {/* <h6 className='text-xs'>@ jtq.christensen@gmail.com</h6> */}
        </div>


        <div className='nav-menu flex flex-col flex-wrap h-2/3 justify-center items-right p-b-4 mt-24'>
          <nav>
            <ul>
              <li>
                <Link href="/" className="text-right p-2"><p className="mr-2">Home</p></Link>
              </li>

              <li className=''>
                <Link href='/about' className='text-right p-2'><p className='mr-2'>About</p></Link>
              </li>

              <li>
                <Link href='/projects' className='text-right p-2'><p className='mr-2'>Projects</p></Link>
              </li>

              <li>
                <Link href='#' className='text-right p-2'><p className='mr-2'>Blog</p></Link>
              </li>

              <li>
                <Link href='#' className='text-right p-2'><p className='mr-2'>Contact</p></Link>
              </li>
            </ul>
          </nav>
        </div>

        <footer>© Jesse Christensen - Built with Next.js</footer>

      </div>
  )

}