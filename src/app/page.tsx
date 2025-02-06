import Experience from "./components/Experience/Experience";
import { HomeContainer } from "./components/HomeContainer/Profile.style";
import ProfDescription from "./components/ProfDescription/ProfDescription";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeContainer>
        <div className="row">
          <div className="profile-col-wrapper">
            <div className="col profile">
              <Profile />
              <Timeline />
            </div>
          </div>
          <div className="col">
            <ProfDescription />
            <Experience />
          </div>
        </div>
      </HomeContainer>
    </div>
  );
}
