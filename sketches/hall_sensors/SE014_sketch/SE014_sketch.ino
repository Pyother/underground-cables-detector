// Stałe czujnika
const float sensorVoltageRef = 5.0;   // Napięcie odniesienia (zasilania czujnika)
const float sensorSensitivity = 0.49; // Czułość czujnika w V/T (490 mV/T dla SE014)

// Stała konwersji ADC na napięcie
const int adcMaxValue = 1023; // 10-bitowy ADC

void setup()
{
    Serial.begin(9600);
    pinMode(A0, INPUT);
}

void loop()
{
    int sensorValue = analogRead(A0); 
    Serial.println(sensorValue)

    delay(200);
}
