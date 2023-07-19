// 404 error page naming structure 404.js must

import { useRouter } from "next/router";
import { Button } from "antd";
import Link from "next/link";


const ErrorPage = () => {
    // programmatically routing home page from error page.
    const router = useRouter();
    setTimeout(() =>{
        router.push("/");
    },5000)
    return (
        <div>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="404" width="100%" height='565px'/>
            <Button type="primary">
              <Link href="/">Home</Link>
            </Button>
        </div>
    );
};

export default ErrorPage;