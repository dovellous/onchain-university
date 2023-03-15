import React from "react";
import {useSelector} from "react-redux";
import "./Auth.scss";

type PageProps = {
    children?: React.ReactNode;
}

const Login:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
    
    // @ts-ignore
    const menuCategories = useSelector(state => state.menu.value);
    
    return (
        <>

            {/*  auth-page wrapper  */}
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                {/*  auth-page content  */}
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="p-lg-5 p-4 auth-one-bg h-100">
                                                <div className="bg-overlay"></div>
                                                <div className="position-relative h-100 d-flex flex-column">
                                                    <div className="mb-4">
                                                        <a href="/" className="d-block">
                                                            <img src="/assets/images/logo.png" alt="" height="100" />
                                                        </a>
                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className="mb-3">
                                                            <i className="ri-double-quotes-l display-4 text-warning" />
                                                        </div>
                                                        {/*  end carousel  */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  end col  */}

                                        <div className="col-lg-6">
                                            <div className="p-lg-5 p-4">
                                                <div>
                                                    <h5 className="text-black">Welcome Back !</h5>
                                                    <p className="text-muted">Sign in to continue to Mambo's Account.</p>
                                                </div>

                                                <div className="mt-4">
                                                    <form action="#.">

                                                        <div className="mb-3">
                                                            <label htmlFor="username" className="form-label">Username</label>
                                                            <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="float-end">
                                                                <a href="/auth/forgot-password" className="text-muted">Forgot password?</a>
                                                            </div>
                                                            <label className="form-label" htmlFor="password-input">Password</label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password" />
                                                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none shadow-none text-muted password-addon" type="button" id="password-addon">
                                                                        <i className="ri-eye-fill align-middle" />
                                                                    </button>
                                                            </div>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="remember-me" />
                                                                <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                                        </div>

                                                        <div className="mt-4">
                                                            <button className="btn btn-success w-100" type="submit">Sign In</button>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <div className="signin-other-title">
                                                                <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                            </div>

                                                            <div>
                                                                <button type="button" className="btn btn-primary btn-icon waves-effect waves-light mr-15"><i className="ri-facebook-fill fs-16"></i></button>
                                                                <button type="button" className="btn btn-danger btn-icon waves-effect waves-light mr-15"><i className="ri-google-fill fs-16"></i></button>
                                                                <button type="button" className="btn btn-dark btn-icon waves-effect waves-light mr-15"><i className="ri-github-fill fs-16"></i></button>
                                                                <button type="button" className="btn btn-info btn-icon waves-effect waves-light mr-15"><i className="ri-twitter-fill fs-16"></i></button>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p className="mb-0">Don't have an account ? <a href="/auth/sign-up" className="fw-semibold text-primary text-decoration-underline"> Signup</a> </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  end col  */}
                                    </div>
                                    {/*  end row  */}
                                </div>
                                {/*  end card  */}
                            </div>
                            {/*  end col  */}

                        </div>
                        {/*  end row  */}
                    </div>
                    {/*  end container  */}
                </div>
                {/*  end auth page content  */}

                {/*  footer  */}
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <p className="mb-0">&copy;
                                        <script>{new Date().getFullYear()}</script> Mambo's Chicken. Crafted with <i className="mdi mdi-heart text-danger" /> by Mambo's Chicken
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*  end Footer  */}
            </div>
            {/*  end auth-page-wrapper  */}
        
        </>
    );
    
};

export default Login;