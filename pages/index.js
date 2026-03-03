import Head from "next/head";
import styles from "../styles/General.module.css";
import { useRouter } from "next/router";
import { Button, Image, Row, Col } from "react-bootstrap";

export default function Home() {
    const router = useRouter();
    const entryPoint = () => {
        if (typeof window !== "undefined") {
            console.log(localStorage.getItem("user"));
            if (
                !localStorage.getItem("user") ||
                JSON.parse(localStorage.getItem("user")).created == false
            ) {
                router.push("/createProfile");
            } else {
                router.push("/menu");
            }
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Welcome to Relax.EDU</title>
                <meta name="description" content="landing page" />
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
                        <h1 className={styles.title}>Welcome to Relax.EDU</h1>
                    </Col>
                </Row>
                <p
                    style={{ alignSelf: "center", textAlign: "center" }}
                    className={styles.description}
                >
                    A platform to relax, seek for emotional support and practical guidance for students.
                </p>
                <Image alt="relax girl" src={"/images/relaxGirl.png"} />
                <Button variant="primary" className="mt-5" onClick={entryPoint}>
                    Enter Now!
                </Button>
            </main>
            <footer className={styles.footer}>MSCS3204 Project by Minghao Zhu & Jixiang Ding</footer>
        </div>
    );
}
