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

```
## React Form Uygulaması
### Bu projede, kullanıcının isim, soyisim ve cinsiyet bilgilerini girebileceği bir form oluşturulmuştur. Kullanıcının girdiği bilgiler, React'in useState hook'u ile yönetilmekte ve anlık olarak ekrana yansıtılmaktadır.

* State kullanımı:
name, surname ve gender state'leri form verilerini kontrol etmek ve dinamik bir kullanıcı deneyimi sağlamak için kullanılmıştır.
 
* Dinamik güncelleme:
Kullanıcı her veri girdiğinde veya seçim yaptığında, state güncellenir ve bilgiler ekranda gerçek zamanlı olarak gösterilir.

Bu yapı, React'in bileşen tabanlı uygulamalarında nasıl kullanılacağını basit bir şekilde göstermektedir.

``` jsx

import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('Alican');
  const [surname, setSurname] = useState('KOÇMAN');
  const [gender,setGender] = useState ("0");

  return (
    <div>
      <div>
        <div>Name</div>
        <input
          placeholder="Isim"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Soyisim"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      </div>
    <div>
        <br/>
        <div>Cinsiyet</div>
    <select value={gender} onChange={(event)=>setGender(event.target.value)}>
        <option value="0">Erkek</option>
        <option value="1">Kadın</option>
    </select>
    <hr/>
    </div>
    İsim:
      <strong>
        {name} {surname}
      </strong>
<div>
      Cinsiyet: <strong> {gender ==='0' ? 'Erkek' : 'Kadın'}</strong>
     
    </div>
    </div>
    
  );
}

export default Form;

```
## Yukarıda verilen örneğin benzeri aşağıda verilmektedir.Aralarındaki fark;
### İlk örnek, her bir alan için ayrı bir state tanımlar (name, surname, gender) ve ayrı onChange fonksiyonları kullanır. Küçük formlar için daha basittir.
### İkinci örnek, tüm form verilerini tek bir nesne (Form) içinde saklar ve tek bir handleChange fonksiyonu ile yönetir. Daha düzenlidir, büyük formlar için uygundur.

``` jsx

import React, { useState } from 'react';

function Form() {
    const[Form,setForm]=useState({name: "",surname: "", gender: "0"});

    const handleChange = (e) => {
        setForm((prev) =>({
            ...prev,[e.target.name]: e.target.value
        }
        
        )
        )
    }

  return (
    <div>
      <div>
        <div>Name</div>
        <input
          name='name'
          placeholder="Isim"
          value={Form.name}
          onChange={handleChange}
        />
        <input  
        name='surname'
          placeholder="Soyisim"
          value={Form.surname}
          onChange={handleChange}
        />
      </div>
    <div>
        <br/>
        <div>Cinsiyet</div>
    <select name='gender' value={Form.gender} onChange={handleChange}>
        <option value="0">Erkek</option>
        <option value="1">Kadın</option>
    </select>
    <hr/>
    </div>
    İsim:
      <strong>
        {Form.name} {Form.surname}
      </strong>
<div>
      Cinsiyet: <strong> {Form.gender ==='0' ? 'Erkek' : 'Kadın'}</strong>
     
    </div>
    </div>
    
  );
}

export default Form;

