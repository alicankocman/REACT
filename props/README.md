# React Props Yapısı

React'te **props** (properties), bileşenler arasında veri iletmek için kullanılır. Props, bir bileşene dışarıdan veri gönderilmesini sağlar ve bu veriler bileşenin render edilmesinde kullanılır.

## Props Kullanımı

Props, bir bileşenin içine **parametre** olarak gönderilir. Bu veriler **değiştirilemez** (immutable) ve yalnızca okuma amaçlıdır. Props, genellikle üst bileşenlerden alt bileşenlere veri iletmek için kullanılır.

### Örnek Kullanım

```jsx
import React from 'react';

// User bileşeni
function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.city}</p>
      <p>{props.age}</p>
    </div>
  );
}

// App bileşeni
function App() {
  return (
    <div>
      <User name="Alican KOÇMAN" city="ISTANBUL" age={24} />
      <User name="CAN KOÇ" city="TEKIRDAG" age={27} />
    </div>
  );
}

export default App;
