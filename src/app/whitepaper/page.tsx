import { redirect } from "next/navigation";

const WHITEPAPER_PDF_URL =
  "https://s3.eu-west-1.amazonaws.com/oxygean.release.static-media/oxme-whitepaper.pdf";

export default function WhitepaperPage() {
  redirect(WHITEPAPER_PDF_URL);
}
