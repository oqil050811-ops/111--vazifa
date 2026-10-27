import Sidebar from "./components/Sidebar";
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <ProductTable />
      </div>
    </div>
  );
}

export default App;
