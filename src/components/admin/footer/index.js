import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="py-4 bg-footer mt-auto">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted-1">© 2020 <b>Shaheer Online</b>. by <a href="https://shahhost.com">SHAHhost.com</a></div>
                        <div className="footer-links">
                            <a href="http://shahhost.com">Privacy Policy</a>
                            <a href="https://shahhost.com">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
