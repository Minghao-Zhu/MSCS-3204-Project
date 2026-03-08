import styles from "../styles/General.module.css";
import { ResourceCategory } from "../components/ResourceBoard/ResourceCategory";
import { ResourceLinks } from "../components/ResourceBoard/ResourceLinks";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Head from "next/head";

const anxietyLinks = [
    {
        title: "Tips and Strategies to Manage Anxiety and Stress",
        url: "https://adaa.org/tips",
    },
];

const sleepLinks = [
    {
        title: "Tips for Better Sleep",
        url: "https://sleepeducation.org/",
    },
];

const happinessLinks = [
    {
        title: "How to be happier",
        url: "https://www.nhs.uk/mental-health/self-help/tips-and-support/how-to-be-happier/",
    },
];

const supplementsLinks = [
    {
        title: "Supplements: A scorecard",
        url: "https://www.health.harvard.edu/newsletter_article/supplements-a-scorecard",
    },
];

const linkMap = {
    anxiety: anxietyLinks,
    sleep: sleepLinks,
    happiness: happinessLinks,
    supplements: supplementsLinks,
};

export default function ResourceBoard() {
    const [page, setPage] = useState("main");
    const [links, setLinks] = useState([]);

    useEffect(() => {
        if (page === "anxiety") {
            setLinks(linkMap.anxiety);
        } else if (page === "sleep") {
            setLinks(linkMap.sleep);
        } else if (page === "happiness") {
            setLinks(linkMap.happiness);
        } else if (page === "supplements") {
            setLinks(linkMap.supplements);
        }
    }, [page]);

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Resources Board</title>
                    <meta
                        name="description"
                        content="mental health resources share board"
                    />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <main className={styles.main}>
                    <h1 style={{textAlign: "center"}}>Mental Health Resource Board</h1>
                    {page === "main" && <ResourceCategory setCategory={setPage} />}
                    {page !== "main" && (
                        <ResourceLinks
                            links={links}
                            setPage={setPage}
                            setLinks={setLinks}
                        />
                    )}
                </main>
            </div>
            <Navbar />
        </>
    );
}
