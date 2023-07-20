import { Link } from "react-router-dom";
import "../styles/Header.css";
import NewReply from "./NewReply";
import NewThread from "./NewThread";

type Props = {
  pageType?: string;
};

const Header = ({ pageType }: Props) => {
  const boards = [
    "/g",
    "/a",
    "/v",
    "/b",
    "/fit",
    "/br",
    "/gta",
    "/sh",
    "/ps1",
    "/ps2",
    "/ps3",
    "/pc",
    "/mob",
    "/mpv",
    "/vlc",
    "/pol",
    "/sp",
    "/rj",
  ];

  return (
    <header>
      <nav className="boards-nav">
        <ul className="boards-list">
          {boards.map((board) => (
            <li className="boards-list-item" key={board}>
              <a className="boards-link" href="#">
                {board}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <h1 className="board-title">
        <Link to="/">/g/ - Technology</Link>
      </h1>
      {pageType === "catalog" ? <NewThread /> : <NewReply />}
    </header>
  );
};

export default Header;
