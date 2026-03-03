import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions – Oxygean",
  description: "Terms and conditions for using Oxygean services.",
};

export default function TermsPage() {
  return (
    <>
      <InnerPageLayout title="Terms & Conditions">
        <div className="prose prose-invert max-w-none space-y-4">
          <p>
            In these Terms, we refer to our Site{" "}
            <strong>www.oxygean.com</strong> and the Oxygean mobile app
            (available on the Apple App Store and Google Play) collectively as
            the <strong>“Service”</strong>. The Service is owned and operated by{" "}
            <strong>Ellorem Ireland T/a Oxygean</strong>, a company incorporated
            in Ireland (registration number 3622015LH) whose registered office
            is at 13 Adelaide Road, Dublin, Ireland{" "}
            (<strong>“OXygean”</strong>, <strong>“we”</strong>,{" "}
            <strong>“our”</strong>, and <strong>“us”</strong>), and used by you
            (<strong>“You”</strong> or <strong>“Your”</strong>).
          </p>
          <p>
            Please read these Terms carefully before you start to use the
            Service, as they set out the legal agreement between OXygean and you
            for your use of the Service. By downloading, installing, using or
            accessing the Service, you confirm that you accept these Terms and
            that you agree to comply with them. If you do not agree to these
            Terms, you must not use the Service.
          </p>

          <h2>1. Your privacy</h2>
          <p>
            You are the only person who has access to your personal data. Your
            data is collected through your decentralised data vault and is
            stored exclusively on your mobile phone. If you engage in mining
            actions, referrals and the 1-minute marketplace to earn, you have
            full consent and control of the data you share (or choose not to
            share). This data will then be made visible to the buyer as outlined
            in the relevant smart contract.
          </p>
          <p>
            Please be aware that internet transmissions are never completely
            private or secure and that any message or information you send using
            the Service may be read or intercepted by others, even if there is a
            special notice that a particular transmission is encrypted.
          </p>

          <h2>2. Additional terms for specific services</h2>
          <p>
            Certain services made available through the Service are also subject
            to the terms, conditions and privacy policies of third-party
            platforms, including (without limitation) the Apple App Store and
            Google Play Store. You should review those third-party terms before
            using those parts of the Service.
          </p>

          <h2>3. Your right to use the Service</h2>
          <p>
            OXygean grants you a personal, non-transferable licence to:
          </p>
          <ul>
            <li>
              download, install and use the App, and any updates to it provided
              by OXygean from time to time, for your personal use only on a
              compatible mobile device owned or controlled by you; and
            </li>
            <li>
              access and browse the Site for your personal use only (together,
              the <strong>“Licences”</strong>).
            </li>
          </ul>
          <p>
            The Licences are for your personal and domestic use only. You must
            not use the Service for resale or any commercial purpose unless we
            have agreed to this in writing.
          </p>

          <h2>4. Termination of your right to use the Service</h2>
          <p>
            We may end the Licences at any time and for any reason (or no
            reason) by giving you at least fourteen (14) days’ notice. We may
            also end the Licences immediately if you break any provision of
            these Terms (for example, by closing your Oxygean Account in breach
            of these Terms). Where the Licences are terminated, you must
            immediately cease using and accessing the Service and delete any
            copies of the App held by you.
          </p>

          <h2>5. OXygean Account</h2>
          <p>
            In order to use the App and earn OXITs, you must create an Oxygean
            Account. You are responsible for all uses of your account, whether
            by you or any third party. You should use your personal email
            address / mobile number for verification, and keep your password
            confidential and secure at all times.
          </p>
          <p>
            You must not select as your username a name that you do not have the
            right to use, or another person’s name with the intent to
            impersonate that person. You must not transfer your Oxygean Account
            to anyone else without our prior written permission.
          </p>
          <p>
            Your Oxygean Account logs details of all OXITs generated by you and
            any transfers of OXITs to or from your account. You should review
            your account regularly and tell us as soon as possible if you
            believe there is an error, unexpected activity, or your account
            security has been compromised.
          </p>

          <h2>6. Earning OXITs</h2>
          <p>
            “OXITs” are units of exchange that users of the App may generate
            through verified mining actions, referrals, rewards or 1-minute
            actions. OXITs may be used to get certain benefits that are offered
            via the App. OXITs cannot be redeemed for cash from OXYGEAN or any
            of its affiliates, unless we expressly agree otherwise in writing.
            OXITs can be redeemed for OXME crypto tokens (with a redemption
            value that may be set from time to time).
          </p>
          <p>
            We may destroy or adjust OXIT balances where we reasonably believe
            that OXITs have not been generated through genuine activity or have
            been obtained through fraud. We may also cap the maximum amount of
            OXITs that a user may generate each day and may change that cap from
            time to time.
          </p>

          <h2>7. Sale of assets</h2>
          <p>
            OXITs and OXME tokens are digital assets. If you choose to purchase
            or sell OXITs, OXMEs or other digital assets, any transactions you
            enter into will generally be conducted via decentralised blockchain
            networks (such as the Avalanche network) and third-party wallets or
            exchanges. OXygean does not control those networks or third-party
            services and is not responsible for any transactions you carry out
            using them.
          </p>

          <h2>8. Representations &amp; risks</h2>
          <p>
            By using the Service you acknowledge that cryptographic systems and
            blockchain technologies carry inherent risks. These can include
            volatility, regulatory risk, software or hardware failures, and the
            risk of bugs or vulnerabilities. You accept those risks and agree
            that OXygean is not responsible for losses arising from them.
          </p>

          <h2>9. Transactions and fees</h2>
          <p>
            Blockchain networks typically require payment of transaction fees
            (sometimes referred to as “gas fees”) for every transaction. Those
            fees fund the network of computers that run the blockchain. You are
            responsible for paying any such fees and any taxes or duties that
            may arise in connection with your use of the Service.
          </p>

          <h2>10. Intellectual property rights</h2>
          <p>
            All intellectual property rights in the Service (including in the
            App and the Site) throughout the world belong to us or our
            licensors. The Service is licensed, not sold, to you. You have no
            intellectual property rights in, or to, the Service other than the
            right to use it in accordance with these Terms.
          </p>

          <h2>11. User content</h2>
          <p>
            You are solely responsible for any data, text, images, graphics or
            other content (“User Content”) that you submit, post or display on
            or via the Service. You agree that User Content must comply with all
            applicable laws and must not be unlawful, defamatory, discriminatory
            or otherwise harmful. We do not claim ownership of User Content but
            may remove or moderate it where appropriate.
          </p>

          <h2>12. Acceptable use</h2>
          <p>
            You agree not to misuse the Service. In particular, you must not:
          </p>
          <ul>
            <li>attempt to generate OXITs through fraudulent or artificial means;</li>
            <li>copy, reverse engineer or otherwise tamper with the App or Site;</li>
            <li>operate more than one Oxygean Account;</li>
            <li>
              use the Service in any unlawful way or in a manner that could
              damage, disable, overburden or impair our systems or security; or
            </li>
            <li>
              use the Service to transmit any harmful, offensive or infringing
              content.
            </li>
          </ul>
          <p>
            If we discover a breach of this section, we may suspend or terminate
            your access to the Service.
          </p>

          <h2>13. Changes and updates to the Service</h2>
          <p>
            We may change, update or discontinue any part of the Service at any
            time. We may also issue updates to the App. Depending on the nature
            of an update, you may not be able to continue using the App until
            you have installed the latest version.
          </p>

          <h2>14. Availability of the Service</h2>
          <p>
            The Service is provided “as is” and “as available”. We do not
            guarantee that the Service, or any part of it, will always be
            available or be uninterrupted, and we will not be liable if it is
            unavailable at any time for any reason.
          </p>

          <h2>15. Changes to these Terms</h2>
          <p>
            We may change these Terms from time to time. Any changes will be
            posted on the Site and/or in the App. If you continue to use the
            Service after changes have been made, you will be deemed to have
            accepted the updated Terms.
          </p>

          <h2>16. Our liability to you</h2>
          <p>
            To the fullest extent permitted by law, our liability to you in
            connection with the Service is limited. Among other things, we are
            not liable for indirect, incidental, special or consequential loss,
            loss of profits, loss of data, or loss of goodwill arising out of
            your use of or reliance on the Service.
          </p>

          <h2>17. Governing law</h2>
          <p>
            These Terms and any dispute or claim arising out of or in
            connection with them (including non-contractual disputes or claims)
            are governed by Irish law. You can bring legal proceedings in
            respect of the Service in the Irish courts.
          </p>
        </div>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}
