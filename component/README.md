# React Component İsimlendirme Kuralları

React projelerinde bileşen isimlendirme, kodun okunabilirliği, sürdürülebilirliği ve takım çalışmasına uygunluğu açısından önemlidir. İşte bileşen isimlendirme sırasında dikkat edilmesi gerekenler:

## 1. PascalCase Kullanımı
- React bileşenleri her zaman `PascalCase` (yani her kelimenin ilk harfi büyük) ile isimlendirilmelidir.
- **Örnek:**
  ```jsx
  function UserProfile() {
    return <div>User Profile</div>;
  }
## 2. Anlamlı ve Açıklayıcı İsimler
- Bileşen adı, bileşenin işlevini veya amacını açıkça ifade etmelidir. 
- Yanlış: Comp1, MyComponent
- Doğru: LoginButton, UserCard

  ## 3. Tekil ve Çoğul Anlamlar
  - Tekil bir öğeyi temsil eden bileşenler için tekil isim, bir listeyi temsil eden bileşenler için çoğul isim kullanın.
- **Örnek:**
'''jsx
  function UserItem() {
  return <div>Single User</div>;
}

function UserList() {
  return <ul>{/* User items */}</ul>;
}
## 4. Dosya Adı ile Bileşen Adı Aynı Olmalı
Bir bileşen dosyasının adı, içindeki bileşenle aynı olmalıdır. Bu, dosyaların hızlıca bulunmasını kolaylaştırır.
- **Örnek**
'''jsx
components/
├── Header.js   // Header bileşeni
├── Footer.js   // Footer bileşeni

## 5. UI veya Container Bileşenleri
Sadece görünümü temsil eden bileşenler için UI son eki kullanılabilir.
Durum veya mantık yöneten bileşenlerde genelde bir Container son eki tercih edilebilir.
- **Örnek**
'''jsx
function UserCardUI() {
  return <div>User Info</div>;
}

function UserCardContainer() {
  // Mantık ve veri işleme
  return <UserCardUI />;
}

## 6. Düzenli Kapsam İsimlendirmesi
Bileşenleri bir alt yapının parçası olarak ifade ederken ParentChild yapısını kullanın.
- **Örnek**
'''jsx
function NavbarMenu() {
  return <nav>Menu</nav>;
}

function NavbarLogo() {
  return <div>Logo</div>;
}
## 7.Kısaltmalardan Kaçının
Anlamı net olmayan kısaltmalardan ve genel isimlerden kaçının.
Yanlış: UsrPrfl, Cmp
Doğru: UserProfile, ComponentWrapper

## 8.Dil Tutarlılığı
Projede tek bir dil kullanılmalıdır (genellikle İngilizce tercih edilir).
Yanlış: KullanıcıListesi, UserEkle
Doğru: UserList, AddUser

## 9.Reusability (Yeniden Kullanılabilirlik) için Soyut İsimler
Tek bir işleve değil, genel bir konsepte hizmet eden bileşenler için soyut isimler kullanın.
- **Örnek**
'''jsx
 function Button({ label }) {
  return <button>{label}</button>;
}

## 10.Proje Standardına Uygunluk
Takım içinde kararlaştırılmış bileşen isimlendirme kurallarına uyun.
