import styles from "../styles/General.module.css";
import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Confirmation } from "../components/Confirmation";
import { Navbar } from "../components/Navbar";

export default function ViewAppointmentHistory() {
    const router = useRouter();
    const [showCancelConfirm, setShowCancelConfirm] = useState(false);
    const [showModifyConfirm, setShowModifyConfirm] = useState(false);
    let [existingAppointment, setExistingAppointment] = useState([]);
    let [selectedAppointment, setSelectedAppointment] = useState([]);
    let [selectedHostName, setSelectedHostName] = useState("");
    let [selectedSection, setSelectedSection] = useState("");
    let [selectedDate, setSelectedDate] = useState("");
    const [email, setEmail] = useState();
    const [name, setName] = useState();

    const toggleCancelConfirm = () => setShowCancelConfirm(!showCancelConfirm);
    const toggleModifyConfirm = () => setShowModifyConfirm(!showModifyConfirm);

    const handleModifyAppointment = (appointment) => {
        console.log("selectedAppointment");
        console.log(appointment);
        if (typeof window !== "undefined") {
            setSelectedAppointment(appointment);
            setSelectedHostName(appointment.appointmentHost.name);
            setSelectedDate(appointment.formattedDate);
            setSelectedSection(appointment.section);
            localStorage.setItem("selectedAppointment", JSON.stringify(appointment));
        }
        setShowModifyConfirm(!showModifyConfirm);
    };
    const handleCancelAppointment = (appointment) => {
        console.log("selectedAppointment");
        console.log(appointment);
        if (typeof window !== "undefined") {
            setSelectedAppointment(appointment);
            setSelectedHostName(appointment.appointmentHost.name);
            setSelectedDate(appointment.formattedDate);
            setSelectedSection(appointment.section);
            localStorage.setItem("selectedAppointment", JSON.stringify(appointment));
        }
        setShowCancelConfirm(!showCancelConfirm);
    };

    function handleJoinMeeting(e) {
        window.open("https://meet.google.com/khc-uipn-dds", "_blank", "noopener,noreferrer");
    }

    const handleModifySubmit = (e) => {
        if (typeof window !== "undefined") {
            console.log("selected appointment");
            console.log(selectedAppointment);
            console.log("existingAppointment");
            console.log(existingAppointment);
            let newAllAppointment = [];
            if (existingAppointment != null) {
                for (let i = 0; i < existingAppointment.length; i++) {
                    if (
                        existingAppointment[i].appointmentHost.name ===
                        selectedAppointment.appointmentHost.name
                    ) {
                        if (
                            existingAppointment[i].section === selectedAppointment.section
                        ) {
                            if (
                                existingAppointment[i].formattedDate ===
                                selectedAppointment.formattedDate
                            ) {
                                console.log("matched");
                                console.log(existingAppointment[i].appointmentHost.name);
                                continue;
                            }
                        }
                    }
                    newAllAppointment.push(existingAppointment[i]);
                }
            } else {
                newAllAppointment = [];
            }
            localStorage.setItem("allAppointment", JSON.stringify(newAllAppointment));
        }
        router.push("/scheduleTherapist");

    };

    const handleCancelSubmit = (e) => {
        if (typeof window !== "undefined") {
            console.log("selected appointment");
            console.log(selectedAppointment);
            console.log("existingAppointment");
            console.log(existingAppointment);
            let newAllAppointment = [];
            if (existingAppointment != null) {
                for (let i = 0; i < existingAppointment.length; i++) {
                    if (
                        existingAppointment[i].appointmentHost.name ===
                        selectedAppointment.appointmentHost.name
                    ) {
                        if (
                            existingAppointment[i].section === selectedAppointment.section
                        ) {
                            if (
                                existingAppointment[i].formattedDate ===
                                selectedAppointment.formattedDate
                            ) {
                                console.log("matched");
                                console.log(existingAppointment[i].appointmentHost.name);
                                continue;
                            }
                        }
                    }
                    newAllAppointment.push(existingAppointment[i]);
                }
            } else {
                newAllAppointment = [];
            }
            setExistingAppointment(newAllAppointment);
            localStorage.setItem("allAppointment", JSON.stringify(newAllAppointment));
        }
        setShowCancelConfirm(!showCancelConfirm);
        router.push("/viewAppointmentHistory");
        // Cancellation Email
        let type = "";
        if (selectedAppointment.AppointmentType == "Therapist") {
            type = "therapist";
        } else {
            type = "alumni";
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setExistingAppointment(
                JSON.parse(localStorage.getItem("allAppointment"))
            );
            setEmail(JSON.parse(localStorage.getItem("user")).email);
            setName(JSON.parse(localStorage.getItem("user")).name);
        }
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <title>Your Appointment History</title>
                    <meta name="description" content="View your appointment History" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <main className={styles.main} style={{ height: "100%" }}>
                    <h1 style={{ alignSelf: "center", textAlign: "center" }}>
                        Your Appointment History
                    </h1>

                    <h2>Completed Appointment</h2>
                    <p style={{ textAlign: "center" }}>No completed appointments now</p>
                    <h2>Upcoming Appointment</h2>
                    {!existingAppointment && (
                        <p style={{ textAlign: "center" }}>No upcoming appointments now</p>
                    )}
                    {existingAppointment && existingAppointment.length === 0 && (
                        <p style={{ textAlign: "center" }}>No upcoming appointments now</p>
                    )}
                    {existingAppointment &&
                        existingAppointment.map((appointment) => (
                            // eslint-disable-next-line react/jsx-key
                            <Card style={{ width: "18rem", marginTop: "20px" }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {appointment.formattedDate}
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {appointment.section} to {appointment.toTime}{" "}
                                        {appointment.AMPM}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {appointment.AppointmentType} appointment with{" "}
                                        {appointment.appointmentHost.name}
                                    </Card.Text>
                                    <Row>
                                        <Col>
                                            <Button
                                                variant="outline-primary"
                                                onClick={() => handleCancelAppointment(appointment)}
                                                type="button"
                                            >
                                                Cancel
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button
                                                value={appointment}
                                                className="btn btn-secondary"
                                                onClick={() => handleModifyAppointment(appointment)}
                                                type="button"
                                            >
                                                Modify
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button
                                                value={appointment}
                                                variant="primary"
                                                onClick={handleJoinMeeting}
                                                type="button"
                                            >
                                                Join
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Confirmation
                                        showConfirm={showCancelConfirm}
                                        setShowConfirm={setShowCancelConfirm}
                                        toggleConfirm={toggleCancelConfirm}
                                        clickConfirm={handleCancelSubmit}
                                        heading="Cancel Appointment Confirmation"
                                        content={
                                            "Would you like to cancel your online appointment with " +
                                            selectedHostName +
                                            " on " +
                                            selectedDate +
                                            " at " +
                                            selectedSection
                                        }
                                        secondaryButton="Back"
                                        primaryButton="Confirm"
                                    />
                                    <Confirmation
                                        showConfirm={showModifyConfirm}
                                        setShowConfirm={setShowModifyConfirm}
                                        toggleConfirm={toggleModifyConfirm}
                                        clickConfirm={handleModifySubmit}
                                        heading="Modify Appointment Confirmation"
                                        content={
                                            "Would you like to modify your online appointment with " +
                                            selectedHostName +
                                            " on " +
                                            selectedDate +
                                            " at " +
                                            selectedSection
                                        }
                                        secondaryButton="Back"
                                        primaryButton="Confirm"
                                    />
                                </Card.Body>
                            </Card>
                        ))}
                </main>
            </div>
            <Navbar />
        </div>
    );
}
