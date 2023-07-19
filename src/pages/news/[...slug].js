//catch all routes
//[...slug].js file naming conventation. url er nested router por sompurnotuku catch korar jonne use kora hoy.

import { useRouter } from "next/router";


const CatchAllRoutes = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This is for filtering : {router.query.slug}</h1>
        </div>
    );
};

export default CatchAllRoutes;