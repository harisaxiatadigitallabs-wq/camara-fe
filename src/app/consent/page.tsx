"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";

const APP_NAME = "XLSmart App";

const t = {
  id: {
    title: "Izinkan Akses",
    description: (app: string) =>
      `Aplikasi ini meminta informasi pribadi Anda `,
    descriptionBold: (app: string) => app,
    descriptionSuffix:
      ` kepada XLSMART Telecom Sejahtera ("XLSMART"). Dengan melanjutkan proses ini, Anda akan memberikan akses kepada XLSMART untuk membagikan informasi akun Anda.`,
    section1Title: "Fungsionalitas Inti",
    section1Items: [
      "OpenID: Memungkinkan aplikasi untuk memverifikasi identitas Anda dan mengotentikasi Anda dengan aman.",
      "Akses Profil: Memungkinkan aplikasi untuk mengakses informasi profil utama dan detail akun Anda.",
    ],
    section2Title: "Untuk Layanan Keamanan & Verifikasi",
    section2Items: [
      "Verifikasi Nomor: Mengkonfirmasi kepemilikan dan status pengenal akun Anda.",
    ],
    acknowledgeLabel: (link: string) =>
      `Saya telah membaca dan memahami implikasi privasi & saya menyetujui pemrosesan data pribadi saya sesuai dengan formulir persetujuan ini dan Kebijakan Privasi sebagaimana tercantum di `,
    acknowledgeLinkText: "XLSMART",
    rememberLabel: "Ingat keputusan saya",
    denyBtn: "Tolak",
    allowBtn: "Izinkan",
  },
  en: {
    title: "Authorize Access",
    description: (app: string) =>
      `This application is requesting your personal information `,
    descriptionBold: (app: string) => app,
    descriptionSuffix: ` to XLSMART Telecom Sejahtera ("XLSMART"). By continuing this process, you will grant access to XLSMART to share your account information. The following permissions are required for secure verification and communication.`,
    section1Title: "Core Functionality",
    section1Items: [
      "OpenID: Allows the application to verify your identity and authenticate you securely.",
      "Profile Access: Allows the application to access your basic profile information and account details.",
    ],
    section2Title: "For Security & Verification Services",
    section2Items: [
      "Number Verification: Confirm the ownership and status of your account identifier (phone).",
    ],
    acknowledgeLabel: (link: string) =>
      `I have read and understood the privacy implications & I consent to the processing of my personal data in accordance with this consent form and the Privacy Policy as stated at `,
    acknowledgeLinkText: "XLSMART",
    rememberLabel: "Remember my decision",
    denyBtn: "Deny",
    allowBtn: "Allow",
  },
};

export default function ConsentPage() {
  const router = useRouter();
  const { lang } = useLanguage();
  const copy = t[lang];

  const [acknowledged, setAcknowledged] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleAllow() {
    // TODO: call backend POST /api/v1/consent/submit
  }

  function handleDeny() {
    router.push("/");
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#dff9fb] to-white">
      {/* Top bar */}
      <div className="flex items-center px-4 py-4 border-b border-gray-100">
        <button
          onClick={() => router.push("/")}
          className="mr-3 text-primary text-xl leading-none"
          aria-label="Back"
        >
          ←
        </button>
        <h1 className="flex-1 text-center text-base font-semibold text-gray-900 pr-7">
          {copy.title}
        </h1>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm text-gray-700 leading-relaxed px-4 py-4">
        {copy.description(APP_NAME)}
        <span className="font-bold">[{APP_NAME}]</span>
        {copy.descriptionSuffix}
      </p>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto consent-scroll px-4 py-4 bg-white mx-4">

        {/* Section 1 */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            {copy.section1Title}
          </h2>
          <ul className="space-y-1.5 pl-4">
            {copy.section1Items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            {copy.section2Title}
          </h2>
          <ul className="space-y-1.5 pl-4">
            {copy.section2Items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fixed bottom area */}
      <div className="border-t border-gray-100 bg-white px-4 pt-3 pb-6">
        {/* Acknowledge checkbox */}
        <label className="mb-3 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary"
          />
          <span className="text-xs text-gray-700 leading-relaxed">
            {copy.acknowledgeLabel("")}
            <a href="#" className="font-semibold text-primary underline">
              {copy.acknowledgeLinkText}
            </a>
          </span>
        </label>

        {/* Remember checkbox */}
        <label className="mb-4 flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 shrink-0 cursor-pointer accent-primary"
          />
          <span className="text-xs text-gray-700">{copy.rememberLabel}</span>
        </label>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleDeny}
            className="flex-1 rounded-lg border border-primary py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-gray-50"
          >
            {copy.denyBtn}
          </button>
          <button
            onClick={handleAllow}
            disabled={!acknowledged}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold text-white transition-colors ${acknowledged
              ? "bg-primary hover:bg-primary-hover active:scale-[0.98]"
              : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            {copy.allowBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
