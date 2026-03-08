import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/ResourceBoard.module.css";
import generalStyles from "../../styles/General.module.css";

import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import * as Icon1 from "react-icons/im";
import * as Icon2 from "react-icons/gi";
import * as Icon3 from "react-icons/fa";
import * as Icon4 from "react-icons/md";

const categories = {
    title: "anxiety",
    title: "Sleep",
    title: "Happiness",
    title: "Supplements",
};

export const ResourceCategory = (props) => {
    const router = useRouter();
    const routeToCategory = (category) => {
        props.setCategory(category);
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Button
                    className={styles.categoryButton}
                    size="lg"
                    onClick={() => routeToCategory("anxiety")}
                >
                    <Icon1.ImCrying></Icon1.ImCrying> Anxiety
                </Button>
                <Button
                    className={styles.categoryButton}
                    size="lg"
                    onClick={() => routeToCategory("sleep")}
                >
                    <Icon2.GiNightSleep></Icon2.GiNightSleep> Sleep
                </Button>
                <Button
                    className={styles.categoryButton}
                    size="lg"
                    onClick={() => routeToCategory("happiness")}
                >
                    <Icon3.FaRegSmileWink></Icon3.FaRegSmileWink> Happiness
                </Button>
                <Button
                    className={styles.categoryButton}
                    size="lg"
                    onClick={() => routeToCategory("supplements")}
                >
                    <Icon4.MdOutlineHealthAndSafety></Icon4.MdOutlineHealthAndSafety>{" "}
                    Supplements
                </Button>
            </main>
        </div>
    );
};
