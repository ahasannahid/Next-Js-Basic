import DashBoardLayout from "../../components/Layouts/DashBoardLayout";
import RootLayout from "../../components/Layouts/RootLayout";

const AdminPage = () => {
    return (
        <div>
            <h1>Welcome to Admin page</h1>
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout = function getLayOut(page) {
    return (
        // <DashBoardLayout>
        //     {page}
        // </DashBoardLayout>
        <RootLayout>
            <DashBoardLayout>
                {page}
            </DashBoardLayout>
        </RootLayout>
    )
}