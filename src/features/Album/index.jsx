import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/Albumlist';

AlbumsFeature.propTypes = {
    
};

function AlbumsFeature(props) {

    const albumList = [
        {
            id: 1,
            name: 'Nhạc trẻ gây nghiện',
            thumbnailUrl : 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/0/5/c/f05c599832086a0a60f1105db362619f.jpg'
        },
        {
            id: 2,
            name: 'Những bảng hit Hàn Quốc',
            thumbnailUrl : 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/3/8/b/f38b644157befefcd23e88420237b6bd.jpg'
        },
        {
            id: 3,
            name: 'indie Việt',
            thumbnailUrl : 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/9/a/1/59a188fea8b6fead76a8f8cbd19a6d50.jpg'
        },
        {
            id: 4,
            name: 'Phược cùng Rap',
            thumbnailUrl : 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/c/8/5/bc851d955b666a5fd2ce87463dbdbb4a.jpg'
        }
    ]

    return (
        <div>
            <h2>CÓ THỂ BẠN MUỐN NGHE</h2>
            <AlbumList albumList = {albumList} />
        </div>
    );
}

export default AlbumsFeature;