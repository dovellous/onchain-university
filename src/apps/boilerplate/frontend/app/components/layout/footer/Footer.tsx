import React from "react";
import {useSelector} from "react-redux";

type PageProps = {
    children?: React.ReactNode;
}

const Footer:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
    
    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);
    
    return (
        <>
    
            <h1>Footer</h1>

        </>
    );
    
};

export default Footer;