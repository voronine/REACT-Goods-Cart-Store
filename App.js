import GoodsList from './containers/GoodsList';
import CartList from './containers/CartList';

function App() {
  return (
    <div>
      {/* Вывод данных из хранилища */}
      <GoodsList />
      <CartList />
    </div>
  );
}

export default App;
