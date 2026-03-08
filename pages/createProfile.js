import { Button, Modal, Form } from "react-bootstrap";
import styles from "../styles/General.module.css";
import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { EditProfile } from "../components/Profile/EditProfile";

export default function CreateProfile() {
    let [user, setUser] = useState({});
    const router = useRouter();
    const [showAck, setShowAck] = useState(false);
    const toggleAck = () => setShowAck(!showAck);
    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
    };
    if (typeof window !== "undefined") {
        user = localStorage.getItem("user");
        if (!user) {
            user = {
                name: "",
                email: "",
                school: "Sofia University",
                year: "Master",
                exp: "",
                symp: [],
                cause: [],
                created: false,
            };
            localStorage.setItem("user", JSON.stringify(user));
        }
        user = JSON.parse(localStorage.getItem("user"));
    }
    useEffect(() => {
        setShowAck(true);
    }, []);
    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <title>Create Your Profile</title>
                    <meta name="description" content="create profile page" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <main className={styles.main} style={{ height: "100%" }}>
                    <h1>Create Your Profile</h1>
                    <Modal show={showAck} onHide={setShowAck} backdrop="static">
                        <Modal.Header>
                            <Modal.Title>Terms and Conditions</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{ color: "black" }}>
                                Welcome to Relax.EDU! Please complete your profile before using
                                our application, so we can better guide you to right resources.
                                Note:Relax.EDU will not sell or disclose any of your information
                                for any uses.
                            </div>
                            <Form>
                                <br />
                                <Form.Check
                                    type="checkbox"
                                    id="agree"
                                    label="I Understand"
                                    onChange={checkboxHandler}
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    router.push("/");
                                }}
                            >
                                Back
                            </Button>
                            <Button variant="primary" disabled={!agree} onClick={toggleAck}>
                                Continue
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div style={{ marginBottom: "1rem", width: "100%" }}>
                        <EditProfile currUser={user} firstTime={true} />
                    </div>
                </main>
            </div>
        </div>
    );
}
