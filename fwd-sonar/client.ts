namespace fwdSensors {
    //% fixedInstances
    export class FwdSonarClient extends modules.DistanceClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's distance reading (m).
         * @locale de Gibt die Distanz des Sensors zurück (m).
         * @locale fr Renvoie la distance mesurée par le capteur (m).
         * @locale it Restituisce la distanza del sensore (m).
         * @locale es Devuelve la distancia medida por el sensor (m).
         * @locale el Επιστρέφει την απόσταση που ανιχνεύει ο αισθητήρας (m).
         */
        //% group="Sonar"
        //% group.loc.de="Sonar"
        //% group.loc.fr="Sonar"
        //% group.loc.it="Sonar"
        //% group.loc.es="Sonar"
        //% group.loc.el="Σόναρ"
        //% block="$this distance (m)"
        //% block.loc.de="$this Distanz (m)"
        //% block.loc.fr="distance $this (m)"
        //% block.loc.it="distanza $this (m)"
        //% block.loc.es="distancia $this (m)"
        //% block.loc.el="απόσταση $this (m)"
        //% blockId=fwd_sonar_get_distance
        //% weight=100
        distance(): number {
            return super.distance()
        }

        /**
         * Returns true when the distance (m) is past the provided threshold in the designated direction.
         * @param threshold the distance (m) to check against
         * @param direction over or under the threshold
         * @locale de Gibt wahr zurück, wenn die Distanz (m) den angegebenen Schwellenwert in die gewählte Richtung überschreitet oder unterschreitet.
         * @locale fr Renvoie vrai lorsque la distance (m) dépasse le seuil indiqué dans la direction choisie.
         * @locale it Restituisce vero quando la distanza (m) supera o scende sotto la soglia indicata nella direzione scelta.
         * @locale es Devuelve verdadero cuando la distancia (m) supera o está por debajo del umbral indicado en la dirección designada.
         * @locale el Επιστρέφει αληθές όταν η απόσταση (m) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο προς την επιλεγμένη κατεύθυνση.
         */
        //% group="Sonar"
        //% group.loc.de="Sonar"
        //% group.loc.fr="Sonar"
        //% group.loc.it="Sonar"
        //% group.loc.es="Sonar"
        //% group.loc.el="Σόναρ"
        //% block="$this is $direction $threshold m"
        //% block.loc.de="$this ist $direction $threshold m"
        //% block.loc.fr="$this est $direction $threshold m"
        //% block.loc.it="$this è $direction $threshold m"
        //% block.loc.es="$this está $direction $threshold m"
        //% block.loc.el="$this είναι $direction $threshold m"
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
