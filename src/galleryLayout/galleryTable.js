import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import * as actions from '../store/actions';

class GalleryTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
             .then(response=> {
                this.props.initialData(response.data);
                console.log(response.data.length);
                this.setState({error: false});
             }).catch(error => {
                 this.setState({error: true});
             });
    };

    render(){
        let imgGallery = this.props.initialGallery.map(el => {
            return (<tr key={el.id}>
                <th scope="row">{el.id}</th>
                <td>{el.title}</td>
                <td>
                    <img src={el.thumbnailUrl} width="50" />  <a href={el.url} target="_blank">{el.url}</a>
                </td>
            </tr>);
        });

        return(
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">URL</th>
                    </tr>
                </thead>
                <tbody>
                    {imgGallery}
                </tbody>
            </table>
            
        );
    }
    
}

const mapStateToProps = state => {
    return {
        initialGallery : state.galleryData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initialData: (data) => dispatch(actions.initialLoading(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryTable);