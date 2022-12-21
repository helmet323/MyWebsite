import "./portfolioList.scss";

function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portforlioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default PortfolioList;
