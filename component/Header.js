import React from 'react'
import Headcss from "@/styles/Headcss.module.scss";

export const Header = () => {
    return (
        <header className={Headcss.header}>
            <div className={Headcss.parallelogramBox}>
                <div className={Headcss.parallelogram}></div>
                <p className={Headcss.myname}>Kyung Woo Kim</p>
            </div>
        </header>

    )
}
