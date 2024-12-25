"use client";

import { useEffect, useState } from "react";

const WritePost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const openDialog = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDialog();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Main Post Box */}

      <div
        onClick={openDialog}
        className="flex items-center gap-4 w-full   p-4 "
      >
        <div className="w-10 h-10 rounded-full bg-brand-tertiary" />
        <div className="flex-1 flex justify-between items-center">
          <input
            placeholder="Share your bat"
            className="w-full bg-transparent text-text-light focus:outline-none cursor-pointer"
            readOnly
          />
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full bg-accent-green text-brand-primary ">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Custom Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={(e) => e.target === e.currentTarget && closeDialog()}
        >
          <div className="fixed inset-0 bg-black/70 animate-fadeIn" />
          <div className="relative z-50 w-full max-w-2xl bg-brand-secondary rounded-lg p-6 m-4 animate-scaleIn">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full bg-transparent text-text-light text-xl focus:outline-none border-b border-brand-tertiary pb-2 mb-4"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your own bat file"
              className="w-full bg-transparent text-text-light resize-none focus:outline-none min-h-[200px] mb-4"
            />

            <div className="flex  justify-end items-end">
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-accent-green hover:bg-accent-green-dark text-brand-primary rounded-md"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WritePost;
