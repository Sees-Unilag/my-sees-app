import { useParams, useNavigate } from "react-router-dom";
import styles from "./Level.module.css";
import { Course, Loader } from "../../components";
import { semesters, allYears } from "../../mock-data";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../api";

export const Level = () => {
  const navigate = useNavigate();
  const [semester, setSemester] = React.useState<string>("first");
  const params = useParams();
  const selectedYear = params.year;
  const { isLoading, data, error, refetch } = useQuery(
    [
      "courses",
      {
        semester: semester,
        year: selectedYear,
      },
    ],
    getAllCourses,
    {
      retry: 0,
    }
  );

  if (error) console.error(error);

  if (data) console.log("[data]", data);

  const courses = data ? data.data : [];

  const getYearName = (yearValue: string) => {
    const filtredYear = allYears.filter(({ name, value }) => {
      return yearValue == value;
    });

    return filtredYear[0].name;
  };

  return (
    <>
      {isLoading && <Loader />}

      <section className="d-flex flex-column flex-lg-row">
        <section className={`${styles.sidepan}`}>
          <div className={styles.yearContainer}>
            <div
              className={styles.iconHolder}
              onClick={() => window.history.back()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g opacity="0.6">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.25 5.99999C11.25 6.09944 11.2105 6.19482 11.1402 6.26515C11.0698 6.33548 10.9745 6.37499 10.875 6.37499L2.03025 6.37499L4.3905 8.73449C4.46091 8.8049 4.50047 8.9004 4.50047 8.99999C4.50047 9.09957 4.46091 9.19507 4.3905 9.26549C4.32008 9.3359 4.22458 9.37546 4.125 9.37546C4.02542 9.37546 3.92991 9.3359 3.8595 9.26549L0.859499 6.26549C0.824576 6.23065 0.79687 6.18927 0.777965 6.14371C0.75906 6.09815 0.749329 6.04931 0.749329 5.99999C0.749329 5.95066 0.75906 5.90182 0.777965 5.85626C0.79687 5.8107 0.824576 5.76932 0.859499 5.73449L3.8595 2.73449C3.92991 2.66407 4.02542 2.62451 4.125 2.62451C4.22458 2.62451 4.32008 2.66407 4.3905 2.73449C4.46091 2.8049 4.50047 2.9004 4.50047 2.99999C4.50047 3.09957 4.46091 3.19507 4.3905 3.26549L2.03025 5.62499L10.875 5.62499C10.9745 5.62499 11.0698 5.66449 11.1402 5.73482C11.2105 5.80515 11.25 5.90053 11.25 5.99999Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
            <h6 className={styles.selectedYear}>
              {getYearName(selectedYear as string)}
            </h6>
          </div>

          <ul className={styles.semesterList}>
            {semesters.map(({ name, value }, index: number) => (
              <li
                className={value === semester ? styles.active : ""}
                onClick={() => {
                  setSemester(value);
                  refetch();
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <div
            className={`d-flex justify-content-between align-items-center  ${styles.levelHeader}`}
          >
            <h3>List of Courses</h3>
            <h3>Units</h3>
          </div>
          <div>
            {courses.map((course: any, index: number) => (
              <Course {...course} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
