import DashBoardLayout from "../../components/Layouts/DashBoardLayout";

const AdminPage = () => {
    return (
        <div>
            <h1>Welcome to Admin page</h1>
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout = function getLayOut(page){
    return (
        <DashBoardLayout>
            {page}
        </DashBoardLayout>
    )
}