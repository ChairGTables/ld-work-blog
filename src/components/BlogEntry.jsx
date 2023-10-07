import React from "react";

const blogEntryStyle = {border: '1px solid black'};

const BlogEntry = ({blogEntry, selected, onSelect}) => {
    let className = "blog-entry";

    if (selected) {
        className += " selected";
    }
    return (
        <div onClick={onSelect} className={className} style={blogEntryStyle}>
            <div>{blogEntry.title}</div>
            <div>
                <p>{blogEntry.text}</p>
            </div>
        </div>
    )
}

export default BlogEntry;