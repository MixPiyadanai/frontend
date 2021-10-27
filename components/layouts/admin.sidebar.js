import Link from 'next/link';
import Image from 'next/image'
import React from 'react'

const AdminSidebar = () => {
    return (
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link href='#'>
  <a className="brand-link">
    <Image src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} width={20} height={20} />
    <span className="brand-text font-weight-light">Admin Panel</span>
  </a>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <Image src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" width={50} height={50} />
      </div>
      <div className="info">
      <Link href='#'>
        <a className="d-block">Mr.Anuchat  Rungsiyanon</a>
      </Link>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
        <Link href='/'>
          <a className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
            </p>
          </a>
        </Link>
        </li>
        <li className="nav-item">
        <Link href='/users'>
          <a className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              จัดการสมาชิก
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
          </Link>
        </li>
        <li className="nav-item">
        <Link href='#'>
          <a className="nav-link">
            <i className="nav-icon fas fa-copy text-red" />
            <p>
              ออกจากระบบ
            </p>
          </a>
        </Link>
          </li>
          </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
    )
}

export default AdminSidebar