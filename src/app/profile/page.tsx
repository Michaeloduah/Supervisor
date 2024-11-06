import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProfileBox from "@/components/ProfileBox";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Contractor Dashboard",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        {/* <Breadcrumb pageName="Profile" /> */}

        <ProfileBox />
      </div>
    </DefaultLayout>
  );
};

export default Profile;
