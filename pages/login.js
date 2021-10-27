import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Login = () => {
    return (
    <div>
        <Head>
            <div>
            <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="./plugins/fontawesome-free/css/all.min.css" />
            <link rel="stylesheet" href="./plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
            <link rel="stylesheet" href="./dist/css/adminlte.min.css" />
            </div>
        </Head>
        <body class="hold-transition login-page">
        <div className="login-box">
        <div className="login-logo">
            <Link href='./'>
                <a href="./"><b>Mix</b>Login</a>
            </Link>
        </div>
        {/* /.login-logo */}
        <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-envelope" />
                    </div>
                </div>
                </div>
                <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-lock" />
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-8">
                    <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                        Remember Me
                    </label>
                    </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                    <Link href='../'>
                    <a className="nav-link">
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </a>
                    </Link>
                </div>
                {/* /.col */}
                </div>
            </form>
            <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                </a>
            </div>
            {/* /.social-auth-links */}
            <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
                <Link href='./register'>
                    <a className="text-center">Register a new membership</a>
                </Link>
            </p>
            </div>
            {/* /.login-card-body */}
        </div>
        </div>
        </body>
    </div>
    )
}

export default Login