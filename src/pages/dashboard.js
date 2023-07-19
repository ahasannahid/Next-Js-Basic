import DashBoardLayout from "../../components/Layouts/DashBoardLayout";

const DashBoardPage = () => {
    return (
        <div>
            <h1>Welcome to DashBoard page</h1>
        </div>
    );
};

export default DashBoardPage;

DashBoardPage.getLayout = function getLayOut(page){
    return (
        <DashBoardLayout>
            {page}
        </DashBoardLayout>
    )
}