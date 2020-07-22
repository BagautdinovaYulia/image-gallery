import React, {Component} from "react";
import "./Images.sass";
import "./DragnDrop.js"
import Dragndrop from "./DragnDrop.js";

class Images extends Component {
    constructor(props){
        super(props);
        this.state={
            imageUrl: "",
            imageUrlArray: [
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550746.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964007.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550739.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964009.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550740.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964011.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550755.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964013.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550745.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964014.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964016.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964010.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550754.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964021.jpg",
                "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg",
            ],
            showModal: false,
            popImageUrl: ""
        }
        this.imageSubmitter = this.imageSubmitter.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }
     
    imageSubmitter(e){
        e.preventDefault();
        let imageUrlArray = this.state.imageUrlArray;
        imageUrlArray.push(this.state.imageUrl)
        this.setState({
            imageUrlArray: imageUrlArray
        })
    }

    handleLinkChange(e){
        e.preventDefault();
        this.setState({
            imageUrl: e.target.value
        })
    }

    deleteImage(e){
        const imageDeleted=this.state.imageUrlArray.filter(
            imageUrlArray => imageUrlArray.e!==e);
        this.setState({
            imageUrlArray: imageDeleted
        })
    }
    

    render(){
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url) => {
            return (
                <img
                className="singleImage"
                src={url}
                key={this.state.index}
                alt=""
                />
            )
        })
        
        return (
            <div className="Images">
                <div className="Images__AddField">
                    <Dragndrop />
                    <form onSubmit={this.imageSubmitter}>
                       <input type="text" placeholder="Введите URL" onChange={this.handleLinkChange}/>
                       <button type="submit">Загрузить</button>
                    </form>
                </div>
                {images}
            </div>
        )
    }
}

export default Images;