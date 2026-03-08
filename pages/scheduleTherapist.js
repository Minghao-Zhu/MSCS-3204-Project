import "react-calendar/dist/Calendar.css";
import React, { useEffect, useState } from "react";
import { CalendarSelector } from "../components/ScheduleTherapist/CalendarSelector";
import Head from "next/head";
import styles from "../styles/General.module.css";
import { CandidateCard } from "../components/CandidateCard";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/router";

function ScheduleTherapist(props) {
    const router = useRouter();
    const [pendingTherapist, setPendingTherapist] = useState({});
    const [pendingTherapistSkills, setPendingTherapistSkills] = useState([]);
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!localStorage.getItem("selectedTherapist")) {
                router.push("/error");
                return;
            }
            setPendingTherapist(
                JSON.parse(localStorage.getItem("selectedTherapist"))
            );
            setPendingTherapistSkills(
                JSON.parse(localStorage.getItem("selectedTherapist")).skills
            );
        }
    }, []);

    return (
        <div>
            <div
                className={styles.container}
                style={{ overflowY: "scroll", height: "100%" }}
            >
                <Head>
                    <title>Schedule an Appointment</title>
                    <meta name="description" content="Schedule an Appointment" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main} style={{ height: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>Schedule an Appointment</h1>
                    <div style={{ marginBottom: "1rem", width: "100%" }}>
                        <CandidateCard
                            candidate={pendingTherapist}
                            skills={pendingTherapistSkills}
                        />
                    </div>
                    <div style={{ marginBottom: "2rem", width: "100%" }}>
                        <CalendarSelector pendingTherapist={pendingTherapist} />
                    </div>
                </main>
            </div>
            <Navbar />
        </div>
    );
}

export default ScheduleTherapist;
