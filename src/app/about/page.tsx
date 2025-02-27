import styles from "../page.module.css";
import { AboutContainer } from "../components/AboutContainer/AboutContainer.style";
import Profile from "../components/Profile/Profile";
import Timeline from "../components/Timeline/Timeline";

export const metadata = {
  title: "About Federico Huneeus",
  description: "Learn more about Federico Huneeus, a frontend developer.",
  openGraph: {
    title: "About Federico Huneeus",
    description: "Learn more about Federico Huneeus, a frontend developer.",
    url: "https://www.federicohuneeus.com/about",
  },
};

export default function About() {
  return (
    <div className={styles.page}>
      <AboutContainer>
        <div className="row">
          <div className="profile-col-wrapper">
            <div className="col profile">
              <Profile />
              <Timeline />
            </div>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
}
