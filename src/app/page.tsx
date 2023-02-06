// import { Inter } from "@next/font/google"
import Image from "next/image"

import tennisball_court from "@/assets/tennisball_court.jpg"
import styles from "./page.module.css"

// const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-surface">
      <section>
        <div className={styles.imageSection}>
          <Image
            alt="Tenis ball on a tennis court"
            className="w-full object-cover"
            fill={true}
            priority={true}
            src={tennisball_court}
          />
        </div>
      </section>

      <section className="px-8 py-4">
        <h1>Play Tennis, Overlooking Lake Ontario</h1>
        <p>
          Shoreline Tennis Club is your neighbourhood tennis club and is perched on a hill overlooking Lake Ontario in
          <a href="http://www.jackdarling.com/map.php" rel="noreferrer" target="_blank">
            Jack Darling Park
          </a>
          , in Mississauga, Ontario, Canada. We provide two hard surface courts for day and evening play. This is a
          great place for family and friends to play tennis. Our season runs from March 15 to November 30.
        </p>
        <h2>Membership Rate</h2>
        <table
          className={`${styles.membershipTable} table-auto border-collapse border-spacing-4 border border-slate-400`}
        >
          <tbody>
            <tr>
              <td className="border border-slate-300 bg-tableHeaderBackground text-lg font-bold">Family</td>
              <td className="border border-slate-300 opacity-90">
                Up to four members of the immediate family living at the same address
              </td>
              <td className=" border border-slate-300 text-right font-mono text-xl font-bold italic">$140</td>
            </tr>
            <tr>
              <td className="border border-slate-300 bg-tableHeaderBackground text-lg font-bold">Adult</td>
              <td className="border border-slate-300 opacity-90">Over 18 years of age</td>
              <td className="border border-slate-300 text-right font-mono text-xl font-bold italic">$80</td>
            </tr>
            <tr>
              <td className="border border-slate-300 bg-tableHeaderBackground text-lg font-bold">Junior</td>
              <td className="border border-slate-300 opacity-90">Under 18 years of age as of January 1, 2022</td>
              <td className="border border-slate-300 text-right font-mono text-xl font-bold italic">$40</td>
            </tr>
          </tbody>
        </table>
        <h2>Interested in Tennis Lessons?</h2>
        <p>
          Please fill in&nbsp;
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTgv4SQcwBjkTA_9B3UGNWFi6vQcjF0blY0r-MNLAErX1wwg/viewform?usp=sf_link">
            this form
          </a>
          &nbsp;if you are looking for lesson opportunities, our club pro will contact you promptly.
        </p>
        <p>
          Other questions? Email: <a href="mailto:info@shorelinetennisclub.com">info@shorelinetennisclub.com</a>
        </p>
        <h2>Open Houses</h2>
        <p>We offer the following Open Houses this season:</p>
        <ul className="serif p-4">
          <li>July 8, 12 to 3 pm</li>
          <li>July 22, 12 to 3 pm</li>
          <li>Aug 6, 1 to 4 pm</li>
          <li>Aug 13, 1 to 4 pm</li>
          <li>Aug 26, 12 to 3 pm</li>
        </ul>
        <p> Feel free to test out our courts during the above times.</p>

        <h2>Club Documents</h2>
        <ul>
          <li>
            <a
              href="https://docs.google.com/document/d/1b_OR4cd9V5VyaUyof9Gu5n6m05vXllUOp750yKEMQ3Q/edit"
              rel="noreferrer"
              target="_blank"
            >
              Constitution
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1J_QCfNpp-GHO4ZTXmgjmwUq_iyJhCfrADcFyGu3TrkA/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Code of Conduct
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1Ht_astsBuCgVH7MK0wwGKyXNYeCw14ZNJMrVtavLDJE/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              AGM Minutes 2023
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
