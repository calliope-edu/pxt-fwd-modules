namespace fwdSensors {
    //% fixedInstances
    export class FwdSonarClient extends modules.DistanceClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's distance reading (m).
         * @de Gibt die Distanz des Sensors zurück (m).
         * @fr Renvoie la distance mesurée par le capteur (m).
         * @it Restituisce la distanza del sensore (m).
         * @es Devuelve la distancia medida por el sensor (m).
         * @el Επιστρέφει την απόσταση που ανιχνεύει ο αισθητήρας (m).
         */
        //% group="Sonar"
        //% group.de="Sonar"
        //% group.fr="Sonar"
        //% group.it="Sonar"
        //% group.es="Sonar"
        //% group.el="Σόναρ"
        //% block="$this distance (m)"
        //% block.de="$this Distanz (m)"
        //% block.fr="distance $this (m)"
        //% block.it="distanza $this (m)"
        //% block.es="distancia $this (m)"
        //% block.el="απόσταση $this (m)"
        //% blockId=fwd_sonar_get_distance
        //% weight=100
        distance(): number {
            return super.distance()
        }

        /**
         * Returns true when the distance (m) is past the provided threshold in the designated direction.
         * @param threshold the distance (m) to check against
         * @param direction over or under the threshold
         * @de Gibt wahr zurück, wenn die Distanz (m) den angegebenen Schwellenwert in die gewählte Richtung überschreitet oder unterschreitet.
         * @fr Renvoie vrai lorsque la distance (m) dépasse le seuil indiqué dans la direction choisie.
         * @it Restituisce vero quando la distanza (m) supera o scende sotto la soglia indicata nella direzione scelta.
         * @es Devuelve verdadero cuando la distancia (m) supera o está por debajo del umbral indicado en la dirección designada.
         * @el Επιστρέφει αληθές όταν η απόσταση (m) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο προς την επιλεγμένη κατεύθυνση.
         */
        //% group="Sonar"
        //% group.de="Sonar"
        //% group.fr="Sonar"
        //% group.it="Sonar"
        //% group.es="Sonar"
        //% group.el="Σόναρ"
        //% block="$this is $direction $threshold m"
        //% block.de="$this ist $direction $threshold m"
        //% block.fr="$this est $direction $threshold m"
        //% block.it="$this è $direction $threshold m"
        //% block.es="$this está $direction $threshold m"
        //% block.el="$this είναι $direction $threshold m"
        //% blockId=fwd_sonar_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.distance() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const sonar1 = new FwdSonarClient("sonar1")
    //% fixedInstance whenUsed
    export const sonar2 = new FwdSonarClient("sonar2")
    //% fixedInstance whenUsed
    export const sonar3 = new FwdSonarClient("sonar3")
    //% fixedInstance whenUsed
    export const sonar4 = new FwdSonarClient("sonar4")
}
