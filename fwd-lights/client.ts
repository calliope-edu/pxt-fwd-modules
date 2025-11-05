namespace fwdLights {
    /**
     * Controls LED lights
     **/
    //% fixedInstances blockGap=8
    export class LightsClient extends fwdBase.LightbulbClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Set the brightness of a light or light strip. Brightness peaks at different percentages for different lights.
         * Try a range of percentages to find the zone of control for your specific light.
         * @param brightness 0%-100%
         */
        //% group="Lights"
        //% group.loc.de="Lichter"
        //% group.loc.fr="Lumières"
        //% group.loc.it="Luci"
        //% group.loc.es="Luces"
        //% group.loc.el="Φώτα"
        //% blockId=fwd_lights_set_brightness
        //% block="set $this brightness to $brightness (\\%)"
        //% block.loc.de="setze $this Helligkeit auf $brightness (\\%)"
        //% block.loc.fr="règle $this luminosité à $brightness (\\%)"
        //% block.loc.it="imposta $this luminosità a $brightness (\\%)"
        //% block.loc.es="establecer $this brillo a $brightness (\\%)"
        //% block.loc.el="όρισε $this φωτεινότητα σε $brightness (\\%)"
        //% brightness.min=0
        //% brightness.max=100
        //% weight=100
        setBrightness(brightness: number) {
            super.setBrightness(brightness)
        }

        /**
         * Returns true if the light brightness is anything other than 0%.
         */
        //% group="Lights"
        //% group.loc.de="Lichter"
        //% group.loc.fr="Lumières"
        //% group.loc.it="Luci"
        //% group.loc.es="Luces"
        //% group.loc.el="Φώτα"
        //% block="$this is on"
        //% block.loc.de="$this ist an"
        //% block.loc.fr="$this est allumé"
        //% block.loc.it="$this è acceso"
        //% block.loc.es="$this está encendido"
        //% block.loc.el="$this είναι ενεργό"
        //% blockId=fwd_lights_is_on
        //% weight=99
        isOn(): boolean {
            return super.isOn()
        }
    }

    //% fixedInstance whenUsed
    export const lights1 = new LightsClient("lights1")
    //% fixedInstance whenUsed
    export const lights2 = new LightsClient("lights2")
    //% fixedInstance whenUsed
    export const lights3 = new LightsClient("lights3")
    //% fixedInstance whenUsed
    export const lights4 = new LightsClient("lights4")
}
