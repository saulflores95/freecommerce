import React, { Component } from 'react';
import AppendHead from 'react-append-head';

const WithOgTags = WrappedComponent => {
    const OgTags = ({ title, description, imgUrl,...otherProps }) => (
        <div>
            <AppendHead>
                <title>{title}</title>
                <meta property='og:type' content='article' />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:image' content={imgUrl} />
                <meta property='og:image:width' content='640' />
                <meta property='og:image:height' content='442' />
            </AppendHead>
            <WrappedComponent {...otherProps}/>
        </div>
    )
    return OgTags
}

export default WithOgTags