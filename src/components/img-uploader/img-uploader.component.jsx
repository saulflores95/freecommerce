import './img-uploader.scss'
import React, { useState, useEffect } from 'react';


const ImgUploader = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // De forma similar a componentDidMount y componentDidUpdate

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        console.log("onSelectFile: e", e);
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        console.log("e.target.files[0]: ", e.target.files[0]);
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className="avatar-upload">
            <div className="avatar-edit">
                <input  type='file' 
                        id="imageUpload" 
                        accept=".png, .jpg, .jpeg" 
                        onChange={onSelectFile} />
                <label htmlFor="imageUpload"></label>
            </div>
            <div className="avatar-preview">
                <div id="imagePreview" style={{ backgroundImage: `url(${preview})`}}>
                </div>
            </div>
        </div>
    )
}

export default ImgUploader