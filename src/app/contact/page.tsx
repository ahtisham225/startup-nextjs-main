import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | R789 Game Download in Pakistan",
  description: "If you have questions about installation, withdrawals, or login issues. We're here to help",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="If you have questions about installation, withdrawals, or login issues. We're here to help"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
