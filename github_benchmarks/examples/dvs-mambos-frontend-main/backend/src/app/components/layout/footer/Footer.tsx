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
    
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script>
                            © Velzon.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by Themesbrand
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
    
};

export default Footer;