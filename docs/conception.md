# Detektor podziemnych przewodów elektrycznych

### Opis problemu
Kable ziemne to rodzaj okablowania stosowany zarówno w zakładach przemysłowych, jak i w lokalnych sieciach zasilających. Kable mogą być zakopywane w ziemi, ale sposób ich ułożenia jest prawnie określany za pomocą przepisów. Głębokość zakopania kabli jest zależna od czynników związanych z terenem (np. typ gruntu, środowiska), jednak najczęściej występują następujące głębokości poniżej powierzchni gruntu:
* **50 cm** - w miejscach, gdzie będą znajdować się płyty chodnikowe bądź droga. 
* **70-80** - pod powierzchnią mającą podsypkę z piasku oraz w miejscach użytku rolnego.

Ułożenie kabli elektrycznych powinno być zawarte w projekcie instalacji elektrycznej dla danej działki lub nieruchomości, jednak  w praktyce zdarza się, że rzeczywisty przebieg kabli może różnić się od projektu. Prawo budowalne stale ewoluuje, a niektóre przewody funkcjonują już od lat, w których taki rozkład nie był unormowany. Określenie w którym miejscu znajduje się podziemny kabel może być wymagającym zadaniem, dlatego moim celem jest opracowanie uniwersalnego urządzenia, które ułatwi ten proces. 

### Metody detekcj
Wyróżniamy różne przypadki detekcji:
* **Tryb aktywny** - kabel znajduje się pod napięciem i wytwarza wokół siebie pole elektromagnetyczne. Za pomocą magnetometru można wykryć zmianę pola magnetycznego. Do wykrywania tego typu 
* **Tryb pasywny (radiowy)** - w przewodzie nie płynie prąd, dlatego do kabla należy wprowadzić sygnał radiowy. Kabel zadziała wtedy jak antena, emitując pole elektromagnetyczne, które następnie można wykryć za pomocą wyposażonego w antenę odbiornka.

### Założenia projektu
* Opracowanie metody detekcji podziemnych kabli pod napięciem.
* Zaproponowanie sposobu detekcji kabli w których nie płynie prąd elektryczny (ze względu na drogie i ciężko dostępne urządzenia pomiarowe, taka metoda może być niemożliwa do wykonania).
* System czasu rzeczywistego do wizualizacji skanów i zarządzania urządzeniem pomiarowym. 
* Regulacja czułości detekcji.
* Trasowanie przebiegu kabla elektrycznego. 
* Istotą projektu pozostają badania. Istnieją już gotowe rozwiązania (ceny wahają się od 100 do 10000 zł), jednak istotą pracy jest badanie nad sposobem detekcji przeprowadzonej za pomocą prostych, ogólnodostępnych metod, oraz zaproponowaniem użytecznej aplikacji do obsługi systemu. 

### Najważniejsze kroki do realizacji
* Przetestowanie kilku różnych ogólnodostępnych magnetometrów, porównanie odczytów i wyciągnięcie wniosków (jak powinien przebiegać pomiar, ograniczenia poszczególnych modeli). 
* (opcjonalnie) Fuzja sensorów - połączenie odczytów, wyznaczanie wyniku detekcji w czasie rzeczywistym (prosty system detekcji oparty o logikę rozmytą).
* Gromadzenie danych i eliminacja szumów pomiarowych. W zależności od wyników, możliwe że zostanie zastosowany fizyczny filter (dolnoprzepustowy lub cyfrowy). W tym momencie pracy dobrana metoda będzie zależała od postaci odczytów (np. filtr Kalmana, średnia arytmetyczna). Celem będzie doprowadzenie wyników do postaci, w której będzie można określać informacje o głebokości kabla, jego współrzędnych (z pewną przyjętą dokładnością) i kierunku. 
* Określenie dokładności precyzji pomiarów i szacowanie błędów pomiarowych. 
* Badania terenowe i testowanie systemu w różnych przypadkach.
* Opracowanie aplikacji działającej w czasie rzeczywistym - wizualizacja i zarządzanie systemem (np. regulowanie czułości).
* Integracja systemu z mobilnym robotem pomiarowym. 

### Ograniczenia projektu
* Niedokładności urządzeń pomiarowych - z powodu ograniczeń finansowych, wykorzystane w systemie urządzenia będą miały ograniczoną jakość detekcji. 
* Zakłócenia pomiarowe - podczas wykonywania pomiarów w gruncie mogą znajdować się również inne elementy zakrzywiające pole magnetyczne (metalowe rury, wzajemne oddziaływania kabli). Jednym z najważniejszych celów pracy są badania nad sposobem ich eliminacji.
* Tłumnienie sygnału przez glebę. 

### Przewidywania
Wykonałem wstępne obliczenia, które pozwalają na określenie najlepszego i najgorszego scenariusza pomiarowego przy użyciu magnetometru [BNO085 9-DOF IMU Fusion Breakout](https://botland.com.pl/czujniki-9dof-imu/22113-bno085-9-dof-imu-fusion-breakout-3-osiowy-akcelerometr-zyroskop-i-magnetometr-adafruit-4754.html).

* Najlepszy scenariusz:

    * **Gleba**: Sucha, piaszczysta.
    * **Natężenie prądu**: Kable wysokiego napięcia, prąd powyżej 10 A.
    * **Głębokość detekcji**: od 0,5 m do nawet 2 m, w zależności od czułości magnetometru i odległości.

* Najgorszy scenariusz:

    * **Gleba**: Wilgotna, gliniasta lub z dużą ilością minerałów ferromagnetycznych.
    * **Natężenie prądu**: Prąd niskiego napięcia, poniżej 5 A.
    * **Głębokość detekcji**: 0,2 - 0,5 m. 


