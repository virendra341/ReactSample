import React, { PureComponent } from 'react'
import Carousel from 'react-bootstrap/lib/Carousel'

class FeedItem extends PureComponent {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="plr-20px">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nisl nisi. In mollis inter...</p>
                        <strong>BCC Sport || Twitter</strong>
                    </div>
                </div>
                <div className="col">
                    <div className="plr-20px">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis nisl nisi. In mollis inter...</p>
                        <strong>Architecture Feeds || Twitter</strong>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = FeedItem;
