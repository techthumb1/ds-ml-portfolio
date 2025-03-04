import React from "react";
import "../styles/output.css";
import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}
