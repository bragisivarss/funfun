"use client"
import Image from "next/image";

const ErrorPage = () => {
    return <div className="error_container">
        <h1 className="error_title">Oops!</h1>
        <h2 className="error_text">The Page You Requested Could Not Be Found</h2>
        <Image src="/pngegg(2).png" width={1920} height={1230} alt="not found" className="error_image" />
    </div>
}

export default ErrorPage;
