import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/ResourceBoard.module.css";
import { useRouter } from "next/router";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";
import * as Icon1 from "react-icons/fa";
import * as Icon2 from "react-icons/ai";
export const ResourceLinks = (props) => {
    const [open, setOpen] = useState(false);
    const [link, setLink] = useState();
    const [postButtonText, setPostButtonText] = useState("Post a new resource!");
    const [title, setTitle] = useState();
    const [share, setShare] = useState(false);
    const titleInputRef = useRef(null);
    const linkInputRef = useRef(null);
    const shareCheck = useRef(null);
    const router = useRouter();
    const [validated, setValidated] = useState(false);

    const routeToLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const urlValidation = (url) => {
        return url.startsWith("http://") || url.startsWith("https://");
    }

    const submitResource = (event) => {

        const form = event.currentTarget;
        console.log("title: ", title);
        console.log("link: ", link);
        if ((!title || !link) || !urlValidation(link)) {
            console.log("Validation hit!!!")
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            return;
        }

        props.links.push({ title: title, url: link });
        props.setLinks(props.links);

        if (share) {
            let facebookParameters = [];
            facebookParameters.push("u=" + encodeURI(link));
            const shareUrl =
                "https://www.facebook.com/sharer/sharer.php?" +
                facebookParameters.join("&");
            window.open(shareUrl, "_blank", "noopener,noreferrer");
        }
        clickPost();
        setValidated(false);
    };

    const back = () => {
        props.setPage("main");
    };

    const clickPost = () => {
        let text =
            postButtonText === "Post a new resource!"
                ? "Cancel post"
                : "Post a new resource!";
        setPostButtonText(text);
        setShare(false);
        shareCheck.current.checked = false;
        titleInputRef.current.value = null;
        linkInputRef.current.value = null;
        setLink();
        setTitle();
        setOpen(!open);
        setValidated(false);
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.linksContainer}>
                    {props.links.map((link) => (
                        <Button
                            variant="outline-primary"
                            className={styles.categoryButton}
                            key={link.title}
                            size="lg"
                            onClick={() => routeToLink(link.url)}
                        >
                            <Icon2.AiFillPushpin></Icon2.AiFillPushpin>
                            {link.title}
                        </Button>
                    ))}
                </div>
            </main>
            <div className={styles.resourceInput}>
                <Button
                    onClick={clickPost}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    id="postButton"
                    className={styles.postButton}
                >
                    {postButtonText}
                </Button>
            </div>
            <Collapse in={open}>
                <Form className="mb-1" noValidate validated={validated} onSubmit={submitResource}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            ref={titleInputRef}
                            type="text"
                            placeholder="Enter Title"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a title.
                        </Form.Control.Feedback>
                        <Form.Label>Resource Link</Form.Label>
                        <Form.Control
                            ref={linkInputRef}
                            type="url"
                            placeholder="Enter link (a http/https header is needed)"
                            onChange={(e) => setLink(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid url that starts with http:// or https://
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick={submitResource}>
                                Submit
                            </Button>
                        </Col>
                        <Col>
                            <Form.Check
                                ref={shareCheck}
                                type="switch"
                                id="custom-switch"
                                label={
                                    <>
                                        Share on <Icon1.FaFacebookSquare></Icon1.FaFacebookSquare>
                                    </>
                                }
                                onChange={() => setShare(!share)}
                            />
                        </Col>
                    </Row>
                </Form>
            </Collapse>
            <Button
                variant="secondary"
                className={styles.backButton}
                key="back-btn"
                onClick={back}
            >
                Back
            </Button>
        </div>
    );
};
