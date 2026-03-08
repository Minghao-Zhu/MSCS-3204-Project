import styles from "../styles/General.module.css";
import menuStyles from "../styles/Menu.module.css";
import { Navbar } from "../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import * as Icon1 from "react-icons/im";
import * as Icon2 from "react-icons/fa";
export default function Menu() {
    let [user, setUser] = useState({});
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"));
    }

    const router = useRouter();
    const handleEditProfile = (e) => {
        router.push("/viewProfile");
    };

    const handleAppointment = (e) => {
        router.push("/viewAppointmentHistory");
    };

    const handleFindTherapist = (e) => {
        router.push("/viewTherapists");
    };

    const handleMeetAlumni = (e) => {
        router.push("/alumniCategory");
    };

    const handleResource = (e) => {
        router.push("/resourceBoard");
    };
    return (
        <div
            className={styles.container}
            style={{ overflowY: "scroll", height: "90vh" }}
        >
            <Head>
                <title>Main menu</title>
                <meta name="description" content="main menu" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={menuStyles.main}>
                <h1>Main Menu</h1>

                <div className={menuStyles.box} onClick={handleEditProfile}>
                    <h4>
                        <Icon1.ImProfile></Icon1.ImProfile> View/Edit Profile
                    </h4>
                </div>
                <div className={menuStyles.box} onClick={handleFindTherapist}>
                    <h4>
                        <Icon2.FaUserMd></Icon2.FaUserMd> Find a therapist
                    </h4>
                </div>
                <div className={menuStyles.box} onClick={handleResource}>
                    <h4>
                        <Icon2.FaFileImage></Icon2.FaFileImage> Resource Sharing Board
                    </h4>
                </div>
                <div className={menuStyles.box} onClick={handleAppointment}>
                    <h4>
                        <Icon2.FaHistory></Icon2.FaHistory> Appointment History
                    </h4>
                </div>
                <Navbar />
            </main>
        </div>
    );
}
