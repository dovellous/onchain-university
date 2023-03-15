import React from "react";
import {useSelector} from "react-redux";

type PageProps = {
    children?: React.ReactNode;
}

const Profile:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
    
    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);
    
    return (
        <>
            
        <h1>Profile</h1>
        
        </>
    );
    
};

export default Profile;