"use client";

import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("aciklama");

  return (
    <div className="mt-[20%] ml-[25%] w-[50%] h-[50%]">
      <h2 className="font-bold text-center tracking-wide text-3xl mb-5">
        Tabs Components
      </h2>
      <div className="flex border-b  ">
        <button
          className={`p-2 ${
            activeTab === "aciklama"
              ? "border-b border-neutral-500 hover:border-white"
              : ""
          }`}
          onClick={() => setActiveTab("aciklama")}
        >
          Açıklama
        </button>
        <button
          className={`p-2 ${
            activeTab === "urun"
              ? "border-b-2 border-neutral-500 hover:border-white"
              : ""
          }`}
          onClick={() => setActiveTab("urun")}
        >
          Ürün Özellikleri
        </button>
        <button
          className={`p-2 ${
            activeTab === "iade"
              ? "border-b-2 border-neutral-500 hover:border-white"
              : ""
          }`}
          onClick={() => setActiveTab("iade")}
        >
          Değişim ve İade
        </button>
        <button
          className={`p-2 ${
            activeTab === "yorum" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("yorum")}
        >
          Yorumlar
        </button>
      </div>

      <div className="p-4">
        {activeTab === "aciklama" && (
          <p>Sitrin Taşı Özellikleri: Refah ve zenginlik getirir...</p>
        )}
        {activeTab === "urun" && (
          <p>Ürün ile ilgili teknik detaylar burada yer alır.</p>
        )}
        {activeTab === "iade" && (
          <p>Değişim ve iade koşulları burada belirtilir.</p>
        )}
        {activeTab === "yorum" && <p>Müşteri yorumları burada gösterilir.</p>}
      </div>
    </div>
  );
};

export default Tabs;
