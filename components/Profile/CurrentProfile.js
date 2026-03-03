import { Form, Button } from "react-bootstrap";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Col from "react-bootstrap/Col";
import profileStyle from "../../styles/Profile.module.css";
export const CurrentProfile = (props) => {
    const sympRef = useRef();
    const causeRef = useRef();
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [year, setYear] = useState();
    const [exp, setExp] = useState();
    const [school, setSchool] = useState();
    const [symp, setSymp] = useState([]);
    const [cause, setCause] = useState([]);
    const router = useRouter();
    useEffect(() => {
        setName(props.currUser.name);
        setEmail(props.currUser.email);
        setExp(props.currUser.exp);
        setYear(props.currUser.year);
        setSchool(props.currUser.school);
        setSymp(props.currUser.symp);
        setCause(props.currUser.cause);
    }, []);
    return (
        <Form noValidate validated={validated}>
            <Form.Group controlId="validationCustom01">
                <Form.Label column>Name:</Form.Label>
                <Col>
                    <Form.Control plaintext readOnly value={name} />
                </Col>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label column>Email:</Form.Label>
                <Col>
                    <Form.Control plaintext readOnly value={email} />
                </Col>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label column>School:</Form.Label>
                <Col>
                    <Form.Control plaintext readOnly value={school} />
                </Col>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label column>School Year:</Form.Label>
                <Col>
                    <Form.Control plaintext readOnly value={year} />
                </Col>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label column>Recent Mental Health Experience:</Form.Label>
                <Col>
                    <Form.Control plaintext readOnly value={exp} />
                </Col>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label>Recent mental health symptoms:</Form.Label>
                <div className={profileStyle.display_tag} style={{ maxWidth: "280px" }}>
                    <ul className={profileStyle.input_tag__tags}>
                        {symp.map((tag, i) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label>
                    External causes for your mental health difficulties:
                </Form.Label>
                <div className={profileStyle.display_tag} style={{ maxWidth: "280px" }}>
                    <ul className={profileStyle.input_tag__tags}>
                        {cause.map((tag, i) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </Form.Group>
            <div className="text-center">
                <Button
                    className="mt-2"
                    onClick={(e) => {
                        router.push("/updateProfile");
                    }}
                    type="button"
                >
                    Edit
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                    className="mt-2"
                    onClick={(e) => {
                        router.push("/menu");
                    }}
                    variant="secondary"
                    type="button"
                >
                    Back
                </Button>
            </div>
        </Form>
    );
};
