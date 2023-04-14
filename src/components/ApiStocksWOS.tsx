// import { useSelector } from "react-redux";
// SASS
import "./AppleWatch.scss";

export const WosStockApi = () => {
  // const { ApiStocksWOSState } = useSelector(
  //   (state: any) => state.ApiStocksWOSStore
  // );

  return (
    <div className="wos-widget-api">
      <p id="market">
        <span>WOSG.L</span>
      </p>
      {/* <div id="stock-price">{ApiStocksWOSState.stockPrice}</div> */}
    </div>
  );
};
