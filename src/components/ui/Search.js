import React, {useState} from "react";

const Search = ({getQuery}) => {
    const [text, setText] = useState("");
    const onInputChange = q => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search characters"
                    autoFocus
                    value={text}
                    onChange={event => onInputChange(event.target.value)}
                />
            </form>
        </section>
    );
}

export default Search;