import React from 'react';
import AdminHOC from '../../components/layouts/admin.hoc';
import axios from 'axios';
import Link from 'next/link';

const Users = ({ users, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>;
      }
    return (
        <div>
            <AdminHOC>
                <div class="content-wrapper">
                    <div>
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                            <h1>ตารางรายการสมาชิก</h1>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">DataTables</li>
                            </ol>
                            </div>
                        </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                <h3 className="card-title">รายการสมาชิก</h3>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                <table id="example2" className="table table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>firstname</th>
                                        <th>lastname</th>
                                        <th>username</th>
                                        <th>Password</th>
                                        <th>edit</th>
                                        <th>delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.map(user => (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                            <td className="text-center">
                                            <Link href={`/users/edit/${user.id}`}>
                                                <a className="btn btn-warning">
                                                    แก้ไขสมาชิก 
                                                </a>
                                            </Link>
                                            </td>
                                            <td className="text-center">
                                                <Link href="#">
                                                    <a className="btn btn-danger">
                                                        ลบ
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))} 
                                    </tbody>
                                </table>
                                </div>
                                {/* /.card-body */}
                            </div>
                            </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                    </div>
                </div>
            </AdminHOC>
        </div>
    )
}

Users.getInitialProps = async ctx => {
    try {
      const res = await axios.get('http://localhost:1337/members');
      const users= res.data;
      return { users };
    } catch (error) {
      return { error };
    }
  };

export default Users