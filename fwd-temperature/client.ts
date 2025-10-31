namespace fwdSensors {
    //% fixedInstances
    export class FwdTemperatureClient extends modules.TemperatureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's temperature reading (°C).
         * @de Gibt die Temperatur des Sensors zurück (°C).
         * @fr Renvoie la température mesurée par le capteur (°C).
         * @it Restituisce la temperatura del sensore (°C).
         * @es Devuelve la temperatura medida por el sensor (°C).
         * @el Επιστρέφει τη θερμοκρασία που ανιχνεύει ο αισθητήρας (°C).
         */
        //% group="Temperature Probe"
        //% group.de="Temperaturfühler"
        //% group.fr="Sonde de température"
        //% group.it="Sonda di temperatura"
        //% group.es="Sonda de temperatura"
        //% group.el="Αισθητήρας θερμοκρασίας"
        //% block="$this °C"
        //% block.de="$this °C"
        //% block.fr="$this °C"
        //% block.it="$this °C"
        //% block.es="$this °C"
        //% block.el="$this °C"
        //% blockId=fwd_temperature_get_temperature
        //% weight=100
        temperature(): number {
            return super.temperature()
        }

        /**
         * Returns true when the temperature (°C) is past the provided threshold in the designated direction.
         * @param threshold the temperature (°C) to check against
         * @param direction over or under the threshold
         * @de Gibt wahr zurück, wenn die Temperatur (°C) den angegebenen Schwellenwert in die gewählte Richtung überschreitet oder unterschreitet.
         * @fr Renvoie vrai lorsque la température (°C) dépasse le seuil indiqué dans la direction choisie.
         * @it Restituisce vero quando la temperatura (°C) supera o scende sotto la soglia indicata nella direzione scelta.
         * @es Devuelve verdadero cuando la temperatura (°C) supera o está por debajo del umbral indicado en la dirección designada.
         * @el Επιστρέφει αληθές όταν η θερμοκρασία (°C) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο προς την επιλεγμένη κατεύθυνση.
         */
        //% group="Temperature Probe"
        //% group.de="Temperaturfühler"
        //% group.fr="Sonde de température"
        //% group.it="Sonda di temperatura"
        //% group.es="Sonda de temperatura"
        //% group.el="Αισθητήρας θερμοκρασίας"
        //% block="$this is $direction $threshold °C"
        //% block.de="$this ist $direction $threshold °C"
        //% block.fr="$this est $direction $threshold °C"
        //% block.it="$this è $direction $threshold °C"
        //% block.es="$this está $direction $threshold °C"
        //% block.el="$this είναι $direction $threshold °C"
        //% blockId=fwd_temperature_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.temperature() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const temperature1 = new FwdTemperatureClient("temperature1")
    //% fixedInstance whenUsed
    export const temperature2 = new FwdTemperatureClient("temperature2")
    //% fixedInstance whenUsed
    export const temperature3 = new FwdTemperatureClient("temperature3")
    //% fixedInstance whenUsed
    export const temperature4 = new FwdTemperatureClient("temperature4")
}
