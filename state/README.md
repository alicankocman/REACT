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
