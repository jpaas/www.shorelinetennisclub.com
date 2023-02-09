import Image from "next/image"

import civic_mark_registered from "@/assets/civic_mark_registered.png"
import tennisball_court from "@/assets/tennisball_court.jpg"
import { buttonVariants } from "@/components/ui/CpButton"
import { cn } from "@/lib/utils"
import Link from "next/link"
import styles from "./page.module.css"

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

      <div className="container mx-auto p-8">
        <section className="rounded-3xl bg-backgroundNoticesSection px-8 pb-8">
          <h1>Notices</h1>
          <p>
            The 2023 AGM was held January 14, 2023.{" "}
            <Link
              href="https://docs.google.com/document/d/1Ht_astsBuCgVH7MK0wwGKyXNYeCw14ZNJMrVtavLDJE/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              AGM Minutes 2023
            </Link>
          </p>
        </section>

        <section>
          <h1>Play Tennis, Overlooking Lake Ontario</h1>
          <p>
            Shoreline Tennis Club is your neighbourhood tennis club and is perched on a hill overlooking Lake Ontario
            in&nbsp;
            <Link href="http://www.jackdarling.com/map.php" rel="noreferrer" target="_blank">
              Jack Darling Park
            </Link>
            , in Mississauga, Ontario, Canada. We provide two <span className="font-bold">newly surfaced</span> hard
            courts for day and evening play. This is a great place for family and friends to play tennis. Our season
            runs from March 15 to November 30.
          </p>
          <Link
            className={cn([buttonVariants({ size: "xl" }), "mt-4"])}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfjsdIQVx1xS_ylCRsVurmFZKKNn072z7yDeb89ytKUNzmqaA/viewform"
            rel="noreferrer"
            target="_blank"
          >
            Register Now
          </Link>
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
        </section>

        <section id="book_court">
          <h2>Club Rules</h2>
          <ul>
            <li>
              <Link
                href="https://docs.google.com/document/d/1J_QCfNpp-GHO4ZTXmgjmwUq_iyJhCfrADcFyGu3TrkA/edit?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link href="/rules_of_play">Rules of Play</Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/document/d/1b_OR4cd9V5VyaUyof9Gu5n6m05vXllUOp750yKEMQ3Q/edit"
                rel="noreferrer"
                target="_blank"
              >
                Club Constitution
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h1>Court Booking and Programs</h1>
          <Link
            className={cn([buttonVariants({ size: "xl" })])}
            href="https://docs.google.com/document/d/1Nt7QdusrRk70MwnlE0nRqEAkf77qefWSOOB8fIwCDh4/edit#heading=h.yi64noxjqbty"
          >
            Book a Court
          </Link>
          <h3>Notes</h3>
          <ul className="list-inside list-disc">
            <li>Courts 1 and 2 will be blocked off on Mondays from 7 to 9 pm for a 3+ player Round Robin</li>
            <li>One court might be used for Little Aces tennis from 4:30 to 6:30 pm on weekdays</li>
          </ul>
          <h2>Interested in Tennis Lessons?</h2>
          <p>
            Please fill in&nbsp;
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdTgv4SQcwBjkTA_9B3UGNWFi6vQcjF0blY0r-MNLAErX1wwg/viewform?usp=sf_link">
              this form
            </Link>
            &nbsp;if you are looking for lesson opportunities, our club pro will contact you promptly.
          </p>
          <h2>Other questions?</h2>
          <p>
            Email: <Link href="mailto:info@shorelinetennisclub.com">info@shorelinetennisclub.com</Link>
          </p>
        </section>

        <Image
          alt="Mississauga registered community group civic mark"
          className="mx-auto mt-4 md:mt-0"
          height={100}
          src={civic_mark_registered}
        />
      </div>
    </main>
  )
}
