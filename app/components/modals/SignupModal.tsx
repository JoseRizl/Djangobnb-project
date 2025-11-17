'use client';

import Modal from "./Modal";

import {useState} from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModal = useSignupModal()

    const content = (
        <>

            <form className="space-y-4">
                <input type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Your e-mail address"/>
                <input type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Your password"/>
                <input type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Repeat password"/>

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>
                <CustomButton 
                    label="Submit"
                    onClick={() => console.log("Test")}
                />
            </form>
            
        </>
    )
    return (
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Signup"
            content={content}
            />
            
    )
}

export default SignupModal;