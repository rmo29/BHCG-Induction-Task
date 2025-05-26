import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const data = {
  "Week 1": [
    {
      title: "C++ Basics - Introduction & Setup",
      type: "video",
      url: "https://www.youtube.com/embed/vLnPwxZdW4Y",
    },
    {
      title: "C++ Programming Language",
      type: "article",
      url: "https://www.geeksforgeeks.org/c-plus-plus/",
    },
  ],
  "Week 2": [
    {
      title: "C++ Variables, Data Types & Operators",
      type: "video",
      url: "https://www.youtube.com/embed/vLnPwxZdW4Y",
    },
    {
      title: "Data Types in C++",
      type: "article",
      url: "https://www.geeksforgeeks.org/data-types-in-c/",
    },
  ],
  "Week 3": [
    {
      title: "Control Structures: if, else, loops in C++",
      type: "video",
      url: "https://www.youtube.com/embed/vLnPwxZdW4Y",
    },
    {
      title: "Control Statements in C++",
      type: "article",
      url: "https://www.geeksforgeeks.org/decision-making-c-cpp/",
    },
  ],
  "Week 4": [
    {
      title: "Functions in C++",
      type: "video",
      url: "https://www.youtube.com/embed/vLnPwxZdW4Y",
    },
    {
      title: "Functions in C++",
      type: "article",
      url: "https://www.geeksforgeeks.org/functions-in-cpp/",
    },
  ],
  "Week 5": [
    {
      title: "Introduction to Data Structures in C++",
      type: "video",
      url: "https://www.youtube.com/embed/bum_19loj9A",
    },
    {
      title: "Arrays in C++",
      type: "article",
      url: "https://www.geeksforgeeks.org/arrays-in-c-cpp/",
    },
  ],
  "Week 6": [
    {
      title: "Linked Lists Explained",
      type: "video",
      url: "https://www.youtube.com/embed/bum_19loj9A",
    },
    {
      title: "Linked List – Introduction",
      type: "article",
      url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
    },
  ],
  "Week 7": [
    {
      title: "Sorting Algorithms Overview",
      type: "video",
      url: "https://www.youtube.com/embed/ZZuD6iUe3Pc",
    },
    {
      title: "Sorting Algorithms",
      type: "article",
      url: "https://www.geeksforgeeks.org/sorting-algorithms/",
    },
  ],
};

export default function Modules() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleClick = (resource) => {
    if (resource.type === "video") {
      setVideoUrl(resource.url);
      setOpen(true);
    } else {
      window.open(resource.url, "_blank");
    }
  };

  return (
    <div className="dark min-h-screen bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100">
            Interactive Resource Viewer
          </h1>
        </header>

        {/* Weeks and resources */}
        {Object.entries(data).map(([week, resources]) => (
          <section key={week} className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">{week}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {resources.map((res, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClick(res)}
                  className="cursor-pointer rounded-lg bg-blue-900 p-5 shadow hover:shadow-lg hover:bg-blue-800 transition"
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleClick(res);
                  }}
                >
                  <h3 className="font-semibold text-gray-100">{res.title}</h3>
                  <p className="mt-1 text-sm text-blue-300 capitalize">
                    {res.type}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Video Modal */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className="fixed z-20 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 bg-black bg-opacity-70">
            <Dialog.Panel className="bg-gray-800 rounded-lg max-w-3xl w-full p-4 shadow-lg">
              <iframe
                width="100%"
                height="360"
                src={videoUrl}
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
                className="rounded-md"
              ></iframe>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
