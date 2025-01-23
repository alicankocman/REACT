# React Props Yapısı

React'te **props** (properties), bileşenler arasında veri iletmek için kullanılır. Props, bir bileşene dışarıdan veri gönderilmesini sağlar ve bu veriler bileşenin render edilmesinde kullanılır.

## Props Kullanımı

Props, bir bileşenin içine **parametre** olarak gönderilir. Bu veriler **değiştirilemez** (immutable) ve yalnızca okuma amaçlıdır. Props, genellikle üst bileşenlerden alt bileşenlere veri iletmek için kullanılır.

---

## Örnek Kullanım 

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

```
### User bileşeni, props olarak data ve friends alır. Bu bileşen, kullanıcı bilgilerini ve arkadaş listesini ekranda görüntüler.
## USER BİLEŞENİ
```jsx
import React from 'react';

function User({ data, friends }) {
  return (
    <div>
      <h2>Kişi</h2>
      <div>İsim: {data.name}</div>
      <div>Yaş: {data.age}</div>
      <div>Şehir: {data.city}</div>
      
      <h3>Arkadaşlar</h3>
      {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}
      <hr />
    </div>
  );
}

export default User;
```
### APP BİLEŞENİ
```jsx
import React from 'react';
import User from './components/User';

const user = {
  name: "Alican KOÇMAN",
  city: "Mersin",
  age: 24,
};

function App() {
  return (
    <div>
      <User data={user} friends={["Ahmet", "Murat", "Ayşe", "Fatma"]} />
    </div>
  );
}

export default App;
```
# React'te PropTypes Kullanımı ile Örnek Komponent

Bu örnek, React'te bir fonksiyonel komponentin `PropTypes` kullanarak nasıl yapılandırılacağını gösterir. Kullanıcı bilgilerini ve arkadaş listesini dinamik olarak görüntüleyen bir `User` komponenti oluşturulmuştur.

### **User.js**
```javascript
import React from "react";
import PropTypes from "prop-types";

function User({ title, data, friends }) {
  return (
    <div>
      <strong>{title}</strong>
      <div>İsim: {data.name}</div>
      <div>Yaş: {data.age}</div>
      <div>Şehir: {data.city}</div>
      <h3>Arkadaşları</h3>
      {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}
      <hr />
    </div>
  );
}

User.propTypes = {
  title: PropTypes.string,
  data: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
  }),
  friends: PropTypes.array,
};

User.defaultProps = {
  title: "Kişi",
};

export default User;
```
### App.js
```javascript
import React from "react";
import User from "./components/User";

function App() {
  return (
    <div>
      <User
        title="Kişi"
        data={{
          name: "Alican KOÇMAN",
          city: "Mersin",
          age: 24,
        }}
        friends={["Ahmet", "Murat", "Ayşe", "Fatma"]}
      />
    </div>
  );
}

export default App;

