### State Kullanılarak Count Değerini arttırma

Aşağıda 4 adet buton yer almaktadır.Her birine farklı bir artış miktarı verilmiştir.Count temelinde bir sayı barındırır.Artış değeri amountdan gelen miktara gelen değer alır yeni değer Count parametresine aktarılır.

```jsx

import React, {useState} from "react";

function Counter() {
  const [count,setCount]=useState(0);
  const [amount,setAmount]=useState(1);


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+amount)}>Arttırır</button>
    <hr/>
    <div>
      Arttirma
    </div>
    <button onClick={()=>setAmount(1)}>+1</button>
    <button onClick={()=>setAmount(3)}>+3</button>
    <button onClick={()=>setAmount(10)}>+10</button>
    </div>
  );
}

export default Counter

```
### State yapısı kullanılarak string gelen iki paremetrenin değerini butonlar aracılığı ile değiştiren kod bloğu aşağıda verilmektedir.


```jsx
import React, {useState} from 'react'

function user() {
    const [user,setUser]=useState({ name:'Mehmet',surname:"Seven" });
  return (
    <div>
      <h2> User </h2>
      {user.name} {user.surname}

    <div>
      <button onClick={()=> setUser({...user,name:"Alican"})}>Ismi degistir</button>
      <button onClick={()=>setUser({...user,surname:"KOÇMAN"})}>Soyismi Degistir</button>
    </div>
    </div>
  )
}

export default user

```
# React Renkler Bileşeni
## Bu proje, React kullanarak bir renk listesi oluşturmayı ve listeye dinamik olarak yeni renkler eklemeyi gösterir. State, şu nedenlerle kullanılmıştır:
* Listeyi Dinamik Güncelleme: Renklerin saklanması ve yeni renklerin eklenmesi için.
* Otomatik Yeniden Render: State değiştiğinde, React bileşeni otomatik olarak güncellenir ve yeni liste ekranda görünür.

```jsx
import React, { useState } from 'react';

function Colors() {
  const [colors, setColors] = useState(["Sarı", "Lacivert", "Kırmızı"]);

  const handleClick = () => {
    setColors([...colors, "Yesil"]);
  };

  return (
    <div>
      <h2>Renkler</h2>
      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}

      <button onClick={handleClick}>Renk Ekle</button>
    </div>
  );
}

export default Colors;

```
# React'te `prev` Kullanımı Örnekleri

### React'te state güncellemelerinde `prev` genellikle bir **callback fonksiyonu** içinde kullanılır. Bu yöntem, önceki state'e güvenli bir şekilde erişim sağlar ve React'in asenkron state güncellemeleriyle oluşabilecek hataları önler.

### Aşağıda verilen örnekte prev'i mevcut `count` değerine erişmek için kullanıyoruz.React'te state güncellemeleri asenkron olduğundan, doğrudan `count + amount` yazmak hatalara neden olabilir.
```jsx
import React, {useState} from "react";

function Counter() {
  const [count,setCount]=useState(0);
  const [amount,setAmount]=useState(1);


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev)=>prev+amount)}>Arttırır</button>
    <hr/>
    <div>
      Arttirma
    </div>
    <button onClick={()=>setAmount(1)}>+1</button>
    <button onClick={()=>setAmount(3)}>+3</button>
    <button onClick={()=>setAmount(10)}>+10</button>
    </div>
  );
}

export default Counter

```
Aşağıda yer alan `setColors` fonksiyonunda, mevcut `colors` dizisine erişmek için bir callback fonksiyonu kullanıyoruz.`prev`, önceki `colors` dizisinin bir kopyasını alır.
```jsx
import React, { useState } from 'react';

function Colors() {
  const [colors, setColors] = useState(["Sarı", "Lacivert", "Kırmızı"]);

  const handleClick = () => {
    setColors(prev =>([...prev, "Yesil"]));
  };

  return (
    <div>
      <h2>Renkler</h2>
      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}

      <button onClick={handleClick}>Renk Ekle</button>
    </div>
  );
}

export default Colors;

