namespace fwdSensors {
    //% fixedInstances
    export class FwdLineFollowerClient extends modules.ReflectedLightClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Runs code when the sensor changes between detection and no detection states.
         * @param handler the code to run
         * @de Führt Code aus, wenn der Sensor zwischen Erkennung und keiner Erkennung wechselt.
         * @fr Exécute le code lorsque le capteur passe entre les états de détection et de non-détection.
         * @it Esegue il codice quando il sensore cambia tra rilevamento e nessun rilevamento.
         * @es Ejecuta el código cuando el sensor cambia entre detección y no detección.
         * @el Εκτελεί κώδικα όταν ο αισθητήρας αλλάζει μεταξύ κατάστασης ανίχνευσης και μη ανίχνευσης.
         */
        //% group="Line"
        //% group.loc.de="Linie"
        //% group.loc.fr="Ligne"
        //% group.loc.it="Linea"
        //% group.loc.es="Línea"
        //% group.loc.el="Γραμμή"
        //% block="on $this state change"
        //% block.loc.de="wenn $this Zustand ändert"
        //% block.loc.fr="quand $this change d’état"
        //% block.loc.it="quando $this stato cambia"
        //% block.loc.es="cuando $this estado cambia"
        //% block.loc.el="όταν $this κατάσταση αλλάζει"
        //% blockId=fwd_line_on_line_sensor_state_change
        //% weight=100
        onLineSensorStateChange(handler: () => void): void {
            super.onReadingChangedBy(0.5, handler)
        }

        /**
         * Returns the sensor state, true is detection and false is no detection.
         * @de Gibt den Sensorzustand zurück, wahr bedeutet Erkennung, falsch keine Erkennung.
         * @fr Renvoie l’état du capteur ; vrai indique une détection, faux aucune détection.
         * @it Restituisce lo stato del sensore; vero indica rilevamento, falso nessun rilevamento.
         * @es Devuelve el estado del sensor; verdadero indica detección, falso ninguna detección.
         * @el Επιστρέφει την κατάσταση του αισθητήρα· αληθές σημαίνει ανίχνευση, ψευδές καμία ανίχνευση.
         */
        //% group="Line"
        //% group.loc.de="Linie"
        //% group.loc.fr="Ligne"
        //% group.loc.it="Linea"
        //% group.loc.es="Línea"
        //% group.loc.el="Γραμμή"
        //% block="$this state"
        //% block.loc.de="$this Zustand"
        //% block.loc.fr="état de $this"
        //% block.loc.it="$this stato"
        //% block.loc.es="$this estado"
        //% block.loc.el="$this κατάσταση"
        //% blockId=fwd_line_sensor_state
        //% weight=99
        lineSensorState(): fwdEnums.OnOff {
            return Math.round(super.brightness() / 100)
        }

        /**
         * Returns true if the sensor is in the designated state.
         * @param state on or off
         * @de Gibt wahr zurück, wenn der Sensor sich im angegebenen Zustand befindet.
         * @fr Renvoie vrai si le capteur est dans l’état indiqué.
         * @it Restituisce vero se il sensore è nello stato specificato.
         * @es Devuelve verdadero si el sensor está en el estado designado.
         * @el Επιστρέφει αληθές εάν ο αισθητήρας βρίσκεται στην καθορισμένη κατάσταση.
         */
        //% group="Line"
        //% group.loc.de="Linie"
        //% group.loc.fr="Ligne"
        //% group.loc.it="Linea"
        //% group.loc.es="Línea"
        //% group.loc.el="Γραμμή"
        //% block="$this is $state"
        //% block.loc.de="$this ist $state"
        //% block.loc.fr="$this est $state"
        //% block.loc.it="$this è $state"
        //% block.loc.es="$this está $state"
        //% block.loc.el="$this είναι $state"
        //% blockId=fwd_line_is_line_sensor_state
        //% weight=98
        isLineSensorState(state: fwdEnums.OnOff): boolean {
            return state === this.lineSensorState()
        }
    }

    //% fixedInstance whenUsed
    export const line1 = new FwdLineFollowerClient("line1?srvo=0")
    //% fixedInstance whenUsed
    export const line2 = new FwdLineFollowerClient("line2?srvo=1")
    //% fixedInstance whenUsed
    export const line3 = new FwdLineFollowerClient("line3?srvo=2")
}
