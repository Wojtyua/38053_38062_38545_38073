# Calorie Calculator

Strona Licząca Kalorie to przyjazna użytkownikowi aplikacja, która pomaga śledzić dzienne spożycie kalorii i efektywnie zarządzać dietą. Użytkownicy mogą rejestrować swoje posiłki, przeglądać informacje o wartości odżywczej i jeść to co lubią, bez obaw o swoją wagę.

# Funkcje
- **Rejestrowanie posiłków:** Łatwe dodawanie śniadania, obiadu, kolacji i przekąsek.
- **Śledzenie kalorii:** Automatyczne obliczanie całkowitego dziennego spożycia kalorii.
- **Informacje odżywcze:** Szczegółowy podział makroskładników (białka, tłuszcze, węglowodany).

## Instalacja
Aby uruchomić stronę *Calorie Calculator* lokalnie, wykonaj następujące kroki:

1. **Sklonuj repozytorium:**
    ```sh
    git clone https://github.com/Wojtyua/38053_38062_38545_38073.git
    cd 38053_38062_38545_38073
    ```

2. **Zainstaluj zależności:**
    ```sh
    npm install
    ```
    lub
    ```sh
    npm install --force
    ```

3. **Uruchom aplikację:**
    ```sh
    npm run dev
    ```

4. **Otwórz przeglądarkę:**
    Przejdź do `http://localhost:5173`, aby zobaczyć aplikację.


## Użytkowanie
1. **Rejestrowanie posiłków:** Dodawaj posiłki, wyszukując je z bazy
```sh
const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await supabase.from("products").select("*");
      setProducts(data);
    };

    getProducts();
  }, []);

  return products;
}
```
3. **Przeglądanie kaloryki posiłków:** Sprawdź ile kalorii mają twoje posiłki.
```sh
const useSelectedProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totals, setTotals] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    sugar: 0,
    fat: 0,
  });

  const addProductToList = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
    setTotals((prevTotals) => ({
      calories: prevTotals.calories + product.calories,
      protein: prevTotals.protein + product.protein,
      carbs: prevTotals.carbs + product.carbs,
      sugar: prevTotals.sugar + product.sugar,
      fat: prevTotals.fat + product.fat,
    }));
  };

  return {
    selectedProducts,
    totals,
    addProductToList,
  };
};
```
4. **Przeglądanie informacji odżywczych:** Sprawdź podział odżywczy swoich posiłków.
```sh
{selectedProducts.map((product, index) => (
            <tr className="capitalize bg-white even:bg-gray-50" key={index}>
              <td className="py-2 px-4 border-b border-gray-200">{product.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.calories)} kcal</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.protein)}g</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.carbs)}g</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.sugar)}g</td>
              <td className="py-2 px-4 border-b border-gray-200">{Math.round(product.fat)}g</td>
            </tr>
```


## Licencja
Ten projekt jest licencjonowany na warunkach licencji MIT.

Dziękujemy za korzystanie ze Strony Liczącej Kalorie!
