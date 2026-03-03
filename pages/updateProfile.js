import styles from "../styles/General.module.css";
import profileStyles from "../styles/Profile.module.css";
import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import { EditProfile } from "../components/Profile/EditProfile";
import { Navbar } from "../components/Navbar";

export default function UpdateProfile() {
    let [user, setUser] = useState({});
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"));
    }
    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <title>Update Your Profile</title>
                    <meta name="description" content="update mental health profile" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <main className={styles.main} style={{ height: "100%" }}>
                    <h1>Update Your Profile</h1>
                    <div style={{ marginBottom: "1rem", width: "100%" }}>
                        <EditProfile currUser={user} firstTime={false} />
                    </div>
                </main>
            </div>
            <Navbar />
        </div>
    );
}
