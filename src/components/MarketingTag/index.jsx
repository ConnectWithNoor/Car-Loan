import React from 'react'

const MarketingTag = ({ Icon, title, description }) => {
    return (
        <div className="flex items-center mb-5 ml-8 p-2">
            <Icon className="text-5xl mr-5 p-1" />
            <div>
                <h3 className="mb-3 text-2xl font-bold">{title}</h3>
                <p>{description}</p>
            </div>
            <div></div>
        </div>
    )
}

export default MarketingTag;
