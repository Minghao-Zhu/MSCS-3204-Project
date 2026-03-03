import React, { useState } from "react";
import * as Icon1 from 'react-icons/im';
import * as Icon2 from 'react-icons/fa';

import styles from "../styles/General.module.css";
import Link from "next/link";

export const Navbar = (props) => {
    return (
        <div className={styles.iconbar}>
            <Link legacyBehavior href="/menu"><a><Icon2.FaHome></Icon2.FaHome></a></Link>
            <Link legacyBehavior href="/viewProfile"><a><Icon1.ImProfile></Icon1.ImProfile></a></Link>
            <Link legacyBehavior href="/viewTherapists"><a><Icon2.FaUserMd></Icon2.FaUserMd></a></Link>
            <Link legacyBehavior href="/alumniCategory"><a><Icon2.FaUserGraduate></Icon2.FaUserGraduate></a></Link>
            <Link legacyBehavior href="/resourceBoard"><a><Icon2.FaFileImage></Icon2.FaFileImage></a></Link>
            <Link legacyBehavior href="/viewAppointmentHistory"><a><Icon2.FaHistory></Icon2.FaHistory></a></Link>
        </div>
    );
};