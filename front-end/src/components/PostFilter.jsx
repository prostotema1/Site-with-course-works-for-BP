import React from 'react';
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput className={"search"}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
        </div>
    );
};

export default PostFilter;