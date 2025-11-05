namespace fwdMotors {
    //% fixedInstances
    export class FwdPumpClient extends modules.RelayClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Turn the pump on or off.
         */
        //% group="Pump"
        //% group.loc.de="Pumpe"
        //% group.loc.fr="Pompe"
        //% group.loc.it="Pompa"
        //% group.loc.es="Bomba"
        //% group.loc.el="Αντλία"
        //% block="turn $this $on"
        //% block.loc.de="schalte $this $on"
        //% block.loc.fr="allumer $this $on"
        //% block.loc.it="accendi $this $on"
        //% block.loc.es="encender $this $on"
        //% block.loc.el="ενεργοποίησε $this $on"
        //% blockId=fwd_pump_set_on
        //% on.shadow="toggleOnOff"
        //% weight=100
        setOn(on: boolean): void {
            super.setActive(on)
        }

        /**
         * Turn on the pump for the selected duration (ms).
         */
        //% group="Pump"
        //% group.loc.de="Pumpe"
        //% group.loc.fr="Pompe"
        //% group.loc.it="Pompa"
        //% group.loc.es="Bomba"
        //% group.loc.el="Αντλία"
        //% block="run $this for $duration ms"
        //% block.loc.de="betreibe $this für $duration ms"
        //% block.loc.fr="faire fonctionner $this pendant $duration ms"
        //% block.loc.it="avvia $this per $duration ms"
        //% block.loc.es="ejecutar $this durante $duration ms"
        //% block.loc.el="εκτέλεσε $this για $duration ms"
        //% duration.shadow="timePicker"
        //% blockId=fwd_pump_timed_run
        //% weight=99
        timedRun(duration: number): void {
            control.inBackground(() => {
                this.setActive(true)
                basic.pause(duration)
                this.setActive(false)
            })
        }

        /**
         * Returns true if the pump is running.
         */
        //% group="Pump"
        //% group.loc.de="Pumpe"
        //% group.loc.fr="Pompe"
        //% group.loc.it="Pompa"
        //% group.loc.es="Bomba"
        //% group.loc.el="Αντλία"
        //% block="$this is on"
        //% block.loc.de="$this ist an"
        //% block.loc.fr="$this est activée"
        //% block.loc.it="$this è accesa"
        //% block.loc.es="$this está encendida"
        //% block.loc.el="$this είναι ενεργή"
        //% blockId=fwd_pump_is_on
        //% weight=98
        isOn(): boolean {
            return super.active()
        }
    }

    //% fixedInstance whenUsed
    export const pump = new FwdPumpClient("pump")
}
