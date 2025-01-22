import User from "./components/User"

function App() {
  return (
    <div style={{ display: 'flex', gap:'300px' }}>
      <User name="Alican KOÇMAN" city="ISTANBUL" age={24} />
      <User name="CAN KOÇ" city="TEKIRDAG" age={27} />
      <User name="ALİ KOÇAN" city="MERSIN" age={26} />
      <User name="MEHMET ANTALYALI" city="ANTALYA" age={25} />
    </div>
  );
}

export default App;
