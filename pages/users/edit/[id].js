import React from 'react';
import AdminHOC from '../../../components/layouts/admin.hoc';
import axios from 'axios';
import Link from 'next/link';

const Edituser = ({ Editusers, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>;
      }
    return (
        <div>
            <AdminHOC>
                <div class="content-wrapper">
                <div className="register-box">
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">แก้ไขสมาชิก</p>
      {Editusers.map(Editusers => (
      <form action="/" method="post">

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="ชื่อ" onChange={(event) => { setfirstName(event.target.value) }} value={Editusers.firstname}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
                                     
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="นามสกุล" onChange={(event) => { setlastName(event.target.value) }} value={Editusers.lastname}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" onChange={(event) => { setuserName(event.target.value) }} value={Editusers.username}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} value={Editusers.password}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
      </form>
             ))} 
      <div className="social-auth-links text-center">
      <button type="button" class="btn btn-success">สมัครสมาชิก</button>
      <br />
        <Link href="/login">
      <a className="text-center"><br />ฉันมีบัญชีอยู่แล้ว</a>
      </Link>
      </div>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}
                </div>
            </AdminHOC>
        </div>
    )
}

Edituser.getInitialProps = async ctx => {
    try {
      const res = await axios.get('http://localhost:1337/members/');
      const Editusers= res.data;
      return { Editusers };
    } catch (error) {
      return { error };
    }
  };

export default Edituser