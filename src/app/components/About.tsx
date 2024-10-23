// import React from "react";
import { SiCodefresh } from "react-icons/si";
import { SiAerlingus } from "react-icons/si";
import { LuDroplets } from "react-icons/lu";
import { TbWashHand } from "react-icons/tb";

export default function About() {
    return (
        <div>
            <section className="bg-customTextColor px-4 sm:px-6 lg:px-10 py-20 text-white" id="about">
                <h1 className="text-3xl md:text-4xl text-center">A B O U T</h1>

                <div className="flex justify-center text-center py-4 tracking-widest leading-7" id="about">
                    <p className="w-[90%] sm:w-[70%] lg:w-[45%]">
                        Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-center py-10">
                    <div className="w-[100px]">
                        <SiCodefresh className="h-[50px] w-full mx-auto" />
                        <p className="mt-2">Organic</p>
                    </div>
                    <div className="w-[100px]">
                        <SiAerlingus className="h-[50px] w-full mx-auto" />
                        <p className="mt-2">100% Cotton</p>
                    </div>
                    <div className="w-[100px]">
                        <LuDroplets className="h-[50px] w-full mx-auto" />
                        <p className="mt-2">Waterproof</p>
                    </div>
                    <div className="w-[100px]">
                        <TbWashHand className="h-[50px] w-full mx-auto" />
                        <p className="mt-2">Washable</p>
                    </div>
                </div>
            </section>

        </div>
    )
}