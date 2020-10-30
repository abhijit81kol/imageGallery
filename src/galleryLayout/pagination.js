import React from 'react';
import axios from 'axios';

class Pagination extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/photos')
             .then(response=> {
                this.setState({count: response.data.length});
             });
    }

    render(){
        const items = [];
        if(this.state.count>5){
            let m = this.state.count % 5;
            let t = (this.state.count / 5)+m;
            for(let i=1;i<=10;i++){
                if(i==1){
                    items.push(<li className="page-item active" onClick=""><a className="page-link">{i}</a></li>);
                } else {
                    items.push(<li className="page-item" onClick=""><a className="page-link">{i}</a></li>);
                }
            }
        }
        return(
            <div className="container">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                    {items}
                    </ul>
                </nav>
            </div>
        );
    }
    
}

export default Pagination;