import React from 'react'
import Link from 'next/link'

const Login = () => {
    return (
        <div>
            <body className="hold-transition login-page">
<div className="login-box">
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">ระบบบริหารจัดการข้อมูล</p>
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
                &nbsp;จำรหัสผ่าน
              </label>
            </div>
          </div>
          {/* /.col */}

        </div>
      </form>
      <div className="social-auth-links text-center mb-3">
        <a href="#" className="btn btn-block btn-primary">
          <i className="fas fa-sign-in-alt mr-2" /> Sign in
        </a>
        <Link href="/register">
        <a className="text-center">สมัครสมาชิก</a>
        </Link>
      </div>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
{/* /.login-box */}
</body>

        </div>
    )
}

export default Login;
