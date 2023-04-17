import React, { useEffect, useRef, useState } from 'react'
import Headcss from "@/styles/Headcss.module.scss";

export const Header = () => {

    //usestate 이용해서 반응형 width 사이즈 일때 메뉴바 나오게 
    const [menubar, setMenubar] = useState(false);
    const [mobMenu, setMobMenu] = useState(false);
    const test = useRef();

    useEffect(() => {
        function tabletSize() {
            if (window.innerWidth > 1024) {
                setMenubar(false);
            } else {
                setMenubar(true);

            }

            window.addEventListener('resize', tabletSize);

            return () => {
                window.removeEventListener('resize', tabletSize);
            };
        }
        tabletSize()


    }, [])
    console.log(test.current, 'test')

    function handleClick() {
        let child = test.current.children;
        let i = 0
        for (i = 0; i < 3; i++) {

            if (i === 0) {
                child[i].classList.toggle('linedown')

            } else if (i === 1) {
                child[i].classList.toggle('fadeout')

            } else {
                child[i].classList.toggle('lineup')
            }

        }
        test.current.classList.toggle('animate');

    }


    return (
        <>
            <header className={Headcss.header}>
                <div className={Headcss.parallelogramBox}  >
                    <div className={Headcss.parallelogram}></div>
                    <p className={Headcss.myname}>Kyung Woo Kim</p>
                </div>
                {
                    menubar ? (
                        <div className={Headcss.right}>

                            <div className={Headcss.menubar} onClick={() => handleClick()} >
                                <div className={Headcss.spans} ref={test}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul className={Headcss.menudown}>
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Skill</li>
            </ul>
                        </div>
                        

                    ) : (
                        <div className={Headcss.right}>
                            <a>Home</a>
                            <a>Projects</a>
                            <a>About</a>
                            <a>Skill</a>
                        </div>
                        
                    )
                }

            </header>

            
        </>

    )
}
