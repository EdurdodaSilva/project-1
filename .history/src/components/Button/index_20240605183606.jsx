import { Component } from 'react';

export class Button extends Component {
    render() {
        return(
            <button onClick={this.loadMorePosts}>
                Load more post
            </button>
        )
    }
}