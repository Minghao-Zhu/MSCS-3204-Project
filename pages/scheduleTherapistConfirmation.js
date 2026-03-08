import styles from "../styles/General.module.css";
import "react-calendar/dist/Calendar.css";
import React, { useEffect, useState } from "react";
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Container,
    Row,
} from "react-bootstrap";
import Head from "next/head";
import { useRouter } from "next/router";
import { Confirmation } from "../components/Confirmation";
import { CandidateCard } from "../components/CandidateCard";
import { AppointmentText } from "../components/AppointmentText";
import { Navbar } from "../components/Navbar";

function ScheduleTherapistConfirmation(props) {
    const router = useRouter();
    const [appointment, setAppointment] = useState({});
    const [pendingTherapist, setPendingTherapist] = useState({});
    const [pendingTherapistName, setPendingTherapistName] = useState("");
    const [pendingTherapistSkills, setPendingTherapistSkills] = useState([]);
    const [showCancelConfirm, setShowCancelConfirm] = useState(false);
    const [showModifyConfirm, setShowModifyConfirm] = useState(false);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [showChangeTherapistConfirm, setShowChangeTherapistConfirm] =
        useState(false);
    let [existingAppointment, setExistingAppointment] = React.useState([]);
    const toggleCancelConfirm = () => setShowCancelConfirm(!showCancelConfirm);
    const toggleModifyConfirm = () => setShowModifyConfirm(!showModifyConfirm);
    const toggleChangeTherapistConfirm = () =>
        setShowChangeTherapistConfirm(!showChangeTherapistConfirm);

    function handleModifyAppointment(e) {
        console.log(e.target.value);
        setShowModifyConfirm(!showModifyConfirm);
    }

    function handleCancelAppointment(e) {
        console.log(e.target.value);
        setShowCancelConfirm(!showCancelConfirm);
    }

    function handleChangeTherapist(e) {
        console.log(e.target.value);
        setShowChangeTherapistConfirm(!showChangeTherapistConfirm);
    }

    function handleViewHistory(e) {
        router.push("/viewAppointmentHistory");
    }

    const handleCancelSubmit = (e) => {
        if (typeof window !== "undefined") {
            console.log("existingAppointment");
            console.log(existingAppointment);
            if (existingAppointment != null) {
                existingAppointment.pop();
            } else {
                existingAppointment = [];
            }
            localStorage.setItem(
                "allAppointment",
                JSON.stringify(existingAppointment)
            );
        }
        router.push("/viewAppointmentHistory");

    };

    function handleCancelAppointment(e) {
        console.log(e.target.value);
        setShowCancelConfirm(!showCancelConfirm);
    }

    const handleModifySubmit = (e) => {
        if (typeof window !== "undefined") {
            console.log("existingAppointment");
            console.log(existingAppointment);
            if (existingAppointment != null) {
                existingAppointment.pop();
            } else {
                existingAppointment = [];
            }
            localStorage.setItem(
                "allAppointment",
                JSON.stringify(existingAppointment)
            );
        }
        router.push("/scheduleTherapist");

    };

    function handleJoinMeeting(e) {
        let updatedAppointment = appointment;
        updatedAppointment.appointmentStatus = "completed";
        console.log(updatedAppointment);
        if (existingAppointment != null) {
            existingAppointment.pop();
            existingAppointment.push(updatedAppointment);
        } else {
            existingAppointment = [updatedAppointment];
        }
        localStorage.setItem("allAppointment", JSON.stringify(existingAppointment));
        window.open("https://meet.google.com/khc-uipn-dds", "_blank", "noopener,noreferrer");

    }

    const handleChangeTherapistSubmit = (e) => {
        router.push("/viewTherapists");
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!localStorage.getItem("NewTherapistAppointment")) {
                router.push("/error");
                return;
            }
            setAppointment(
                JSON.parse(localStorage.getItem("NewTherapistAppointment"))
            );
            setPendingTherapist(
                JSON.parse(localStorage.getItem("NewTherapistAppointment"))
                    .appointmentHost
            );
            setPendingTherapistName(
                JSON.parse(localStorage.getItem("NewTherapistAppointment"))
                    .appointmentHost.name
            );
            setPendingTherapistSkills(
                JSON.parse(localStorage.getItem("NewTherapistAppointment"))
                    .appointmentHost.skills
            );
            setExistingAppointment(
                JSON.parse(localStorage.getItem("allAppointment"))
            );
            setEmail(JSON.parse(localStorage.getItem("user")).email);
            setName(JSON.parse(localStorage.getItem("user")).name);
        }
    }, []);
    return (
        <div>
            <div
                className={styles.container}
                style={{ overflowY: "scroll", height: "100%" }}
            >
                <Head>
                    <title>Appointment Confirmation</title>
                    <meta name="description" content="Appointment Confirmation" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main} style={{ height: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>Appointment Confirmation</h1>
                    <div style={{ marginBottom: "1rem", width: "100%" }}>
                        <CandidateCard
                            candidate={pendingTherapist}
                            skills={pendingTherapistSkills}
                        />
                    </div>
                    <div>
                        <Row>
                            <Col>
                                <AppointmentText
                                    name={pendingTherapistName}
                                    appointment={appointment}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    className="btn btn-primary mt-2"
                                    onClick={handleModifyAppointment}
                                    type="button"
                                    style={{ width: "100%" }}
                                >
                                    Modify your appointment
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    className="btn btn-primary mt-2"
                                    onClick={handleCancelAppointment}
                                    type="button"
                                    style={{ width: "100%" }}
                                >
                                    Cancel your appointment
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    className="btn btn-primary mt-2"
                                    onClick={handleViewHistory}
                                    type="button"
                                    style={{ width: "100%" }}
                                >
                                    View appointment history
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    className="btn btn-primary mt-2"
                                    onClick={handleChangeTherapist}
                                    type="button"
                                    style={{ width: "100%" }}
                                >
                                    Change an Therapist
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <div className="mt-3 mb-2">When it is the time:</div>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    className="btn btn-primary mt-2"
                                    onClick={handleJoinMeeting}
                                    type="button"
                                    style={{ width: "100%", marginBottom: "2rem" }}
                                >
                                    Join Your Video Conference
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </main>
                <Confirmation
                    showConfirm={showCancelConfirm}
                    setShowConfirm={setShowCancelConfirm}
                    toggleConfirm={toggleCancelConfirm}
                    clickConfirm={handleCancelSubmit}
                    heading="Cancel Appointment Confirmation"
                    content={
                        "Would you like to cancel your online appointment with " +
                        pendingTherapistName +
                        " on " +
                        appointment.formattedDate +
                        " at " +
                        appointment.section
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
                        pendingTherapistName +
                        " on " +
                        appointment.formattedDate +
                        " at " +
                        appointment.section
                    }
                    secondaryButton="Back"
                    primaryButton="Confirm"
                />
                <Confirmation
                    showConfirm={showChangeTherapistConfirm}
                    setShowConfirm={setShowChangeTherapistConfirm}
                    toggleConfirm={toggleChangeTherapistConfirm}
                    clickConfirm={handleChangeTherapistSubmit}
                    heading="Change a Therapist Confirmation"
                    content={
                        "Would you like to change a therapist? Your current appointment will be saved."
                    }
                    secondaryButton="Back"
                    primaryButton="Confirm"
                />
            </div>
            <Navbar />
        </div>
    );
}

export default ScheduleTherapistConfirmation;
