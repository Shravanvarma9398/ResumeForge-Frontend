import { useEffect, useState } from "react";
import API from "../services/api";
import PageLayout from "../components/PageLayout";
import ReactMarkdown from "react-markdown";

function History() {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get(
        "/analysis/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnalyses(res.data.analyses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-3 md:px-0">

        <div className="mb-8 md:mb-10">

          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Resume Analysis History
          </h1>

          <p className="text-gray-500 mt-2">
            View all previously generated AI resume reports.
          </p>

        </div>

        {analyses.length === 0 ? (

          <div className="
            bg-white
            rounded-3xl
            shadow-lg
            p-4 md:p-8
            text-center
          ">
            No analysis reports found.
          </div>

        ) : (

          analyses.map((item, index) => (

            <div
              key={item._id}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                p-4 md:p-8
                mb-8
                overflow-hidden
              "
            >

              <div className="
                flex
                flex-col
                md:flex-row
                md:justify-between
                md:items-center
                gap-3
                mb-5
                border-b
                pb-4
              ">

                <div>

                  <h2 className="
                    text-lg md:text-xl
                    font-semibold
                    text-purple-700
                  ">
                    Resume Analysis Report
                  </h2>

                  <p className="text-sm text-gray-500">
                    Report #{index + 1}
                  </p>

                </div>

                <div className="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    }
                  )}
                </div>

              </div>

              <div className="
                text-gray-700
                leading-8
                break-words
                overflow-x-auto
              ">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4 break-words">
                        {children}
                      </h1>
                    ),

                    h2: ({ children }) => (
                      <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mt-6 mb-3 break-words">
                        {children}
                      </h2>
                    ),

                    p: ({ children }) => (
                      <p className="text-gray-700 leading-8 mb-4 break-words">
                        {children}
                      </p>
                    ),

                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 mb-5">
                        {children}
                      </ul>
                    ),

                    li: ({ children }) => (
                      <li className="text-gray-700 mb-2 break-words">
                        {children}
                      </li>
                    ),

                    strong: ({ children }) => (
                      <strong className="font-semibold text-gray-900">
                        {children}
                      </strong>
                    ),
                  }}
                >
                  {item.analysis}
                </ReactMarkdown>
              </div>

            </div>

          ))

        )}

      </div>
    </PageLayout>
  );
}

export default History;
