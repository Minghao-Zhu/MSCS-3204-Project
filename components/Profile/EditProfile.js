import { Form, Button, Row, Col } from "react-bootstrap";
import { SymptomInputTag } from "./SymptomInputTag";
import { CauseInputTag } from "./CauseInputTag";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Confirmation } from "./../Confirmation";
import profileStyle from "../../styles/Profile.module.css";

function validateEmail(email) {
    const regexp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
}
export const EditProfile = (props) => {
    const sympRef = useRef();
    const causeRef = useRef();
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [year, setYear] = useState();
    const [exp, setExp] = useState();
    const [school, setSchool] = useState();
    const [symp, setSymp] = useState();
    const [cause, setCause] = useState();
    const router = useRouter();
    const [showConfirm, setShowConfirm] = useState(false);
    const toggleConfirm = () => setShowConfirm(!showConfirm);
    useEffect(() => {
        setName(props.currUser.name);
        setEmail(props.currUser.email);
        setExp(props.currUser.exp);
        setYear(props.currUser.year);
        setSchool(props.currUser.school);
        setSymp(props.currUser.symp);
        setCause(props.currUser.cause);
    }, []);
    const handleCancel = (e) => {
        if (props.firstTime) {
            router.push("/");
        } else {
            router.push("/menu");
        }
    };
    const checkValidation = (e) => {
        if (name === "" || validateEmail(email) == false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        } else {
            setValidated(true);
            setShowConfirm(true);
        }
    };
    const handleSubmit = () => {
        let updateUser = {
            name: name,
            email: email,
            school: school,
            year: year,
            exp: exp,
            symp: sympRef.current.getTags(),
            cause: causeRef.current.getTags(),
            created: true,
        };
        localStorage.setItem("user", JSON.stringify(updateUser));
        if (props.firstTime) {
            router.push("/menu");
        } else {
            router.push("/viewProfile");
        }
    };
    return (
        <Form className="mt-3" noValidate validated={validated}>
            <Form.Group controlId="validationCustom01">
                <Row>
                    <Col xs={2}>
                        <Form.Label>
                            Name<text style={{ color: "red" }}>*</text>:
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className={profileStyle.form_control}
                            required
                            type="text"
                            placeholder="Enter your name (required)"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mt-3" controlId="validationCustom01">
                <Row>
                    <Col xs={2}>
                        <Form.Label>
                            Email<text style={{ color: "red" }}>*</text>:
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className={profileStyle.form_control}
                            required
                            type="email"
                            placeholder="Enter your preferred email (required)"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback>Valid Email</Form.Control.Feedback>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mt-3" controlId="validationCustom01">
                <Row>
                    <Col xs={2}>
                        <Form.Label>
                            Campus<text style={{ color: "red" }}>*</text>:
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className={profileStyle.form_control}
                            as="select"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                        >
                            <option value="Sofia">Sofia</option>
                            <option value="Other">Other</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mt-3" controlId="validationCustom01">
                <Row>
                    <Col xs={2}>
                        <Form.Label>
                            School Year<text style={{ color: "red" }}>*</text>:
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            className={profileStyle.form_control}
                            as="select"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="Master">Master</option>
                            <option value="Undergrad">Undergrad</option>
                            <option value="PHD">PHD</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label>Recent Mental Health Experiences:</Form.Label>
                <Form.Control
                    className={profileStyle.form_control}
                    as="textarea"
                    rows={3}
                    placeholder="Please briefly describe your recent mental health experiences (how do you feel recently? Struggling with anything?...)"
                    defaultValue={exp}
                    onChange={(e) => setExp(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label>Add recent mental health symptoms:</Form.Label>
                <SymptomInputTag tags={props.currUser.symp} ref={sympRef} />
            </Form.Group>
            <Form.Group controlId="validationCustom01">
                <Form.Label>
                    Add external causes for your mental health difficulties:
                </Form.Label>
                <CauseInputTag tags={props.currUser.cause} ref={causeRef} />
            </Form.Group>
            <div className="text-center">
                <Button className="mt-2 mr-5" onClick={checkValidation} type="button">
                    Done!
                </Button>
                <Confirmation
                    showConfirm={showConfirm}
                    setShowConfirm={setShowConfirm}
                    toggleConfirm={toggleConfirm}
                    clickConfirm={handleSubmit}
                    heading="Profile Change Confirmation"
                    content="Your profile information has been updated successfully!"
                    secondaryButton="Keep Editing"
                    primaryButton="OK"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                    className="mt-2"
                    variant="secondary"
                    onClick={handleCancel}
                    type="button"
                >
                    Cancel
                </Button>
            </div>
        </Form>
    );
};
