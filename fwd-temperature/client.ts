namespace fwdSensors {
    //% fixedInstances
    export class FwdTemperatureClient extends modules.TemperatureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's temperature reading (°C).
         * @locale de Gibt die Temperatur des Sensors zurück (°C).
         * @locale fr Renvoie la température mesurée par le capteur (°C).
         * @locale it Restituisce la temperatura del sensore (°C).
         * @locale es Devuelve la temperatura medida por el sensor (°C).
         * @locale el Επιστρέφει τη θερμοκρασία που ανιχνεύει ο αισθητήρας (°C).
         */
        //% group="Temperature Probe"
        //% group.loc.de="Temperaturfühler"
        //% group.loc.fr="Sonde de température"
        //% group.loc.it="Sonda di temperatura"
        //% group.loc.es="Sonda de temperatura"
        //% group.loc.el="Αισθητήρας θερμοκρασίας"
        //% block="$this °C"
        //% block.loc.de="$this °C"
        //% block.loc.fr="$this °C"
        //% block.loc.it="$this °C"
        //% block.loc.es="$this °C"
        //% block.loc.el="$this °C"
        //% blockId=fwd_temperature_get_temperature
        //% weight=100
        temperature(): number {
            return super.temperature()
        }

        /**
         * Returns true when the temperature (°C) is past the provided threshold in the designated direction.
         * @param threshold the temperature (°C) to check against
         * @param direction over or under the threshold
         * @locale de Gibt wahr zurück, wenn die Temperatur (°C) den angegebenen Schwellenwert in die gewählte Richtung überschreitet oder unterschreitet.
         * @locale fr Renvoie vrai lorsque la température (°C) dépasse le seuil indiqué dans la direction choisie.
         * @locale it Restituisce vero quando la temperatura (°C) supera o scende sotto la soglia indicata nella direzione scelta.
         * @locale es Devuelve verdadero cuando la temperatura (°C) supera o está por debajo del umbral indicado en la dirección designada.
         * @locale el Επιστρέφει αληθές όταν η θερμοκρασία (°C) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο προς την επιλεγμένη κατεύθυνση.
         */
        //% group="Temperature Probe"
        //% group.loc.de="Temperaturfühler"
        //% group.loc.fr="Sonde de température"
        //% group.loc.it="Sonda di temperatura"
        //% group.loc.es="Sonda de temperatura"
        //% group.loc.el="Αισθητήρας θερμοκρασίας"
        //% block="$this is $direction $threshold °C"
        //% block.loc.de="$this ist $direction $threshold °C"
        //% block.loc.fr="$this est $direction $threshold °C"
        //% block.loc.it="$this è $direction $threshold °C"
        //% block.loc.es="$this está $direction $threshold °C"
        //% block.loc.el="$this είναι $direction $threshold °C"
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
