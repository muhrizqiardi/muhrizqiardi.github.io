import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react';

function Sidebar(props) {
    const [menuOpened, setMenuOpened] = useState(false);
    const handleToggler = () => {
      setMenuOpened(!menuOpened);
    }
    return (
        <div className="sidebar">
            <Head>
                <title>Rizqi's Blog</title>
                <meta name="description" content="Rizqi's Blogs is a blog website made by Muhammad Rizqi Ardiansyah. This blog mostly contains my opinion about things, programming tips, and programming tutorial." />
                <link rel="icon" href="/icon/favicon.ico" />
                {/* Box Icons */}
                <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
            </Head>
            <div className="mobile-menu">
                <Link href="/">
                    <img
                        src="/img/signature_black_fg.png"
                        height="40px"
                        alt="My Logo" />
                </Link>
                <button className="toggler" onClick={handleToggler}><i class='bx bx-menu'></i></button>
            </div>
            <div className="menu" style={menuOpened ? { transform: "translateX(0%)" } : { transform: "translateX(-120%)" }}>
                <Link href="/">
                    <img
                        src="/img/signature_black_fg.png"
                        width="100%"
                        height="auto"
                        alt="My Logo" />
                </Link>
                <nav>
                    <ul>
                        <li> <Link href="/" passHref><a href="/">Home</a></Link></li>
                        <li> <Link href="/" passHref><a href="/">Archive</a></Link></li>
                        <li> <Link href="https://muhrizqiardi.github.io/" passHref><a href="https://muhrizqiardi.github.io/">Portfolio</a></Link></li>
                    </ul>
                </nav>
                <div className="social-media">
                    <a href="https://twitter.com/muh_rizqi_ardi">
                        <i class='bx bxl-twitter'></i>
                    </a>
                    <a href="https://instagram.com/muhrizqiardi">
                        <i class='bx bxl-instagram'></i>
                    </a>
                    <a href="https://github.com/muhrizqiardi">
                        <i class='bx bxl-github'></i>
                    </a>
                </div>
                <div className="line"></div>
                <div className="filter-tags">
                    <p>Tags: </p>
                    <ul>
                        <li>
                            <Link href="#" passHref><a href="#">#programming</a></Link>
                        </li>
                        <li>
                            <Link href="#" passHref><a href="#">#lifeprotips</a></Link>
                        </li>
                        <li>
                            <Link href="#" passHref><a href="#">#opinion</a></Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    );
}
export default Sidebar;
