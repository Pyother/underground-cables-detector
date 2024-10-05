#include <Wire.h>
#include "SparkFun_TMAG5273_Arduino_Library.h"

TMAG5273 sensor; 

// * Adres I2C:
uint8_t i2cAddress = 0x22;

void setup() {
    Wire.begin();
    Serial.begin(115200);

    Serial.println("TMAG5273 Example 1: Basic Readings");
    Serial.println("");

    if(sensor.begin(i2cAddress, Wire) == 1) {
        Serial.println("Begin");
    } else {
        Serial.println("Failed to begin");
        while(1);
    }
}

void loop() {
    if(sensor.getMagneticChannel() != 0) {
        
        float magX = sensor.getXData();
        float magY = sensor.getYData();
        float magZ = sensor.getZData();

        float fieldStrength = sqrt(pow(magX, 2) + pow(magY, 2) + pow(magZ, 2));
        Serial.println(fieldStrength);
        
    } else {
        Serial.println("Mag Channels disabled, stopping..");
        while (1);
    }

    delay(100);
}