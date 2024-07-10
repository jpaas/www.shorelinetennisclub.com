import Image from "next/image"

import tennisball_court from "@/assets/tennisball_court.jpg"
import styles from "../page.module.css"

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

      <div className="container mx-auto px-8 py-4">
        <section>
          <h1>Rules of Play</h1>
          <p>
            Shoreline Tennis Club is a membership club. Each member is required to observe the following rules of play.
          </p>
          <ol className="list-inside list-disc py-8">
            <li>Non-marking shoes must be worn at all times.</li>
            <li>
              Members must not give out gate lock combination to non-members.&nbsp;
              <span className="font-bold italic">
                Violation of this will result in immediate termination of membership.
              </span>
            </li>
            <li>
              Please lock the gate when you leave and make sure that the people remaining on the courts are members.
            </li>
            <li>
              Guest is allowed 4 times during the season per membership type. Member must accompany guest on court.
            </li>
            <li>No dog is allowed inside the fence of the courts.</li>
            <li>Court booking for singles, doubles and general play is for 30 to 60 minutes.</li>
            <li>
              The courts at Shoreline Tennis Club are intended for community and recreational use. No coaching is
              allowed except for the club’s approved coach. Any persons found to be conducting unsanctioned private
              lessons or training will have their membership revoked.
            </li>
          </ol>
        </section>
      </div>
    </main>
  )
}
