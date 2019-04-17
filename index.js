// Algorytmy z wykorzystaniem JavaSctipt + Unit Tests

// // Zadanie 1.
// // // Utwórz funkcję zwracajacą wszystkie anagramy dla wyrazu "BILLE".

// // Co to Anagram?
// // // Wyraz lub zdanie powstałe po przestawieniu liter innego wyrazu.
// // // Oba wyrazy składają się z tych samych liter, tylko w innym porządku. 

exports.genAnagrams = () => {
    let anagrams = [];
    
    return anagrams;
}

// // Zadanie 2.
// Pewna łazienka ma N + 2 stoisk w jednym rzędzie.
// Stragany po lewej i prawej stronie są stale zajmowane przez strażników.
// Pozostałe stoiska N są przeznaczone dla użytkowników.
// Za każdym razem, gdy ktoś wchodzi do łazienki, wybiera stoisko, które znajduje sié najdalej od innych osób.
// Aby uniknąć nieporozumień, kierują się regułami deterministycznymi.
// Dla każdego pustego stoiska S obliczają dwie wartości LS i RS,
// z których każda jest liczbą pustych straganów między S i najbliższym zajmowanym straganem odpowiednio w lewo lub w prawo. 
// Następnie rozważają zestaw stoisk z najdalszym najbliższym sąsiadem, to znaczy S, dla których min (LS, RS) jest maksymalny.
// Jeśli istnieje tylko jedno takie stoisko, wybierają je.
// W przeciwnym razie wybierają ten, w których maks. (LS, RS) jest maksymalny. 
// Jeśli nadal jest wiele straganów, wybierają spośród nich stragan najbardziej na lewo.

// K ludzie mają zamiar wejść do łazienki; każdy wybierze swoje stoisko, zanim nadejdzie następny. Nikt nigdy nie odejdzie.

// Kiedy ostatnia osoba wybierze stoisko S, jakie będą wartości max (LS, RS) i min (LS, RS)?

// Rozwiązywanie tego problemu
// Każda linia opisuje przypadek testowy z dwiema liczbami całkowitymi N i K.

// Dla każdego przypadku testowego wypisz [y, z]
// y jest max(LS, RS),
// z jest min(LS, RS)
// obliczone na podstaie ostatniej osoby, która weszła do łazienki.

// W przypadku małego zestawu danych, limity są na tyle małe, że można po prostu zasymulować reguły przedstawione w instrukcji. 
// Większość implementacji symulacji będzie przebiegać w czasie O(NK) (zakończy się natychmiast)

// [N, K] => N - ilość straganów K - ilośc osób 

exports.bathroomStalls = () => {
    const input = [
      [4, 2],
      [5, 2],
      [6, 2],
      [1000, 1000],
      [1000, 1]
    ];
  
    let output = [];
    
    return output;
}  
