import React from 'react';

import GalleryTable from './galleryTable';
import Pagination from './pagination';

class GalleryLayout extends React.Component {
render(){
  return (
    <div className="container-fluid">
        <h2 className="text-center text-primary text-uppercase">
            Image Gallery
        </h2>
        <GalleryTable />
        <Pagination />
    </div>
  );
}
}
export default GalleryLayout;