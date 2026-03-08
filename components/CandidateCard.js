import React from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import styles from "../styles/Card.module.css";

export const CandidateCard = (props) => {
    return (
        <Card className={styles.card}>
            <Card.Body>
                <Row>
                    <Col xs={4} >
                        <Card.Img width={100} height={100} variant="left" src={props.candidate.photo} />
                    </Col>
                    <Col className={styles.infoField}>
                        <Card.Title className={styles.cardName}>{props.candidate.name}</Card.Title>
                        <p className={styles.infoText}>{props.candidate.position}</p>
                        <p className={styles.infoText}>{props.candidate.phone}</p>
                        <p className={styles.infoText}>{props.candidate.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.badgeGroup}>
                            {props.skills.map((skill) => (
                                <Badge className={styles.badge} pill key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card >

    );
};