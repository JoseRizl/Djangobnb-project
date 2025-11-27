'use client';

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import LoginModal from "../modals/LoginModal";

interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ 
    userId 
}) => {
    const loginModal = useLoginModal();
    const AddPropertyModal = useAddPropertyModal();

    const airbnbYourHome = () => {
        if (userId) {
            AddPropertyModal.open();
        } else {
            loginModal.open();
        }

    }
    return (
        <div 
            onClick={airbnbYourHome}
            className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Djangobnb your home
        </div>
    )
}

export default AddPropertyButton;