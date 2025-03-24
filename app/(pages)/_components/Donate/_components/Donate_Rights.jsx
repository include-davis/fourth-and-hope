"use client";
import { useState } from "react";

import styles from "./Donate_Rights.module.scss";
import Image from "next/image";

// Note: bor denotes Bill of Rights

export default function Donation_Rights() {
  const [showOverlay, setShowOverlay] = useState(false);

  const openOverlay = () => setShowOverlay(true);
  const closeOverlay = () => setShowOverlay(false);

  return (
    <div className={styles.donation_rights_hero}>
      <Image
        src="/images/Donate/AFP.svg"
        alt="Staff"
        width={0}
        height={0}
        style={{ width: "50%", height: "auto" }}
      />

      <div className={styles.bor}>
        <p>
          Fourth & Hope is a 501(c)3 non-profit charitable organization. Tax ID
          #68-0059409.
        </p>

        <button onClick={openOverlay} className={styles.bor_button}>
          Donor Bill of Rights
        </button>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button onClick={closeOverlay} className={styles.closeButton}>
              Close X
            </button>

            <h3 className={styles.overlay_heading}>THE DONOR BILL OF RIGHTS</h3>
            <div className={styles.text_content}>
              <p className={styles.content_header}>
                Philanthropy is based on voluntary action for the common good.
                It is a tradition of giving and sharing that is primary to the
                quality of life. To assure that philanthropy merits the respect
                and trust of the general public, and that donors and prospective
                donors can have full confidence in the not-for-profit
                organizations and causes they are asked to support, we declare
                that all donors have these rights:
              </p>

              <p>
                I. To be informed of the organization’s mission, of the way the
                organization intends to use donated resources, and of its
                capacity to use donations effectively for their intended
                purposes.
              </p>

              <p>
                II. To be informed of the identity of those serving on the
                organization’s governing board, and to expect the board to
                exercise prudent judgment in its stewardship responsibilities.
              </p>

              <p>
                III. To have access to the organization’s most recent financial
                statements.
              </p>

              <p>
                IV. To be assured their gifts will be used for the purposes for
                which they were given.
              </p>

              <p>V. To receive appropriate acknowledgment and recognition.</p>

              <p>
                VI. To be assured that information about their donation is
                handled with respect and with confidentiality to the extent
                provided by law.
              </p>

              <p>
                VII. To expect that all relationships with individuals
                representing organizations of interest to the donor will be
                professional in nature.
              </p>

              <p>
                VIII. To be informed whether those seeking donations are
                volunteers, employees of the organization or hired solicitors.
              </p>

              <p>
                IX. To have the opportunity for their names to be deleted from
                mailing lists that an organization may intend to share.
              </p>

              <p>
                X. To feel free to ask questions when making a donation and to
                receive prompt, truthful, and forthright answers.
              </p>

              <p>
                The Donor Bill of Rights was created by the Association of
                Fundraising Professionals (AFP), the Association for Healthcare
                Philanthropy (AHP), the Council for Advancement and Support of
                Education (CASE), and the Giving Institute: Leading Consultants
                to Non-Profits. It has been endorsed by numerous organizations.
              </p>

              <p>
                Association of Fundraising Professionals (AFP), all rights
                reserved. Reprinted with permission from the Association of
                Fundraising Professionals.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
