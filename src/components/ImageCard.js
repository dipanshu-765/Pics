import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imgRef = React.createRef();
        this.state = { spans: 0 };
    }

    setSpans = () => {
        const height = this.imgRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({ spans });
    }

    componentDidMount(){
        this.imgRef.current.addEventListener('load', this.setSpans);
    }

    render(){
        const { description, urls } = this.props.image;
        return(
            <div style={{ gridRowEnd: `span ${ this.state.spans }` }}>
                <img 
                    ref={ this.imgRef }
                    alt={ description } 
                    src={ urls.regular }
                />
                
            </div>
        )
    }
}

export default ImageCard;