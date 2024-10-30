import json
import numpy as np

# Wczytaj dane z pliku JSON
with open('mapping_data.json', 'r') as file:
    data = json.load(file)

# Lista na uśrednione współrzędne punktów i ich rozrzuty
average_points = []

# Obliczanie średnich współrzędnych oraz rozrzutu dla każdego punktu
num_points = len(data[0]['points'])

for i in range(num_points):
    # Zbieranie współrzędnych x i y dla punktu z każdego cyklu
    x_coords = [cycle['points'][i]['x'] for cycle in data]
    y_coords = [cycle['points'][i]['y'] for cycle in data]
    
    # Obliczanie średniej wartości x i y
    avg_x = np.mean(x_coords)
    avg_y = np.mean(y_coords)
    
    # Obliczanie rozrzutu (odchylenia standardowego) od średniej pozycji
    deviations = np.sqrt((np.array(x_coords) - avg_x) ** 2 + (np.array(y_coords) - avg_y) ** 2)
    deviation = np.std(deviations)
    
    # Dodanie średnich współrzędnych i rozrzutu do listy
    average_points.append({"x": avg_x, "y": avg_y, "deviation": deviation})

# Zapis uśrednionego cyklu pomiarowego do nowego pliku JSON
average_cycle = {"cycle": "average", "points": average_points}

# Zapis do pliku JSON
with open('average_cycle.json', 'w') as file:
    json.dump(average_cycle, file, indent=4)

print("Plik average_cycle.json został wygenerowany z polami 'deviation'.")

