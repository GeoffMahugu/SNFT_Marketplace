import Link from "next/link";
import uuid from "react-uuid";
import Image from "next/image";
import logo from "/public/logo.png";
import inf4mationLogo from "/public/icons/iNf4mation.png";

function Footer() {
    const footerResources = [
        { title: "Help Center", link: "http://t.me/iNf4mation_chat" },
        {
            title: "CoinMarketCap",
            link: "https://coinmarketcap.com/currencies/inf4mation",
        },
        {
            title: "Protect Our Planet",
            link: "https://www.binance.charity/Protect-Our-Planet",
        },
        { title: "Discord", link: "https://discord.gg/C7sGTaux" },
        { title: "Whitepaper", link: "https://inf4mation.com/whitepaper.pdf" },
        {
            title: "Explainer Video",
            link: "https://www.youtube.com/watch?v=prDJhUGbdC4",
        },
    ];

    const footerCommunity = [
        { title: "Community", link: "http://t.me/iNf4mation_chat" },
        {
            title: "Terms & Conditions",
            link: "https://inf4mation.com/ico/NFT-Artist-Platform-Rules",
        },
        {
            title: "Data Room",
            link: "https://drive.google.com/drive/folders/1rf4HXW0mjBdJLRkrEJDtklke1N2vL26c?usp=sharing",
        },
        { title: "Blog", link: "https://news.inf4mation.com/" },
        { title: "iNf4mation Website", link: "https://inf4mation.com/" },
        {
            title: "NFT Artist Application",
            link: "https://nft.inf4mation.com/artistapplication/",
        },
    ];
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-top">
                        <div>
                            <Link href="/">
                                <a className="logo next-img">
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        layout="fill"
                                    />
                                </a>
                            </Link>
                            <p>Discover and collect rare NFT art</p>
                            <p className="title">
                                Stay in the picture, join our newsletter
                            </p>
                            <form action="">
                                <input
                                    type="email"
                                    placeholder="arts@snifty.io"
                                />
                                <input type="submit" value="Subscribe" />
                            </form>

                            <ul className="social-list">
                                <li>
                                    <a
                                        href="https://discord.gg/C7sGTaux"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 30 30"
                                        >
                                            <path
                                                d="M12.345,6.236c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.376-0.093,0.492-0.25l1.19-1.612c-1.966-0.299-2.321-0.689-2.404-0.75c-0.444-0.327-0.772-0.785-0.374-1.363c0.306-0.449,0.948-0.597,1.44-0.344C9.646,21.264,10.995,22.02,15,22c3.977-0.012,5.723-0.845,5.748-0.863c0.668-0.301,1.189-0.177,1.514,0.269c0.387,0.607,0.111,1.018-0.331,1.344c-0.083,0.061-0.284,0.232-2.396,0.732l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301c0-5.994-2.564-12.928-3.88-14.14c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357c-0.004,0.008-0.218,0.629-0.425,1.228C17.672,6.239,16.041,6,15,6S12.345,6.236,12.345,6.236z M11,19c-1.105,0-2-1.333-2-2.979s0.895-2.979,2-2.979c1.109-0.165,1.976,1.333,2,2.979C13,17.667,12.105,19,11,19z M19,19c-1.105,0-2-1.342-2-2.997s0.895-2.997,2-2.997s2,1.342,2,2.997S20.105,19,19,19z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/nf4mation"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M15 3.296875C14.476563 3.523438 13.949219 3.691406 13.367188 3.746094C13.949219 3.410156 14.417969 2.84375 14.648438 2.226563C14.066406 2.5625 13.484375 2.789063 12.84375 2.902344C12.257813 2.339844 11.5 2 10.683594 2C9.109375 2 7.824219 3.242188 7.824219 4.765625C7.824219 4.988281 7.824219 5.214844 7.882813 5.386719C4.875 5.386719 2.8125 3.691406 1.414063 2C1.121094 2.394531 1.003906 2.902344 1.003906 3.410156C1.003906 4.367188 1.53125 5.214844 2.289063 5.722656C1.820313 5.667969 1.355469 5.554688 1.003906 5.386719C1.003906 5.386719 1.003906 5.386719 1.003906 5.441406C1.003906 6.796875 1.996094 7.921875 3.28125 8.148438C3.046875 8.203125 2.8125 8.261719 2.519531 8.261719C2.347656 8.261719 2.171875 8.261719 1.996094 8.207031C2.347656 9.335938 3.976563 10.632813 5.257813 10.632813C4.265625 11.363281 3.34375 12 1.5 12C1.265625 12 1.453125 12 1 12C2.28125 12.789063 3.800781 13 5.375 13C10.683594 13 13.542969 8.769531 13.542969 5.101563C13.542969 4.988281 13.542969 4.878906 13.542969 4.765625C14.125 4.367188 14.59375 3.863281 15 3.296875"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/iNf4mation.com_official/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M4.773438 1C2.695313 1 1 2.695313 1 4.773438L1 10.230469C1 12.304688 2.695313 14 4.773438 14L10.230469 14C12.304688 14 14 12.304688 14 10.226563L14 4.773438C14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2L10.226563 2C11.765625 2 13 3.234375 13 4.773438L13 10.226563C13 11.765625 11.765625 13 10.230469 13L4.773438 13C3.234375 13 2 11.765625 2 10.230469L2 4.773438C2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3C11.222656 3 11 3.222656 11 3.5C11 3.777344 11.222656 4 11.5 4C11.777344 4 12 3.777344 12 3.5C12 3.222656 11.777344 3 11.5 3 Z M 7.5 4C5.574219 4 4 5.574219 4 7.5C4 9.425781 5.574219 11 7.5 11C9.425781 11 11 9.425781 11 7.5C11 5.574219 9.425781 4 7.5 4 Z M 7.5 5C8.886719 5 10 6.113281 10 7.5C10 8.886719 8.886719 10 7.5 10C6.113281 10 5 8.886719 5 7.5C5 6.113281 6.113281 5 7.5 5Z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://t.me/iNf4mation_chat"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-list-container">
                            <ul className="footer-list">
                                <li>
                                    <p className="title">Resources</p>
                                </li>
                                {footerResources.map((list) => (
                                    <li key={uuid()}>
                                        <a
                                            href={list.link}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            {list.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="footer-list">
                                <li>
                                    <p className="title">Community</p>
                                </li>
                                {footerCommunity.map((list) => (
                                    <li key={uuid()}>
                                        <a
                                            href={list.link}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            {list.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="copyright">
                        <p>© Copyright 2021 Snifty.io. All Rights Reserved</p>
                        <p>Powered by iNf4mation.com</p>
                        <div className="next-img">
                            <Image
                                src={inf4mationLogo}
                                alt="iNf4mation"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
