namespace fwdSensors {
    //% fixedInstances
    export class FwdLineFollowerClient extends modules.ReflectedLightClient {
        constructor(role: string) {
            super(role)
        }
        /**
         * Runs code when the sensor changes between detection and no detection states.
         * @param handler the code to run
         */
        //% group="Line" group.loc.de="Linie" group.loc.it="Linea" group.loc.es="Línea" group.loc.el="Γραμμή"
        //% block="on $this state change" block.loc.de="wenn $this Zustand ändert" block.loc.it="quando $this stato cambia" block.loc.es="cuando $this estado cambia" block.loc.el="όταν $this κατάσταση αλλάζει"
        //% blockId=fwd_line_on_line_sensor_state_change
        //% weight=100
        onLineSensorStateChange(handler: () => void): void {
            super.onReadingChangedBy(0.5, handler)
        }
        /**
         * Returns the sensor state, true is detection and false is no detection.
         */
        //% group="Line" group.loc.de="Linie" group.loc.it="Linea" group.loc.es="Línea" group.loc.el="Γραμμή"
        //% block="$this state" block.loc.de="$this Zustand" block.loc.it="$this stato" block.loc.es="$this estado" block.loc.el="$this κατάσταση"
        //% blockId=fwd_line_sensor_state
        //% weight=99
        lineSensorState(): fwdEnums.OnOff {
            return Math.round(super.brightness() / 100)
        }
        /**
         * Returns true if the sensor is in the designated state.
         * @param state on or off
         */
        //% group="Line" group.loc.de="Linie" group.loc.it="Linea" group.loc.es="Línea" group.loc.el="Γραμμή"
        //% block="$this is $state" block.loc.de="$this ist $state" block.loc.it="$this è $state" block.loc.es="$this está $state" block.loc.el="$this είναι $state"
        //% blockId=fwd_line_is_line_sensor_state
        //% weight=98
        isLineSensorState(state: fwdEnums.OnOff): boolean {
            return state === this.lineSensorState()
        }
    }
    //% fixedInstance
    export const line1 = new FwdLineFollowerClient("line1?srvo=0")
    //% fixedInstance
    export const line2 = new FwdLineFollowerClient("line2?srvo=1")
    //% fixedInstance
    export const line3 = new FwdLineFollowerClient("line3?srvo=2")
}
