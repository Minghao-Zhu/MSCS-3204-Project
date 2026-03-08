import { Form, Button, Row, Col, Container } from "react-bootstrap";
import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import { Confirmation } from "../Confirmation";
import { useRouter } from "next/router";
import styles from "../../styles/CalendarSelector.module.css";
import "react-calendar/dist/Calendar.css";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

export const CalendarSelector = (props) => {
    const [pendingDate, setPendingDate] = useState(new Date());
    const [pendingFormattedDate, setPendingFormattedDate] = useState(
        new Date().toString().split(" ", 4).join(" ")
    );
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingSection, setPendingSection] = React.useState("");
    let [existingAppointment, setExistingAppointment] = React.useState([]);
    const [email, setEmail] = useState();
    const [name, setName] = useState();

    const toggleConfirm = () => setShowConfirm(!showConfirm);
    const router = useRouter();
    if (typeof window !== "undefined") {
        localStorage.setItem("pending date", JSON.stringify(pendingDate));
    }

    const tileDisabled = ({ activeStartDate, date, view }) => {
        let today = new Date();
        let yesterday = today.setDate(today.getDate()-1)
        return date < yesterday
    }
    useEffect(() => {
        setEmail(JSON.parse(localStorage.getItem("user")).email);
        setName(JSON.parse(localStorage.getItem("user")).name);
        setExistingAppointment(JSON.parse(localStorage.getItem("allAppointment")));
    }, []);

    const handleSubmit = (e) => {
        let toTime = pendingSection.split(":")[0] + ":45";
        let AMPM = pendingSection.split(":")[1].split(" ")[1];
        let newAppointment = {
            appointmentHost: props.pendingTherapist,
            date: pendingDate,
            formattedDate: pendingFormattedDate,
            section: pendingSection,
            toTime: toTime,
            AMPM: AMPM,
            AppointmentType: "Therapist",
            AppointmentStatus: "UpComing",
        };
        if (typeof window !== "undefined") {
            localStorage.setItem(
                "NewTherapistAppointment",
                JSON.stringify(newAppointment)
            );
            console.log("existingAppointment");
            console.log(existingAppointment);
            if (existingAppointment != null) {
                existingAppointment.push(newAppointment);
            } else {
                existingAppointment = [newAppointment];
            }
            localStorage.setItem(
                "allAppointment",
                JSON.stringify(existingAppointment)
            );
        }
        router.push("/scheduleTherapistConfirmation");

    };

    function handleSetPendingSection(e) {
        console.log(e.target.value);
        setPendingSection(e.target.value);
        setShowConfirm(!showConfirm);
    }

    function handlePendingDate(e) {
        console.log("click a new date");
        console.log(e.toString());
        const formattedDate = e.toString().split(" ", 4).join(" ");
        console.log("formatted date");
        console.log(formattedDate);
        setPendingDate(e);
        setPendingFormattedDate(formattedDate);
    }

    return (
        <div>
            <div className={styles.calendar}>
                <Calendar tileDisabled={tileDisabled} value={pendingDate} onChange={handlePendingDate} />
            </div>
            <h4 style={{ textAlign: "center" }}>
                Available Starting Times (for 45 mins)
            </h4>
            <Row>
                <Col>
                    <Button
                        value="9:00 AM"
                        className={styles.button}
                        onClick={handleSetPendingSection}
                        type="button"
                    >
                        9:00 AM
                    </Button>
                </Col>
                <Col>
                    <Button
                        value="10:00 AM"
                        className={styles.button}
                        onClick={handleSetPendingSection}
                        type="button"
                    >
                        10:00 AM
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        value="11:00 AM"
                        className={styles.button}
                        onClick={handleSetPendingSection}
                        type="button"
                    >
                        11:00 AM
                    </Button>
                </Col>
                <Col>
                    <Button
                        value="1:00 PM"
                        className={styles.button}
                        onClick={handleSetPendingSection}
                        type="button"
                    >
                        01:00 PM
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        value="2:00 PM"
                        className={styles.button}
                        onClick={handleSetPendingSection}
                        type="button"
                    >
                        02:00 PM
                    </Button>
                </Col>
                <Col>
                    <Button
                        value="3:00 PM"
                        className={styles.button}
                        onClick={handleSetPendingSection}
                        type="button"
                    >
                        03:00 PM
                    </Button>
                </Col>
            </Row>
            <Confirmation
                showConfirm={showConfirm}
                setShowConfirm={setShowConfirm}
                toggleConfirm={toggleConfirm}
                clickConfirm={handleSubmit}
                heading="New Appointment Confirmation"
                content={
                    "Would you like to schedule an online appointment with " +
                    props.pendingTherapist.name +
                    " on " +
                    pendingFormattedDate +
                    " at " +
                    pendingSection
                }
                secondaryButton="Back"
                primaryButton="Confirm"
            />
        </div>
    );
};
