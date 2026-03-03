import styles from "../styles/General.module.css";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { CurrentProfile } from "../components/Profile/CurrentProfile";
import { Navbar } from "../components/Navbar";
export default function ViewProfile() {
    let [user, setUser] = useState({});
    let [userName, setUserName] = useState("");
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"));
    }
    useEffect(() => {
        setUserName(JSON.parse(localStorage.getItem("user")).name);
    }, []);
    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <title>View Profile</title>
                    <meta name="description" content="view current profile information" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <main className={styles.main} style={{ height: "100%" }}>
                    <h1>Profile of {userName}</h1>
                    <div style={{ marginBottom: "1rem", width: "100%" }}>
                        <CurrentProfile currUser={user} />
                    </div>
                </main>
            </div>
            <Navbar />
        </div>
    );
}
