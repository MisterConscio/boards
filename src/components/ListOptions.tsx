import "../styles/ListOptions.css";
import Button from "./ui/Button";
import Input from "./ui/Input";

const ListOptions = () => {
  return (
    <>
      <ul className="options-menu">
        <li className="options-menu-item">
          <ul className="info-menu">
            <li>
              <Button label="Archive" />
            </li>
            <li>
              <Button label="Refresh" />
            </li>
          </ul>
        </li>
        <li className="options-menu-item">
          <ul className="search-menu">
            <li>
              <form>
                <Input type="text" placeholder="Search" />
              </form>
            </li>
          </ul>
        </li>
        <li className="options-menu-item">
          <ul className="settings-menu">
            <li>
              <select>
                <option value="bump order">Bump Order</option>
                <option value="last reply">Last Reply</option>
                <option value="creation date">Creation Date</option>
                <option value="reply count">Reply Count</option>
              </select>
            </li>
            <li>
              <select>
                <option value="small">Small</option>
                <option value="large">Large</option>
              </select>
            </li>
            <li>
              <select>
                <option value="on">On</option>
                <option value="off">Off</option>
              </select>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default ListOptions;
