namespace fwdMotors {
    //% fixedInstances
    export class FwdPumpClient extends modules.RelayClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Turn the pump on or off.
         * @param on on = true, off = false
         * @de Schaltet die Pumpe ein oder aus.
         * @fr Allume ou éteint la pompe.
         * @it Accende o spegne la pompa.
         * @es Enciende o apaga la bomba.
         * @el Ενεργοποιεί ή απενεργοποιεί την αντλία.
         */
        //% group="Pump"
        //% group.de="Pumpe"
        //% group.fr="Pompe"
        //% group.it="Pompa"
        //% group.es="Bomba"
        //% group.el="Αντλία"
        //% block="turn $this $on"
        //% block.de="schalte $this $on"
        //% block.fr="allumer $this $on"
        //% block.it="accendi $this $on"
        //% block.es="encender $this $on"
        //% block.el="ενεργοποίησε $this $on"
        //% blockId=fwd_pump_set_on
        //% on.shadow="toggleOnOff"
        //% weight=100
        setOn(on: boolean): void {
            super.setActive(on)
        }

        /**
         * Turn on the pump for the selected duration (ms).
         * @param duration how long to run the pump (ms)
         * @de Schaltet die Pumpe für die angegebene Dauer (ms) ein.
         * @fr Allume la pompe pendant la durée sélectionnée (ms).
         * @it Accende la pompa per la durata selezionata (ms).
         * @es Enciende la bomba durante la duración seleccionada (ms).
         * @el Ενεργοποιεί την αντλία για την επιλεγμένη διάρκεια (ms).
         */
        //% group="Pump"
        //% group.de="Pumpe"
        //% group.fr="Pompe"
        //% group.it="Pompa"
        //% group.es="Bomba"
        //% group.el="Αντλία"
        //% block="run $this for $duration ms"
        //% block.de="betreibe $this für $duration ms"
        //% block.fr="faire fonctionner $this pendant $duration ms"
        //% block.it="avvia $this per $duration ms"
        //% block.es="ejecutar $this durante $duration ms"
        //% block.el="εκτέλεσε $this για $duration ms"
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
         * Returns true if the pump is running and false if it's stopped.
         * @de Gibt wahr zurück, wenn die Pumpe läuft, andernfalls falsch.
         * @fr Renvoie vrai si la pompe fonctionne, sinon faux.
         * @it Restituisce vero se la pompa è in funzione, altrimenti falso.
         * @es Devuelve verdadero si la bomba está en funcionamiento, falso si está parada.
         * @el Επιστρέφει αληθές εάν η αντλία λειτουργεί και ψευδές εάν έχει σταματήσει.
         */
        //% group="Pump"
        //% group.de="Pumpe"
        //% group.fr="Pompe"
        //% group.it="Pompa"
        //% group.es="Bomba"
        //% group.el="Αντλία"
        //% block="$this is on"
        //% block.de="$this ist an"
        //% block.fr="$this est activée"
        //% block.it="$this è accesa"
        //% block.es="$this está encendida"
        //% block.el="$this είναι ενεργή"
        //% blockId=fwd_pump_is_on
        //% weight=98
        isOn(): boolean {
            return super.active()
        }
    }

    //% fixedInstance whenUsed
    export const pump = new FwdPumpClient("pump")
}
