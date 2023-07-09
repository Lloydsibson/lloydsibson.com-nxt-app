import { useSelector } from "react-redux";

export const WosStockApi = () => {
  // ACCESS STATE FROM REDUX STORE
  const { ApiStocksWOSState } = useSelector(
    (state: any) => state.ApiStocksWOSStore
  );

  return (
    <div className="wos-widget-api">
      <p id="market">
        <span>WOSG.L</span>
      </p>
      <div id="stock-price">{ApiStocksWOSState.stockPrice}</div>
    </div>
  );
};
