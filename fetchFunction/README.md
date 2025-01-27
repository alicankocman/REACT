# React Users Component

### Bu proje, React kullanılarak bir API'den kullanıcı verilerinin çekilmesini ve görüntülenmesini sağlayan basit bir uygulamadır. React Hooks (useState ve useEffect) kullanılarak geliştirilmiştir.

### Özellikler

* API'den kullanıcı verilerini çekme
* "Yükleniyor..." mesajı ile yükleme durumu gösterimi
* Dinamik kullanıcı listesi görüntüleme

### Kod Örneği

```jsx
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {loading && <div>Yükleniyor...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
