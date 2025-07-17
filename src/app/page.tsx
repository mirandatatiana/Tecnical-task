"use client";

import React, { useState } from "react";
import resources from "./resource.json";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FlagIcon from "@mui/icons-material/Flag";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSavedMap, setIsSavedMap] = useState({});
  const [savedId, setSavedId] = useState<number>(-1);

  const [factCheckedId, setFactCheckedId] = useState<number>(-1);

  const typesOrder = ["Book", "Paper", "Article"];
  const firstItem = resources[0];
  const grouped = typesOrder.flatMap((type) =>
    resources.filter((item) => item.type === type)
  );
  const toggleMobileNav = () => setMobileOpen((prev) => !prev);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl ps-50 font-bold font-inter text-black">
          Brand Name
        </h1>
        <button className="xl:hidden" onClick={toggleMobileNav}>
          {mobileOpen ? (
            <CloseIcon className="w-6 h-6 text-black" />
          ) : (
            <MenuIcon className="w-6 h-6 text-black" />
          )}
        </button>
      </header>

      {mobileOpen && (
        <nav className="fixed inset-0 bg-white z-50 flex flex-col items-center pt-20 space-y-6">
          <button className="absolute top-4 right-4" onClick={toggleMobileNav}>
            <CloseIcon className="w-6 h-6 text-black" />
          </button>
          <button className="flex items-center gap-2.5 px-6 py-2 rounded-2xl bg-blue-500/75 hover:bg-blue-600/75 text-black">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-2 text-lg font-normal">Book</span>
          </button>
          <button className="flex items-center gap-2.5 px-6 py-2 rounded-2xl bg-violet-500/75 hover:bg-violet-600/75 text-black">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-2 text-lg font-normal">Paper</span>
          </button>{" "}
          <button className="flex items-center gap-2.5 px-6 py-2 rounded-2xl bg-red-500/75 hover:bg-red-600/75 text-black">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-2 text-lg font-normal">Article</span>
          </button>
        </nav>
      )}

      <div className="w-full bg-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center bg-slate-200 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Urban migration trends and sustainability"
              className="flex-grow bg-transparent outline-none text-lg text-zinc-700 placeholder-zinc-500"
            />
            <button className="ml-4 w-8 h-8 bg-stone-300 rounded-full flex items-center justify-center">
              <SearchIcon className="text-zinc-700" />
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid gap-8">
          {grouped.map((item) => (
            <section key={item.id} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold font-inter text-black">
                {item.title}
              </h2>
              <div className="flex flex-wrap items-center gap-8">
                <span
                  className={`px-6 py-2 rounded-md ${
                    item.type === "Book"
                      ? "bg-blue-500/75"
                      : item.type === "Paper"
                      ? "bg-violet-500/75"
                      : "bg-red-500/75"
                  } text-black text-lg font-medium`}
                >
                  {item.type}
                </span>
                <span className="text-neutral-500 text-lg">{item.year}</span>
                <span className="text-neutral-500 text-lg">{item.author}</span>
                <span className="text-neutral-500 text-lg">{item.source}</span>
              </div>
              <p className="text-lg text-black font-normal font-inter">
                {item.preview} {""}
                <button
                  onClick={openModal}
                  className="text-slate-500 font-semibold underline"
                >
                  Preview
                </button>
              </p>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setSavedId(item.id)}
                  className="flex items-center gap-2.5 px-4 py-1.5 rounded-2xl outline outline-2 outline-offset-[-2px] outline-slate-400/60"
                >
                  {savedId === item.id ? (
                    <BookmarkIcon className="w-6 h-6 text-black" />
                  ) : (
                    <BookmarkBorderIcon className="w-6 h-6 text-black" />
                  )}
                  <span className="text-black text-lg font-semibold">
                    {savedId === item.id ? "Saved" : "Save"}
                  </span>
                </button>
                <button
                  onClick={() => setFactCheckedId(item.id)}
                  className="flex items-center gap-2.5 px-4 py-1.5 rounded-2xl outline outline-2 outline-offset-[-2px] outline-slate-400/60"
                >
                  <FlagIcon className="w-5 h-5 text-black" />
                  <span className="text-black text-lg font-semibold">
                    {factCheckedId === item.id
                      ? item.credibility
                      : "Fact Check"}
                  </span>
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 bg-blend-overlay bg-opacity-50 border-b-gray-700  flex items-center justify-center z-50">
          <div className="w-[90%] max-w-3xl bg-white border-4 rounded-[30px] p-6 md:p-10 relative flex flex-col gap-6">
            <button className="absolute top-1 right-2" onClick={closeModal}>
              <CloseIcon className="w-5 h-5 text-black" />
            </button>
            <span className="px-1  py-2 rounded-md bg-red-500/75 text-black text-lg font-medium">
              {firstItem.type}
            </span>
            <h3 className="text-xl md:text-2xl font-inter font-bold text-black">
              {firstItem.title}
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-8 text-neutral-500">
              <span>{firstItem.author}</span>
              <span>{firstItem.year}</span>
              <span>{firstItem.source}</span>
              <span>{firstItem.sourceType}</span>
            </div>
            <div className="text-lg text-black font-inter">
              {firstItem.preview}{" "}
              <span className="text-slate-500 font-semibold underline">
                More
              </span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setSavedId(firstItem.id)}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-2xl outline outline-2 outline-offset-[-2px] outline-slate-400/60"
              >
                {savedId === firstItem.id ? (
                  <BookmarkIcon className="w-6 h-6 text-black" />
                ) : (
                  <BookmarkBorderIcon className="w-6 h-6 text-black" />
                )}
                <span className="text-black text-lg font-semibold">
                  {savedId === firstItem.id ? "Saved" : "Save"}
                </span>
              </button>
              <button
                onClick={() => setFactCheckedId(firstItem.id)}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-2xl outline outline-2 outline-offset-[-2px] outline-slate-400/60"
              >
                <FlagIcon className="w-5 h-5 text-black" />
                <span className="text-black text-lg font-semibold">
                  {factCheckedId === firstItem.id
                    ? firstItem.credibility
                    : "Fact Check"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      <aside className="hidden absolute xl:block w-52 h-full py-8 px-3 bg-white border-r-2 border-slate-400">
        <div className="flex flex-col items-center gap-8">
          <button className="flex items-center gap-2.5 px-6 py-2 rounded-2xl bg-blue-500/75 hover:bg-blue-600/75 text-black">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-2 text-lg font-normal">Book</span>
          </button>
          <button className="flex items-center gap-2.5 px-6 py-2 rounded-2xl bg-violet-500/75 hover:bg-violet-600/75 text-black">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-2 text-lg font-normal">Paper</span>
          </button>{" "}
          <button className="flex items-center gap-2.5 px-6 py-2 rounded-2xl bg-red-500/75 hover:bg-red-600/75 text-black">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-2 text-lg font-normal">Article</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
