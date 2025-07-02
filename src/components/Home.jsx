import React from 'react'

function Home() {
    return (
        <>

            <div className="container mt-5">
                <h1 className="display-6">Welcome to User Management App 👋</h1>
                <p className="lead">Easily add, view, and manage users in one place. Built using React, Redux Toolkit, and Bootstrap.</p>
                <div className="p-5 mb-4 bg-light rounded-3 shadow">
                    <div className="container-fluid py-5">
                        <h1 className="display-6 fw-bold">User Management App 👥</h1>
                        <p className="col-md-8 fs-4">
                            This app allows you to create, update, and delete users using a simple, intuitive interface. Start by adding your first user or viewing the existing list.
                        </p>
                        <a href="/form" className="btn btn-primary btn-lg me-2">➕ Add User</a>
                        <a href="/table" className="btn btn-outline-secondary btn-lg">📋 View Users</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
