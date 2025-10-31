namespace fwdLights {
    export const enum LEDRingPixels {
        //% block="1"
        Pixel1 = 0,
        //% block="2"
        Pixel2 = 1,
        //% block="3"
        Pixel3 = 2,
        //% block="4"
        Pixel4 = 3,
        //% block="5"
        Pixel5 = 4,
        //% block="6"
        Pixel6 = 5,
        //% block="7"
        Pixel7 = 6,
        //% block="8"
        Pixel8 = 7,
    }
    //% fixedInstances
    export class FwdLEDRingClient extends modules.LedClient {
        MAX_REPORT_BRIGHTNESS = 10
        MAX_SERVICE_BRIGHTNESS = 100
        toBlocksBrightness(serviceBrightness: number): number {
            return (
                (this.MAX_REPORT_BRIGHTNESS * serviceBrightness) /
                this.MAX_SERVICE_BRIGHTNESS
            )
        }
        toServiceBrightness(reportBrightness: number): number {
            return (
                (this.MAX_SERVICE_BRIGHTNESS * reportBrightness) /
                this.MAX_REPORT_BRIGHTNESS
            )
        }
        constructor(role: string) {
            super(role)
        }
        /**
         * Set a specific pixel to a color.
         * @param pixel the pixel number (1-8)
         * @param color the hex value of the color
         */
        //% block="set $this pixel $pixel to $color=colorNumberPicker" block.loc.de="setze $this Pixel $pixel auf $color=colorNumberPicker" block.loc.it="imposta $this pixel $pixel a $color=colorNumberPicker" block.loc.es="establecer $this píxel $pixel a $color=colorNumberPicker" block.loc.el="όρισε $this pixel $pixel σε $color=colorNumberPicker"
        //% blockId=fwd_led_ring_set_pixel_color
        //% group="LED Ring" group.loc.de="LED-Ring" group.loc.it="Anello LED" group.loc.es="Anillo LED" group.loc.el="Δακτύλιος LED"
        //% weight=100
        setPixelColor(pixel: LEDRingPixels, color: number): void {
            super.setPixelColor(pixel, color)
        }
        /**
         * Set all pixels to a color.
         * @param color the hex value of the color
         */
        //% block="set all $this pixels to $color=colorNumberPicker" block.loc.de="setze alle $this Pixel auf $color=colorNumberPicker" block.loc.it="imposta tutti i $this pixel a $color=colorNumberPicker" block.loc.es="establecer todos los $this píxeles a $color=colorNumberPicker" block.loc.el="όρισε όλα τα $this pixel σε $color=colorNumberPicker"
        //% blockId=fwd_led_set_all_pixels_color
        //% group="LED Ring" group.loc.de="LED-Ring" group.loc.it="Anello LED" group.loc.es="Anillo LED" group.loc.el="Δακτύλιος LED"
        //% weight=99
        setAllPixelsColor(color: number): void {
            super.setAll(color)
        }
        /**
         * Set the brightness of the pixels.
         * @param brightness a number between 0 (off) and 10 (full power)
         */
        //% block="set $this brightness to $brightness" block.loc.de="setze $this Helligkeit auf $brightness" block.loc.it="imposta $this luminosità a $brightness" block.loc.es="establecer $this brillo a $brightness" block.loc.el="όρισε $this φωτεινότητα σε $brightness"
        //% blockId=fwd_led_ring_set_brightness
        //% group="LED Ring" group.loc.de="LED-Ring" group.loc.it="Anello LED" group.loc.es="Anillo LED" group.loc.el="Δακτύλιος LED"
        //% brightness.min=0 brightness.max=10 brightness.defl=10
        //% weight=98
        setBrightness(brightness: number): void {
            super.setBrightness(this.toServiceBrightness(brightness))
        }
        /**
         * Rotate the light pattern left or right, wrapping the last pixel back to the first
         * @param offset the number of positions to rotate, +ve = cw and -ve = ccw
         */
        //% block="rotate $this pattern by $offset" block.loc.de="rotiere $this Muster um $offset" block.loc.it="ruota $this motivo di $offset" block.loc.es="rotar $this patrón por $offset" block.loc.el="περιστροφή $this μοτίβο κατά $offset"
        //% blockId=fwd_led_ring_rotate
        //% group="LED Ring" group.loc.de="LED-Ring" group.loc.it="Anello LED" group.loc.es="Anillo LED" group.loc.el="Δακτύλιος LED"
        //% offset.defl=1
        //% weight=97
        rotate(offset: number): void {
            super.rotate(offset)
        }
        /**
         * Shift the light pattern left or right. If the light pattern is shifted past the first or last pixel, that part of the pattern is removed.
         * @param offset the number of positions to shift, +ve = cw and -ve = ccw
         */
        //% block="shift $this pattern by $offset" block.loc.de="verschiebe $this Muster um $offset" block.loc.it="sposta $this motivo di $offset" block.loc.es="desplazar $this patrón por $offset" block.loc.el="μετατόπιση $this μοτίβο κατά $offset"
        //% blockId=fwd_led_ring_shift
        //% group="LED Ring" group.loc.de="LED-Ring" group.loc.it="Anello LED" group.loc.es="Anillo LED" group.loc.el="Δακτύλιος LED"
        //% offset.defl=1
        //% weight=96
        shift(offset: number): void {
            super.shift(offset)
        }
        /**
         * Returns the brightness level of the ring (0-10).
         */
        //% block="$this brightness" block.loc.de="$this Helligkeit" block.loc.it="$this luminosità" block.loc.es="$this brillo" block.loc.el="$this φωτεινότητα"
        //% blockId=fwd_led_ring_get_brightness
        //% group="LED Ring" group.loc.de="LED-Ring" group.loc.it="Anello LED" group.loc.es="Anillo LED" group.loc.el="Δακτύλιος LED"
        //% weight=95
        brightness(): number {
            return this.toBlocksBrightness(super.brightness())
        }
    }
    //% fixedInstance whenUsed
    export const ledRing1 = new FwdLEDRingClient("ledRing1")
    //% fixedInstance whenUsed
    export const ledRing2 = new FwdLEDRingClient("ledRing2")
    //% fixedInstance whenUsed
    export const ledRing3 = new FwdLEDRingClient("ledRing3")
    //% fixedInstance whenUsed
    export const ledRing4 = new FwdLEDRingClient("ledRing4")
}
