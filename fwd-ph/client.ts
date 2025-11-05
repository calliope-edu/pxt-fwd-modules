namespace fwdSensors {
    //% fixedInstances
    export class FwdPhClient extends modules.AcidityClient {
        private calibrated: boolean = false
        private standard1: number
        private reading1: number
        private standard2: number
        private reading2: number

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's pH reading.
         */
        //% group="pH"
        //% group.loc.de="pH"
        //% group.loc.fr="pH"
        //% group.loc.it="pH"
        //% group.loc.es="pH"
        //% group.loc.el="pH"
        //% block="$this pH"
        //% block.loc.de="$this pH"
        //% block.loc.fr="$this pH"
        //% block.loc.it="$this pH"
        //% block.loc.es="$this pH"
        //% block.loc.el="$this pH"
        //% blockId=fwd_ph_get_ph
        //% weight=100
        ph(): number {
            if (this.calibrated) {
                const slope =
                    (this.standard2 - this.standard1) /
                    (this.reading2 - this.reading1)
                const intercept = this.standard1 - slope * this.reading1
                const reading = super.acidity()

                return slope * reading + intercept
            } else {
                return super.acidity()
            }
        }

        /**
         * Returns true when the pH is past the provided threshold in the designated direction.
         * @param threshold the pH to check against
         * @param direction over or under the threshold
         */
        //% group="pH"
        //% group.loc.de="pH"
        //% group.loc.fr="pH"
        //% group.loc.it="pH"
        //% group.loc.es="pH"
        //% group.loc.el="pH"
        //% block="$this is $direction $threshold pH"
        //% block.loc.de="$this ist $direction $threshold pH"
        //% block.loc.fr="$this est $direction $threshold pH"
        //% block.loc.it="$this è $direction $threshold pH"
        //% block.loc.es="$this está $direction $threshold pH"
        //% block.loc.el="$this είναι $direction $threshold pH"
        //% blockId=fwd_ph_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.ph() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }

        /**
         * Calibrates the pH probe against 2 solutions with a known pH to ensure accurate readings.
         * The calibration will not apply to the live value displayed in MakeCode when the micro:bit is connected.
         * @param standard1 the known pH of standard1, generally 4, 7, or 10
         * @param reading1 the measured pH of standard1
         * @param standard2 the known pH of standard2, generally 4, 7, or 10
         * @param reading2 the measured pH of standard2
         */
        //% group="pH"
        //% group.loc.de="pH"
        //% group.loc.fr="pH"
        //% group.loc.it="pH"
        //% group.loc.es="pH"
        //% group.loc.el="pH"
        //% block="calibrate $this measures $standard1 as $reading1 measures $standard2 as $reading2"
        //% block.loc.de="kalibriere $this: $standard1 misst $reading1, $standard2 misst $reading2"
        //% block.loc.fr="calibrer $this: $standard1 mesure $reading1, $standard2 mesure $reading2"
        //% block.loc.it="calibra $this: $standard1 misura $reading1, $standard2 misura $reading2"
        //% block.loc.es="calibrar $this: $standard1 mide $reading1, $standard2 mide $reading2"
        //% block.loc.el="βαθμονόμηση $this: $standard1 μετρά $reading1, $standard2 μετρά $reading2"
        //% blockId=fwd_ph_calibrate
        //% inlineInputMode=external
        //% weight=98
        calibrate(
            standard1: number,
            reading1: number,
            standard2: number,
            reading2: number
        ): void {
            this.standard1 = standard1
            this.reading1 = reading1
            this.standard2 = standard2
            this.reading2 = reading2
            this.calibrated = true
        }
    }

    //% fixedInstance whenUsed
    export const ph1 = new FwdPhClient("pH1")
    //% fixedInstance whenUsed
    export const ph2 = new FwdPhClient("pH2")
    //% fixedInstance whenUsed
    export const ph3 = new FwdPhClient("pH3")
    //% fixedInstance whenUsed
    export const ph4 = new FwdPhClient("pH4")
}
