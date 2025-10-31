namespace fwdSensors {
    /**
     * A sensor measuring ElectricalConductivity.
     * @fr Un capteur mesurant la conductivité électrique.
     **/
    //% fixedInstances
    export class FwdEcClient extends modules.ElectricalConductivityClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's relative EC reading.
         * @fr Renvoie la valeur EC relative mesurée par le capteur.
         */
        //% group="Relative EC" group.loc.de="Relative LF" group.loc.it="EC Relativa" group.loc.es="CE Relativa" group.loc.el="Σχετική ΗΑ" group.loc.fr="CE Relative"
        //% block="$this reading" block.loc.de="$this Messwert" block.loc.it="$this lettura" block.loc.es="$this lectura" block.loc.el="$this ανάγνωση" block.loc.fr="$this lecture"
        //% blockId=fwd_ec_get_ec
        //% weight=100
        ec(): number {
            return Math.round(super.reading())
        }

        /**
         * Returns true when the relative EC is past the provided threshold in the designated direction.
         * @param threshold the EC value to check against
         * @param direction over or under the threshold
         * @fr Renvoie vrai si la CE relative dépasse le seuil fourni dans la direction indiquée.
         */
        //% group="Relative EC" group.loc.de="Relative LF" group.loc.it="EC Relativa" group.loc.es="CE Relativa" group.loc.el="Σχετική ΗΑ" group.loc.fr="CE Relative"
        //% block="$this is $direction $threshold" block.loc.de="$this ist $direction $threshold" block.loc.it="$this è $direction $threshold" block.loc.es="$this está $direction $threshold" block.loc.el="$this είναι $direction $threshold" block.loc.fr="$this est $direction $threshold"
        //% blockId=fwd_ec_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.ec() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const ec1 = new FwdEcClient("ec1")
    //% fixedInstance whenUsed
    export const ec2 = new FwdEcClient("ec2")
    //% fixedInstance whenUsed
    export const ec3 = new FwdEcClient("ec3")
    //% fixedInstance whenUsed
    export const ec4 = new FwdEcClient("ec4")
}
