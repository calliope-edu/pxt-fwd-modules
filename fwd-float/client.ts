namespace fwdSensors {
    //% fixedInstances
    export class FwdFloatClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when the chosen event occurs.
         * @param event raised or lowered
         * @param handler the code to run
         * @de Code, der ausgeführt wird, wenn das gewählte Ereignis eintritt.
         * @fr Code à exécuter lorsque l'événement choisi se produit.
         * @it Codice da eseguire quando si verifica l'evento scelto.
         * @es Código a ejecutar cuando ocurre el evento seleccionado.
         * @el Κώδικας που εκτελείται όταν συμβαίνει το επιλεγμένο γεγονός.
         */
        //% group="Float"
        //% group.de="Schwimmer"
        //% group.fr="Flotteur"
        //% group.it="Galleggiante"
        //% group.es="Flotador"
        //% group.el="Φλοτέρ"
        //% block="on $this $event"
        //% block.de="wenn $this $event"
        //% block.fr="quand $this $event"
        //% block.it="quando $this $event"
        //% block.es="cuando $this $event"
        //% block.el="όταν $this $event"
        //% blockId=fwd_float_on_change
        //% weight=100
        onFloatChange(event: fwdEnums.RaisedLowered, handler: () => void) {
            if (event === fwdEnums.RaisedLowered.Raised) {
                super.onEvent(jacdac.ButtonEvent.Up, handler)
            } else if (event === fwdEnums.RaisedLowered.Lowered) {
                super.onEvent(jacdac.ButtonEvent.Down, handler)
            }
        }

        /**
         * Returns the sensor state, 1 is raised and 0 is lowered.
         * @de Gibt den Zustand des Sensors zurück, 1 = oben, 0 = unten.
         * @fr Renvoie l'état du capteur, 1 = levé, 0 = abaissé.
         * @it Restituisce lo stato del sensore, 1 = sollevato, 0 = abbassato.
         * @es Devuelve el estado del sensor, 1 = levantado, 0 = bajado.
         * @el Επιστρέφει την κατάσταση του αισθητήρα, 1 = ανυψωμένο, 0 = κατεβασμένο.
         */
        //% group="Float"
        //% group.de="Schwimmer"
        //% group.fr="Flotteur"
        //% group.it="Galleggiante"
        //% group.es="Flotador"
        //% group.el="Φλοτέρ"
        //% block="$this state"
        //% block.de="$this Zustand"
        //% block.fr="$this état"
        //% block.it="$this stato"
        //% block.es="$this estado"
        //% block.el="$this κατάσταση"
        //% blockId=fwd_float_state
        //% weight=99
        floatState(): number {
            if (super.pressed()) {
                return fwdEnums.RaisedLowered.Lowered
            } else {
                return fwdEnums.RaisedLowered.Raised
            }
        }

        /**
         * Returns true if the sensor is in the designated state.
         * @param state raised or lowered
         * @de Gibt wahr zurück, wenn der Sensor sich im angegebenen Zustand befindet.
         * @fr Renvoie vrai si le capteur est dans l'état indiqué.
         * @it Restituisce vero se il sensore è nello stato indicato.
         * @es Devuelve verdadero si el sensor está en el estado indicado.
         * @el Επιστρέφει αληθές αν ο αισθητήρας βρίσκεται στην καθορισμένη κατάσταση.
         */
        //% group="Float"
        //% group.de="Schwimmer"
        //% group.fr="Flotteur"
        //% group.it="Galleggiante"
        //% group.es="Flotador"
        //% group.el="Φλοτέρ"
        //% block="$this is $state"
        //% block.de="$this ist $state"
        //% block.fr="$this est $state"
        //% block.it="$this è $state"
        //% block.es="$this está $state"
        //% block.el="$this είναι $state"
        //% blockId=fwd_float_state_conditional
        //% weight=98
        floatStateConditional(state: fwdEnums.RaisedLowered): boolean {
            if (state === fwdEnums.RaisedLowered.Raised) {
                return !super.pressed()
            } else {
                return super.pressed()
            }
        }
    }

    //% fixedInstance whenUsed
    export const float1 = new FwdFloatClient("float1")
    //% fixedInstance whenUsed
    export const float2 = new FwdFloatClient("float2")
    //% fixedInstance whenUsed
    export const float3 = new FwdFloatClient("float3")
    //% fixedInstance whenUsed
    export const float4 = new FwdFloatClient("float4")
}
