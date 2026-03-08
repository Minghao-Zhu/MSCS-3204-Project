import React, { useState } from "react";
import Head from "next/head";
import styles2 from "../styles/Therapists.module.css";
import { MatchedTherapists } from "../components/Therapist/MatchedTherapists";
import styles from "../styles/General.module.css";
import { Navbar } from "../components/Navbar";
export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className={styles.container} style={{ overflowY: "scroll", height: "100%" }}>
                <Head>
                    <title>Therapist Match</title>
                    <meta name="description" content="View matched therapists" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <main className={styles2.main}>
                    <div style={{ height: "10%", width: "100%" }}>
                        <h1 className={styles2.text}>Therapist Match</h1>
                    </div>
                    <MatchedTherapists />
                </main>
            </div>
            <Navbar />
        </div>
    );
}
