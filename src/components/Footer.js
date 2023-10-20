import { Component } from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div>
              <p>Address: 123 Main Street, San Francisco, CA 94102</p>
            </div>
          </div>
          <div className="col-auto">
            <div>
              <p>Phone number: (123) 456-7890</p>
            </div>
          </div>
          <div className="col-auto">
            <div>
              <p>© Copyright 2018 Ristorante Con Fusion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
