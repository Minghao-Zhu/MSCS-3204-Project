import React, { useState, useRef, useEffect } from "react";

export const AppointmentText = (props) => {
    return (
        <div>
            <p>
                You have Successfully scheduled a session with{" "}
                <strong>{props.name}</strong> on {props.appointment.formattedDate} from{" "}
                {props.appointment.section} to {props.appointment.toTime}{" "}
                {props.appointment.AMPM}
            </p>
            <p>You may also:</p>
        </div>
    );
};
