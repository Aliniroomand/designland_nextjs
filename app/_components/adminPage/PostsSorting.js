import React from 'react';

const PostsSorting = () => {
    return (
        <section>
            <p>
                مرتب کردن بر اساس : 
            </p>
            
            <select className="outline-none">
                <option  >دسته بندی</option>
                <option >تاریخ بارگذاری</option>
                <option >کد</option>
            </select>
        </section>
    );
};

export default PostsSorting;