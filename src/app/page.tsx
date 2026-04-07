"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/useLanguage";

const t = {
  id: {
    title: "Selamat Datang!",
    subtitle: "Silahkan login terlebih dahulu untuk melanjutkan",
    loginBtn: "Login dengan Nomor Seluler",
    back: "Kembali",
    processingInfo: "Informasi Pengendali Data",
    controller: "Pengendali Data: PT. XLSmart Telecom Sejahtera",
    contact: "Kontak:",
    contactEmail: "dataprotection@xlsmart.co.id",
    lastUpdated: "Terakhir Diperbarui: 28 Oktober 2025",
  },
  en: {
    title: "Welcome!",
    subtitle: "Please log in first to continue.",
    loginBtn: "Log in with Mobile Number",
    back: "Back",
    processingInfo: "Processing Information",
    controller: "Data Controller: PT. XLSmart Telecom Sejahtera",
    contact: "Contact:",
    contactEmail: "dataprotection@xlsmart.co.id",
    lastUpdated: "Last Updated: 28 October 2025",
  },
};

export default function HomePage() {
  const router = useRouter();
  const { lang, setLang } = useLanguage();
  const copy = t[lang];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#dff9fb] to-white px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="rounded-2xl bg-transparent p-6">
          {/* Language toggle */}

          {         /* Title */}
          <h1 className="mb-2 text-center text-xl font-bold text-gray-900">
            {copy.title}
          </h1>
          <p className="mb-6 text-center text-sm text-gray-500">
            {copy.subtitle}
          </p>

          <div className="mb-6 flex justify-center gap-2">
            <button
              onClick={() => setLang("id")}
              className={`rounded-md px-5 py-1.5 text-sm font-semibold transition-colors ${lang === "id"
                ? "bg-accent text-white"
                : "border border-gray-300 bg-white text-gray-700"
                }`}
            >
              Indonesian
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-md px-5 py-1.5 text-sm font-semibold transition-colors ${lang === "en"
                ? "bg-accent text-white"
                : "border border-gray-300 bg-white text-gray-700"
                }`}
            >
              English
            </button>
          </div>

          {/* Login button */}
          <button
            onClick={() => router.push("/consent")}
            className="mb-3 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover active:scale-[0.98]"
          >
            {copy.loginBtn}
          </button>

          {/* Back link */}
          <div className="mb-6 text-center">
            <button className="text-sm font-medium text-gray-700 hover:underline">
              {copy.back}
            </button>
          </div>

          {/* Divider */}
          <div className="mb-4 border-t border-gray-200" />

          {/* Data controller info */}
          <p className="mb-1 text-xs font-semibold text-gray-700">
            {copy.processingInfo}
          </p>
          <p className="text-xs text-gray-500">{copy.controller}</p>
          <p className="text-xs text-gray-500">
            {copy.contact}{" "}
            <a
              href={`mailto:${copy.contactEmail}`}
              className="text-primary underline"
            >
              {copy.contactEmail}
            </a>
          </p>
          <p className="text-xs text-gray-500">{copy.lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}
