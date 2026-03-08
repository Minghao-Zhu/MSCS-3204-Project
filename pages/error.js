import Head from "next/head";
import styles from "../styles/General.module.css";
import { useRouter } from "next/router";
import { Button, Image, Row, Col } from "react-bootstrap";

export default function Home() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Head>
                <title>Error</title>
                <meta name="error" content="server render error" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.main}>
                <Row>
                    <Col xs={3}>
                        <Image
                            alt="logo"
                            src={"/images/logo.png"}
                            roundedCircle
                            className={styles.photo}
                            style={{ height: "60px", width: "60px" }}
                        />{" "}
                    </Col>
                    <Col>
                        <h1 className={styles.title}>An Error Happened</h1>
                    </Col>
                </Row>
                <p
                    style={{ alignSelf: "center", textAlign: "center" }}
                    className={styles.description}
                >
                    Please select a therapist/alumni before accessing the scheduling page
                    and pick a time slot before accessing appointment confirmation page.
                </p>
                <Button
                    variant="primary"
                    className="mt-5"
                    onClick={() => {
                        router.push("/viewTherapists");
                    }}
                >
                    Match With a Therapist
                </Button>
                <Button
                    variant="primary"
                    className="mt-5"
                    onClick={() => {
                        router.push("/alumniCategory");
                    }}
                >
                    Match With an Alumni
                </Button>
            </main>
            <footer className={styles.footer}>Powered by SRID Team 6</footer>
        </div>
    );
}
