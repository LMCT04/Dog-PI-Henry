import React from "react";
import style from './loading.module.css'

const Loading = () => {
    return (
        <>
            <div className={style.background}>
                <div className={style.loading} />
                <p className={style.p}>
                    LOADING
                </p>
            </div>
        </>
    );
};

export default Loading;
