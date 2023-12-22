'use client'

import { useEffect } from 'react'
import { Capacitor } from '@capacitor/core'
import {
    Camera,
    CameraDirection,
    CameraResultType,
    CameraSource,
} from '@capacitor/camera'

export async function Photo() {
    useEffect(() => {
        const platform = Capacitor.getPlatform()

        if (platform !== 'web') {
            checkPermissions()
        }
    }, [])

    const checkPermissions = async () => {
        /**
         * Check camera and photo album permissions
         */
        const cameraPermissions = await Camera.checkPermissions()
        /**
         * Request camera and photo album permissions
         */
        const result = await Camera.requestPermissions()
        if (
            cameraPermissions.camera !== 'granted' ||
            result.camera !== 'granted' ||
            result.photos !== 'granted'
        ) {
            console.log('no camera permission')
        }
    }

    const takePicture = async () => {
        const image = await Camera.getPhoto({
            /**
             * The quality of image to return as JPEG, from 0-100
             */
            quality: 90,
            /**
             * How the data should be returned. Currently, only 'Base64', 'DataUrl' or 'Uri' is supported
             */
            resultType: CameraResultType.DataUrl,
            /**
             * Whether to save the photo to the gallery.
             * If the photo was picked from the gallery, it will only be saved if edited.
             */
            saveToGallery: true,
            /**
             * The source to get the photo from.
             * By default this prompts the user to select either the photo album or take a photo.
             */
            source: CameraSource.Camera,
            /**
             * iOS and Web only: The camera direction.
             */
            direction: CameraDirection.Rear,
            /**
             * Whether to allow the user to crop or make small edits (platform specific).
             * On iOS 14+ it's only supported for CameraSource.Camera, but not for CameraSource.Photos.
             */
            allowEditing: false,
        })

        console.log(image.dataUrl)
    }

    return <button onClick={() => takePicture()}>Take Photo</button>
}
