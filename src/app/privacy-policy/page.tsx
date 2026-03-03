import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy – Oxygean",
  description: "How Oxygean collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <InnerPageLayout title="Privacy Policy">
        <div className="prose prose-invert max-w-none space-y-4">
          <p>
            This Privacy Policy explains how Oxygean (“we”, “our”, “us”) handles
            information in connection with the Oxygean mobile application and
            website (together, the “Service”). By using the Service, you confirm
            that you have read and understood this Privacy Policy and that you
            consent to the practices it describes.
          </p>

          <h2>1. Introduction</h2>
          <p>
            OX is designed for you to capture and protect your digital
            footprint, with full privacy and control. Only if you consent can
            that data be traded in the OX marketplace. We understand the
            importance of safeguarding your personal information and we are
            committed to data privacy.
          </p>

          <h2>2. Data information</h2>
          <p>
            As part of providing the Service, Oxygean does not collect, store,
            sell, exchange or otherwise deal with the substantive data that sits
            in your decentralised data vault. That data remains on your device
            and under your control.
          </p>

          <h2>3. Consent</h2>
          <p>
            By using the Service, you give your consent (for example under
            Article 6(1) of the GDPR) for Oxygean to refer to limited personal
            information that is necessary to operate the Service (see “Usage of
            information” below).
          </p>

          <h2>4. Usage of information</h2>
          <p>
            To operate the Service, Oxygean may refer to a small set of
            “operational information”, which can include:
          </p>
          <ul>
            <li>location details</li>
            <li>email address and email verification</li>
            <li>encrypted password, username, profile picture</li>
            <li>IP address</li>
            <li>push notification tokens</li>
          </ul>
          <p>
            This information is used only to provide and support the Service and
            is not sold or shared with third parties for their own purposes. It
            is used internally by Oxygean to maintain your account, match you
            with relevant opportunities, and operate the platform.
          </p>

          <h2>5. Data management</h2>
          <p>
            The personal data that powers the core of the Service sits on your
            own device (for example, phone or tablet). You control what you
            choose to share through the app and marketplace.
          </p>

          <h2>6. Minimum age requirement</h2>
          <p>
            The Service is intended for users aged 13 years or older. Please do
            not use the Service or provide us with any personal information if
            you are under 13 years of age.
          </p>

          <h2>7. Data security</h2>
          <p>
            We take reasonable industry-standard steps to keep operational
            information secure and to prevent unauthorised access or unlawful
            use. No system is completely secure, however, and we cannot
            completely guarantee the security of information transmitted over
            the internet.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Our website may use cookies to personalise your online experience,
            analyse traffic and measure the effectiveness of our content.
            Cookies are small text files stored on your device by your browser.
            You can usually control cookies through your browser settings. If
            you choose to disable cookies, some features of the Service may not
            function properly.
          </p>

          <h2>9. Third‑party services</h2>
          <p>
            Some features of the Service rely on services provided by third
            parties (for example, app stores or analytics providers). Your use
            of those services may be subject to additional terms and privacy
            policies issued by the relevant third party. Oxygean is not
            responsible for how those third parties handle your data.
          </p>

          <h2>10. Third‑party links and sites</h2>
          <p>
            The app or website may contain links to third‑party websites or
            apps. We are not responsible for the privacy practices of those
            third‑party sites or for any content they display. We encourage you
            to read the privacy policies of any third‑party site you visit.
          </p>

          <h2>11. How long we keep information</h2>
          <p>
            We keep operational information only for as long as is necessary to
            provide the Service or until you end your relationship with us and
            request deletion of your data, whichever comes first. When you
            request erasure, we will delete the operational information we hold
            about you, subject to any legal obligations we may have to retain
            certain records.
          </p>

          <h2>12. Your rights and choices</h2>
          <p>
            Depending on your location and applicable law, you may have rights
            to access, correct, delete or restrict the use of your personal
            data, and to withdraw your consent. To exercise these rights, or if
            you have questions about this Privacy Policy, you can contact us at{" "}
            <a href="mailto:support@oxygean.com">support@oxygean.com</a>.
          </p>

          <h2>13. Complaints</h2>
          <p>
            If you have concerns about how we handle your data, please contact
            us first so we can try to resolve the issue. You also have the right
            to lodge a complaint with your local data protection authority. In
            Ireland, this is the Data Protection Commission.
          </p>

          <h2>14. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will revise the “Last updated” date at the top of the policy and may
            notify you through the app or website. Your continued use of the
            Service after an update means you accept the revised Policy.
          </p>
        </div>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}
