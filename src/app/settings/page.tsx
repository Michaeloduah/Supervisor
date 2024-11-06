import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SettingBoxes from "@/components/SettingBoxes";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Contractor Dashboard",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        {/* <Breadcrumb pageName="Settings" /> */}

        <SettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
