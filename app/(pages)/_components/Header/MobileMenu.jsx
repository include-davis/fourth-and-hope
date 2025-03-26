// "use client";
// import styles from "./Header.module.scss";
// import Link from "next/link";
// import { useState } from "react";
// import MobileMenu from "./MobileMenu"; // Make sure the path is correct.

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <div className={`headerContainer ${menuOpen ? styles.open : ""}`}>
//         <div className={styles.contentContainer}>
//           <div className={styles.logo}>
//             <Link href="/" passHref>
//               <img
//                 src="/images/headerlogo.svg"
//                 alt="Fourth Hope Logo"
//                 className={styles.logo}
//               />
//             </Link>
//           </div>
//           <div className={styles.buttonsContainer}>
//             <a href="/donate" className={[styles.button, styles.bold].join(" ")}>
//               Donate
//             </a>
//             <div className={styles.otherbuttons}>
//               <Link href="/" className={[styles.links, styles.bold].join(" ")}>
//                 Home
//               </Link>
//               <Link href="/about" className={styles.links}>
//                 About
//               </Link>
//               <Link href="/get-involved" className={styles.links}>
//                 Get Involved
//               </Link>
//               <Link href="/events" className={styles.links}>
//                 Events
//               </Link>
//               <Link href="/programs" className={styles.links}>
//                 Programs
//               </Link>
//               <Link href="/contact" className={styles.links}>
//                 Contact
//               </Link>
//             </div>
//           </div>
//           <button className={styles.menuButton} onClick={toggleMenu}>
//             <img src="/images/menu-rounded.svg" alt="Header Dropdown Button" />
//           </button>
//         </div>
//       </div>
//       {/* Instead of rendering an overlay here, we render the MobileMenu component when menuOpen is true */}
//       {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
//     </>
//   );
// }
