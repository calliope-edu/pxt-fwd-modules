namespace fwdSensors {
    //% fixedInstances
    export class FwdSoilMoistureClient extends modules.SoilMoistureClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's moisture level reading (%).
         * @de Gibt den Feuchtigkeitswert des Sensors zurück (%).
         * @fr Renvoie la lecture du niveau d'humidité du capteur (%).
         * @it Restituisce la lettura del livello di umidità del sensore (%).
         * @es Devuelve la lectura del nivel de humedad del sensor (%).
         * @el Επιστρέφει την ένδειξη στάθμης υγρασίας του αισθητήρα (%).
         */
        //% group="Moisture"
        //% group.de="Feuchtigkeit"
        //% group.fr="Humidité"
        //% group.it="Umidità"
        //% group.es="Humedad"
        //% group.el="Υγρασία"
        //% block="$this moisture level (\\%)"
        //% block.de="$this Feuchtigkeitswert (\\%)"
        //% block.fr="niveau d'humidité de $this (\\%)"
        //% block.it="livello di umidità di $this (\\%)"
        //% block.es="nivel de humedad de $this (\\%)"
        //% block.el="επίπεδο υγρασίας $this (\\%)"
        //% blockId=fwd_moisture_get_moisture_level
        //% weight=100
        moistureLevel(): number {
            return super.moisture()
        }

        /**
         * Returns true when the moisture level (%) is past the provided threshold in the designated direction.
         * @param threshold the moisture level (%) to check against
         * @param direction over or under the threshold
         * 
         * @de Gibt wahr zurück, wenn der Feuchtigkeitswert (%) den angegebenen Schwellenwert in die gewählte Richtung überschreitet oder unterschreitet.
         * @fr Renvoie vrai lorsque le niveau d'humidité (%) dépasse le seuil indiqué dans la direction choisie.
         * @it Restituisce vero quando il livello di umidità (%) supera o scende sotto la soglia indicata nella direzione scelta.
         * @es Devuelve verdadero cuando el nivel de humedad (%) supera o está por debajo del umbral indicado en la dirección designada.
         * @el Επιστρέφει αληθές όταν το επίπεδο υγρασίας (%) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο προς την επιλεγμένη κατεύθυνση.
         */
        //% group="Moisture"
        //% group.de="Feuchtigkeit"
        //% group.fr="Humidité"
        //% group.it="Umidità"
        //% group.es="Humedad"
        //% group.el="Υγρασία"
        //% block="$this is $direction $threshold \\%"
        //% block.de="$this ist $direction $threshold \\%"
        //% block.fr="$this est $direction $threshold \\%"
        //% block.it="$this è $direction $threshold \\%"
        //% block.es="$this está $direction $threshold \\%"
        //% block.el="$this είναι $direction $threshold \\%"
        //% blockId=fwd_moisture_is_past_threshold
        //% threshold.min=0 threshold.max=100 threshold.defl=5
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.moisture() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const moisture1 = new FwdSoilMoistureClient("moisture1")
    //% fixedInstance whenUsed
    export const moisture2 = new FwdSoilMoistureClient("moisture2")
    //% fixedInstance whenUsed
    export const moisture3 = new FwdSoilMoistureClient("moisture3")
    //% fixedInstance whenUsed
    export const moisture4 = new FwdSoilMoistureClient("moisture4")
}
