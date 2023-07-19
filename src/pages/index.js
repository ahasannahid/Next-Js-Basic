// import RootLayout from "../components/Layouts/RootLayout";  //dot notation
// same directory te thakle evabe use kora hoy. etake absoulate path bole
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name= "home page" description= "this page is created by next js"/>
      </Head>
      <h1>This is next js Home Page</h1>
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}