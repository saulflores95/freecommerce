import React, { Component } from 'react';
import AppendHead from 'react-append-head';

const WithOgTags = WrappedComponent => {
    const OgTags = ({ title, description, imgUrl, ...otherProps }) => {
        console.log("OgTags: title", title)
        console.log("OgTags: description", description)
        console.log("OgTags: imgUrl", imgUrl)
        return (
        <div>
            <AppendHead>
                <title>{title}</title>
                <meta name='og-type' property='og:type' content='article' />
                <meta name='og-title' property='og:title' content={title} />
                <meta name='og-description' property='og:description' content={description} />
                <meta name='og-image' property='og:image' content={imgUrl} />
                <meta name='og-image-width' property='og:image:width' content='640' />
                <meta name='og-image-height' property='og:image:height' content='442' />
            </AppendHead>
            <WrappedComponent {...otherProps}/>
        </div>
    )}
    return OgTags
}

export default WithOgTags