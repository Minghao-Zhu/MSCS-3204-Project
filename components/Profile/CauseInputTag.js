import React, { useState, useEffect, useImperativeHandle } from "react";
import profileStyle from "../../styles/Profile.module.css";

export const CauseInputTag = React.forwardRef((props, ref) => {
    let [tags, setTags] = useState([]);
    useImperativeHandle(
        ref,
        () => ({
            getTags: () => {
                return tags;
            },
        }),
        [tags]
    );
    useEffect(() => {
        setTags(props.tags);
    }, []);
    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === "Enter" && val) {
            if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTags([...tags, val]);
            e.target.value = null;
        }
    };
    const removeTag = (i) => {
        const newTags = [...tags];
        newTags.splice(i, 1);
        setTags(newTags);
    };

    return (
        <div className={profileStyle.input_tag}>
            <ul className={profileStyle.input_tag__tags}>
                {tags.map((tag, i) => (
                    <li key={tag}>
                        {tag}
                        <button
                            type="button"
                            onClick={() => {
                                removeTag(i);
                            }}
                        >
                            +
                        </button>
                    </li>
                ))}
            </ul>
            <input
                placeholder="Hit enter to add a new tag, ex:courseload"
                onKeyDown={inputKeyDown}
                type="text"
            />
        </div>
    );
});
