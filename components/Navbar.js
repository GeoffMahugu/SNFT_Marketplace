import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallet/connector";
import logo from "/public/logo.png";
import { getNonce, verifyJwt } from './apis/awsGetAPIs';
import { connectUser, createUser } from './apis/awsPostAPIs';

import Web3 from "web3";

function Navbar() {
    const [jwt, setJwt] = useState(null);
    const [user, setUser] = useState(null);
    const navRef = useRef();
    const handleMobileNav = () => {
        navRef.current.classList.toggle("open");
    };

    const { active, account, library, connector, activate, deactivate } =
        useWeb3React();

    const connect = async () => {
        try {
            await activate(injected);
            localStorage.setItem("isSniftyWalletConnected", true);
        } catch (err) {
            console.log(err);
        }
    };

    const disconnect = () => {
        try {
            deactivate();
            localStorage.setItem("isSniftyWalletConnected", false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("isSniftyWalletConnected") === "true") {
            (async () => {
                try {
                    await activate(injected);
                    localStorage.setItem("isSniftyWalletConnected", true);
                } catch (err) {
                    console.log(err);
                }
            })();
        }
    }, [activate]);

    const signUser = async () => {
        const web3 = new Web3(window.ethereum);

        const nonce = await getNonce(account);

        const signature = await web3.eth.personal.sign(`Sign : ${nonce.Nonce}`, account);

        const body = {
            "Nonce": nonce.Nonce,
            "Signature": signature,
            "WalletUID": `${account}`
        }
        const res = await connectUser(body);

        if (res.status === 200) {
            console.log('res.data -----------------');
            console.log(res.data);
            setUser(res.data);

            const jwt = res.data.token;
            localStorage.setItem('x-nsys-token', jwt);
            setJwt(jwt);
        }
    }

    useEffect(() => {
        if (account) {
            console.log('FOUND ACCOUND ---------/');
            console.log(account);


            (async () => {
                if (localStorage.getItem('x-nsys-token')) {
                    try {
                        const verify = await verifyJwt();
                        if (verify.status === 200) {
                            console.log('VERIFY RESPONSE -----');
                            console.log(verify);
                            // RESPONSE TYPE: { status: 200, data: {…}, message: "Success" }
                            // data:{
                            //     address: "0x4EF2063C52461BDeFEeFfd5D71bE677da2206765"
                            //     exp: 1654271952
                            //     iat: 1654268352
                            // }
                        } else {
                            signUser();
                        }

                    } catch (err) {
                        console.log('VERIFY ERROR ------');
                        console.log(err);
                    }
                } else {
                    console.log('NO USER FOUND; FETCHING USER ---------/');
                    signUser();
                }
            })();



            // (async () => {

            //     const fetchNonce = await getNonce(account);
            //     if(fetchNonce){
            //         const body = {
            //             "Nonce": fetchNonce.Nonce,
            //             "Signature": "0x2d971382f159df613cfc7f519bd767ae14af669beea0b74a598bf2f25c58014b3c492934a857d8d78d152614ab437520a5bef4618bb0d2f534149803ce9364b71c",
            //             "WalletUID": `${account}`
            //         }

            //         const fetchUserData = await connectUser(body);

            //         debugger;
            //     }

            //     // setAwsAssets(await getAwsAssets());
            //     // const _userData = await connectUser(body);
            //     // console.log('CONNECT USER RESPONSE ----//');
            //     // console.log(_userData);
            //     // debugger;

            //     // if (_userData.status === 200) {
            //     // // if (_userData) {
            //     //     // update user details.
            //     // } else {
            //     //     const body = {
            //     //         "WalletUID": `${account}`,
            //     //         "Username": "Geoff",
            //     //         "Bio": null,
            //     //         "Email": "higeoff@gmail.com",
            //     //         "Website": null,
            //     //         "TwitterHandle": null,
            //     //         "TwitterHandleVerified": null,
            //     //         "InstagramHandle": null,
            //     //         "InstagramHandleVerified": null,
            //     //         "Location": null,
            //     //         "ProfileImage": null,
            //     //         "BackgroundImage": null
            //     //     }
            //     //     const _createUserData = await createUser(body);
            //     //     // console.log('_createUserData ---------------------------');
            //     //     // console.log(_createUserData);
            //     //     if (_createUserData.status === 200) {
            //     //         console.log('CREATED NEW USER RESPONSE ----//');
            //     //         console.log(_createUserData)
            //     //     } else {
            //     //         console.log('CREATE USER ERROR ----//');
            //     //         console.log(_createUserData.data);
            //     //     }


            //     // }
            // })();
        }
    }, [account]);

    return (
        <header>
            <div className="nav-container">
                <div className="container">
                    <nav ref={navRef}>
                        <Link href="/">
                            <a className="logo next-img">
                                <Image src={logo} alt="Snifty" layout="fill" />
                            </a>
                        </Link>

                        <ul className="nav-list">
                            <li>
                                <Link href="/">
                                    <a>Presale Whitelist</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/marketplace">
                                    <a>Marketplace</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/drops">
                                    <a>🔥 Drops</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/auction">
                                    <a>Auction</a>
                                </Link>
                            </li>
                            <li>
                                {!active ? (
                                    <button
                                        className="btn blue"
                                        onClick={connect}
                                    >
                                        Connect wallet
                                    </button>
                                ) : (
                                    <div className="nav-user-profile">
                                        <span>
                                            <Image
                                                src={logo}
                                                alt="Logo"
                                                layout="fill"
                                            />
                                        </span>
                                        <div className="submenu">
                                            <Link href="/profile">
                                                <a>Profile</a>
                                            </Link>
                                            <Link href="/upload">
                                                <a>Upload</a>
                                            </Link>
                                            <button onClick={disconnect}>
                                                Disconnect Wallet
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>

                        <div onClick={handleMobileNav} className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
