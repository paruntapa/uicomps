'use client'

import './pattradhara.css';
import React, { useEffect } from 'react'
import gsap from 'gsap';
import { lockFont } from './lock';
import Image from 'next/image';

const usePage = () => {

    useEffect(() => {

        const folders = document.querySelectorAll(".folder");
        const folderWrappers = document.querySelectorAll(".folder-wrapper");

        let isMobile = window.innerWidth < 1000;

        const setInitialPosition = () => {
            gsap.set(folderWrappers, {y: isMobile ? 0 : 25 });
        }

        folders.forEach((folder, index) => {
            const previewImages = folder.querySelectorAll(".folder-preview-img");

            folder.addEventListener("mouseenter", () => {
                if (isMobile) return;

                folders.forEach((siblingFolder) => {
                    if (siblingFolder !== folder) {
                        siblingFolder.classList.add("disabled");
                    }
                });

                gsap.to(folderWrappers[index], {
                    y: 0,
                    duration: 0.25,
                    ease: "back.out(1.7)"
                })

                previewImages.forEach((img, imgIndex) => {
                    let rotation;
                    if (imgIndex === 0) {
                        rotation = gsap.utils.random(-20, -10);
                    } else if (imgIndex === 1) {
                        rotation = gsap.utils.random(-10, 10);
                    } else {
                        rotation = gsap.utils.random(10, 20);
                    }

                    gsap.to( img, {
                        y: "-100%",
                        rotation: rotation,
                        duration: 0.25,
                        ease: "back.out(1.7)",
                        delay: imgIndex * 0.025
                    });
                });
            });

            folder.addEventListener("mouseleave", () => {
                if (isMobile) return;

                folders.forEach((siblingFolder) => {
                    siblingFolder.classList.remove("disabled");
                });

                gsap.to(folderWrappers[index], {
                    y: 25,
                    duration: 0.25,
                    ease: "back.out(1.7)"
                });

                previewImages.forEach((img, imgIndex) => {
                    gsap.to(img, {
                        y: "0%",
                        rotation: 0,
                        duration: 0.25,
                        ease: "back.out(1.7)",
                        delay: imgIndex * 0.05
                    });
                });
            });
        });

        window.addEventListener("resize", () => {
            const currentBreakpoint = window.innerWidth < 1000;
            if (currentBreakpoint !== isMobile) {
                isMobile = currentBreakpoint;
                setInitialPosition();

                folders.forEach((folder) => {
                    folder.classList.remove("disabled");
                });

                const allPreviewImages = document.querySelectorAll(".folder-preview-img");
                gsap.set(allPreviewImages, { y: "0%", rotation: 0});
            }
        });

        setInitialPosition();

    }, [])


  return (
    <div>
    <nav>
        <p>Design Ledger</p>
        <p>Experiment 6028</p>
    </nav>

    <div className={`folders text-black ${lockFont.className}`}>
        <div className='row'>
            <div className='folder variant-1'>
                <div className='folder-preview'>
                    <div className='folder-preview-img'><Image src="./imgs/gojo.jpeg" alt="gojo" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/zenin.jpeg" alt="zenin" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/yuji.jpeg" alt="yuji" /></div>

                </div>
                <div className='folder-wrapper'>
                    <div className='folder-index'><p>01</p></div>
                    <div className='folder-name'><h1>JJK</h1></div>

                </div>
            </div>
            <div className='folder variant-2'>
                <div className='folder-preview'>
                    <div className='folder-preview-img'><Image src="./imgs/kakashi.jpeg" alt="kakashi" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/uchihas.jpeg" alt="itachi" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/pain.jpeg" alt="pain" /></div>

                </div>
                <div className='folder-wrapper'>
                    <div className='folder-index'><p>02</p></div>
                    <div className='folder-name'><h1>Naruto</h1></div>

                </div>
            </div>
        </div>
        <div className='row'>
            <div className='folder variant-2'>
                <div className='folder-preview'>
                    <div className='folder-preview-img'><Image src="./imgs/rumbling.jpeg" alt="rumbling" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/mikasa.jpeg" alt="mikasa" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/levi.jpeg" alt="levi" /></div>

                </div>
                <div className='folder-wrapper'>
                    <div className='folder-index'><p>03</p></div>
                    <div className='folder-name'><h1>Attack on Titan</h1></div>

                </div>
            </div>
            <div className='folder variant-3'>
                <div className='folder-preview'>
                    <div className='folder-preview-img'><Image src="./imgs/makima.jpeg" alt="makima" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/aki.jpeg" alt="aki" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/powerdenji.jpeg" alt="powerdenji" /></div>

                </div>
                <div className='folder-wrapper'>
                    <div className='folder-index'><p>04</p></div>
                    <div className='folder-name'><h1>Chainsaw Man</h1></div>

                </div>
            </div>
        </div>
        <div className='row'>
            <div className='folder variant-1'>
                <div className='folder-preview'>
                    <div className='folder-preview-img'><Image src="./imgs/blue.jpeg" alt="blue" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/lionhert.jpeg" alt="lionhert" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/subaruemelia.jpeg" alt="subaruemelia" /></div>

                </div>
                <div className='folder-wrapper'>
                    <div className='folder-index'><p>05</p></div>
                    <div className='folder-name'><h1>Re:Zero</h1></div>

                </div>
            </div>
            <div className='folder variant-2'>
                <div className='folder-preview'>
                    <div className='folder-preview-img'><Image src="./imgs/suzaku.jpeg" alt="suzaku" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/laluach2.jpeg" alt="laluach2" /></div>
                    <div className='folder-preview-img'><Image src="./imgs/kellen.jpeg" alt="kellen" /></div>

                </div>
                <div className='folder-wrapper'>
                    <div className='folder-index'><p>06</p></div>
                    <div className='folder-name'><h1>Code Geass</h1></div>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default usePage