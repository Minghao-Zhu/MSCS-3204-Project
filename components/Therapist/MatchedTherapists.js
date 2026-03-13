import Carousel from "react-bootstrap/Carousel";
import { Button, Badge } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import React from "react";
import styles from "../../styles/Therapists.module.css";
import cardStyles from "../../styles/Card.module.css";
import therapistInfo from "../../mockdata/therapists.json";
import { useRouter } from "next/router";

export const MatchedTherapists = (props) => {
    const router = useRouter();

    const handleRequest = (id) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(
                "selectedTherapist",
                JSON.stringify(therapistInfo[id])
            );
            router.push("/scheduleTherapist");
        }
    };

    const handleBack = () => {
        router.push("/menu");
    }

    return (
        <div style={{ height: "90%", width: "100%" }}>
            <h5 className={styles.intro} style={{ height: "15%", width: "100%" }}>
                Our algorithm has used your profile to match you up with 5 therapists
                below
            </h5>
            <Carousel
                style={{ height: "75%", width: "100%", margin: "auto", marginBottom: "3rem" }}
                variant="dark"
                interval={null}
                indicators={true}
            >
                {therapistInfo.map((therapist, i) => (
                    <Carousel.Item key={therapist.id}>
                        <Image
                            roundedCircle
                            src={therapist.photo}
                            alt="Therapist Photo"
                            style={{ height: "40%", width: "40%" }}
                            className={styles.photo}
                        />
                        <div style={{ height: "75%", width: "100%" }}>
                            <h4 className={styles.text}>
                                {therapist.name}
                            </h4>
                            <h5 className={styles.text}>{therapist.position}</h5>
                            <hr className={styles.emptyLine} />
                            <p className={styles.paragraph}>{therapist.description}</p>
                            <div className={cardStyles.badgeGroup}>
                                {therapist.skills.map((skill) => (
                                    <Badge className={cardStyles.badge} pill key={skill}>{skill}</Badge>
                                ))}
                            </div>
                        </div>
                        <Button
                            className={styles.appointmentButton}
                            type="button"
                            onClick={() => handleRequest(therapist.id)}
                        >
                            Request Online Appointment
                        </Button>
                        <Button
                            variant="secondary"
                            className={styles.backButton}
                            type="button"
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};
